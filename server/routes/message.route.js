const { Router } = require("express");
const {createConversation} = require("./../controllers/message.controller");
const router = Router();

router.get("/", (req, res) => {
  res.send("message route okay")
})


module.exports = router;