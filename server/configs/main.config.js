module.exports = {
	morganMode: "combined",
	frontendURL: "http://localhost:3000/",
	backendURL: "http://localhost:5000/",
	corsOrigin: "http://localhost:3000",
	corsCreedentials: true,
	mode: "test",
	nodemailer: {
		from: "asrabirphone@gmail.com",
	},
	jwt: {
		secret: process.env.SECRET,
		options: {
			expiresIn: "30d",
		},
	},
};