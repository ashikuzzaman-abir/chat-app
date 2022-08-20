const { Router } = require("express");
const router = Router();
const {createUser, loginUser, logoutUser, reqRecoverUser, recoverWithOTP, newPassword} = require("../controllers/user.controller");
const isAuthorized = require("../middlewares/isAuthorized.middleware");


router.post('/account-recovery', reqRecoverUser)
router.post('/otp/:otpId', recoverWithOTP);
router.post("/recover-password/:otpId", newPassword);



router.post("/register", createUser);
router.post("/login", loginUser);
router.get('/logout', isAuthorized, logoutUser);

module.exports = router;
