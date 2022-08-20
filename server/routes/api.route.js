const { Router } = require("express");
const router = Router();
const userRoute = require("./user.route");
const { ifTest } = require("../middlewares/ifTest.middleware");

const testRoute= require('./test.route');

router.get("/", (req, res) => {
	res.send("Hello this is API Route");
});

router.use('/user', userRoute);
router.use('/test', ifTest,  testRoute)




module.exports = router;
