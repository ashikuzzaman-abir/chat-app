const { Router } = require("express");
const router = Router();
const { collection, addDoc } = require("firebase/firestore");
const { db } = require("../firebase/app.firebase");
const { selectUser } = require("../controllers/test.controller");
// const { sendMail } = require("../nodemailer/nodemailer");

router.get("/", async (req, res) => {
	try {
		const user = await addDoc(collection(db, "users"), {
			name: "test2",
			email: "test2@gmail.com",
			password: "1234",
			username: "test2",
		});
		if (user) {
			res.send(user);
		}
	} catch (err) {
		if (err) {
			console.log(err);
			res.status(400).send(err);
		}
	}
});

// router.get("/1", async (req, res) => {
// 	try {
// 		const status = await sendMail(
// 			'asrabirphone@gmail.com', 'ashikuzzamanabir@hotmail.com', 'testing', 'testing123', '<h1>TESTING</h1>'
// 		);
// 		if (status) {
// 			return res.status(200).send(status);
// 		}
// 		res.status(400).send("node has not sent");
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400)
// 	}
// });

router.get("/users", selectUser);

module.exports = router;
