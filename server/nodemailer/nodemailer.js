const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { nodemailer: mailerConfig } = require("../configs/main.config");

const clientId = process.env.AUTH2_CLIENT_ID;
const clientSecret = process.env.AUTH2_CLIENT_SECRET;
const redirect = process.env.AUTH2_REDIRECT;
const refreshToken = process.env.AUTH2_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirect);
oAuth2Client.setCredentials({ refresh_token: refreshToken });

process.on("message", async (options) => {
	console.log(`mailing started: nodemailer[${process.pid}]`);
	const result = await sendMail(options);
	if (result) {
		process.send(result);
		console.log(`mailing finish: nodemailer[${process.pid}]`);
	}
	process.exit(1);
});

const sendMail = async (options) => {
	try {
		const accessToken = await oAuth2Client.getAccessToken();
		// console.log(accessToken);
		const transport = nodemailer.createTransport({
			service: mailerConfig.service,
			auth: {
				type: mailerConfig.auth.type,
				user: mailerConfig.auth.user,
				clientId: clientId,
				clientSecret: clientSecret,
				refreshToken: refreshToken,
				accessToken: accessToken,
			},
		});
		const result = await transport.sendMail(options);
		return result;
	} catch (ex) {
		if (ex) {
			console.log(`mailing inturrupt: nodemailer[${process.pid}]`);
			console.log(ex);
			// process.exit(1);
		}
	}
};

module.exports = sendMail;
