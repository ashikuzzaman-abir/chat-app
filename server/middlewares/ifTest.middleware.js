const config = require("../configs/main.config");

exports.ifTest = (req, res, next) => {
	if (config.mode === "test") {
		next();
	} else {
		return res.status(400).send("Not allowed in production");
	}
};
