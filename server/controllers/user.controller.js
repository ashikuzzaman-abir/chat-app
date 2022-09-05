const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../configs/main.config");
const rn = require("random-number");
const { v4: uuid } = require("uuid");
const {fork} = require('child_process');


module.exports = {
	createUser: async (req, res) => {
		try {
			const hash = await bcrypt.hash(req.body.password, 10);
			const payload = {
				name: req.body.name,
				email: req.body.email,
				password: hash,
				username: req.body.username,
			};
			const user = await prisma.user.create({
				data: payload,
			});
			if (user) {
				res.status(200).json({
					message: "User created successfully",
				});
				
			}
		} catch (error) {
			if (error) {
				console.log(error);
				res.status(400).json(error);
				
			}
		}
	},

	loginUser: async (req, res) => {
		try {
			const user = await prisma.user.findUnique({
				where: {
					username: req.body.username
				},
			});
			if (user) {
				const isMatch = await bcrypt.compare(
					req.body.password,
					user.password
				);
				const payload = {
					id: user.id,
					name: user.name,
					email: user.email,
					username: user.username,
				};

				if (isMatch) {
					const token = await jwt.sign(
						payload,
						config.jwt.secret,
						config.jwt.options
					);
					res.status(200)
						.cookie("token", token, {
							httpOnly: true,
						})
						.json({
							message: `${user.name} logged in successfully`,
							token,
							user: payload
						});
					
				} else {
					res.status(400).json({
						message: "Invalid password",
					});
					
				}
			} else {
				res.status(400).send({
					message: "User not found",
				});
				
			}
		} catch (error) {
			if (error) {
				console.log(error);
				res.status(400).json(error);
			}
			
		}
	},
	logoutUser: async (req, res) => {
		try {
			res.clearCookie("token").json({
				message: `${req.user.name} logged out successfully`,
			});
			
		} catch (error) {
			if (error) {
				console.log(error);
				res.status(400).json(error);
			}
			
		}
	},

	reqRecoverUser: async (req, res) => {
		try {
			const email = req.body.email;
			const otp = rn.generator({
				min: 0,
				max: 999999,
				integer: true,
			})();
			const user = await prisma.user.findUnique({
				where: {
					email,
				},
			});
			
			const otpdata = await prisma.PasswordRecoveryOTP.create({
				data: {
					userId: user?.id,
					otp,
				},
			});
			const mailOptions = {
				from: config.nodemailer.from,
				to: user?.email,
				subject: "One Time Password for recovering user account",
				text: `your one-time-password is ${otp}`,
				html: `<h1>${otp}</h1>`,
			};
			res.status(200).send(
				`send otp to: ${config.backendURL}api/user/otp/${otpdata.id}`
			);
			const mailer = fork("./nodemailer/nodemailer.js");
			mailer.send(mailOptions);
			// mailer.on('message', message => {
			// 	console.log(message);
			// })
		} catch (ex) {
			if (ex) {
				console.log(ex);
				res.status(401).send("invalid email");
				
			}
		}
	},
	recoverWithOTP: async (req, res) => {
		try {
			const otpId = req.params.otpId;
			const userSendOtp = Number(req.body.otp);
			const otpdata = await prisma.PasswordRecoveryOTP.findUnique({
				where: {
					id: otpId,
				},
			});
			if (otpdata.expired) {
				return res.status(400).send("OTP Expired");
			}
			// console.log(otpdata.otp, userSendOtp)
			if (userSendOtp !== otpdata.otp) {
				return res.status(401).send("Invalid OTP");
			}
			const otpToken = uuid();
			const updateToken = await prisma.PasswordRecoveryOTP.update({
				where: {
					id: otpId,
				},
				data: {
					token: otpToken,
				},
			});
			if (updateToken) {
				res.status(200)
					.cookie("otp-token", otpToken)
					.send(
						`recover password @ ${config.backendURL}api/user/recover-password/${otpdata.id}`
					);
			}
			
		} catch (ex) {
			if (ex) {
				console.log(ex);
				res.status(400).send("Invalid OTP");
				
			}
		}
	},
	newPassword: async (req, res) => {
		try {
			const otpId = req.params.otpId;
			const password = req.body.password;
			const hash = await bcrypt.hash(password, 10);
			const otpData = await prisma.PasswordRecoveryOTP.findUnique({
				where: {
					id: otpId,
				},
			});
			
			if (otpData.token !== req.cookies["otp-token"]) {
				return res
					.status(400)
					.send(
						`confirm otp first @ ${config.backendURL}api/user/otp/${otpId}`
					);
			}
			if (otpData.expired) {
				return res.status(400).send("OPT has been expired");
			}

			const updateUserPass = await prisma.user.update({
				where: {
					id: otpData.userId,
				},
				data: {
					password: hash,
				},
			});
			if (updateUserPass) {
				const expireOTP = await prisma.PasswordRecoveryOTP.update({
					where: {
						id: otpId,
					},
					data: {
						expired: true,
					},
				});
				if (!expireOTP) {
					return res.status(500).send("internal error");
				}
				res.clearCookie("otp-token")
					.status(200)
					.send("password changed");
				 //mail logic
			}
		} catch (ex) {
			if (ex) {
				console.log(ex);
				res.status(500).send("internal error");
			}
		}
	},
};
