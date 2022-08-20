const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const clientId = process.env.AUTH2_CLIENT_ID;
const clientSecret = process.env.AUTH2_CLIENT_SECRET;
const redirect = process.env.AUTH2_REDIRECT;
const refreshToken = process.env.AUTH2_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirect);
oAuth2Client.setCredentials({ refresh_token: refreshToken });

console.log(`child process: nodemailer[${process.pid}]`);
process.on("message", async (options) => {
	const result = await sendMail(options);
	process.send(result);
	process.exit(1);
});

const sendMail = async (options) => {
	const accessToken = await oAuth2Client.getAccessToken();
	const transport = nodemailer.createTransport({
		service: "gmail",
		auth: {
			type: "OAuth2",
			user: "asrabirphone@gmail.com",
			clientId: clientId,
			clientSecret: clientSecret,
			refreshToken: refreshToken,
			accessToken: accessToken,
		},
	});
	const result = await transport.sendMail(options);
	return result;
};

module.exports = sendMail;
