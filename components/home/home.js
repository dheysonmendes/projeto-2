const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
	res.send({ info: "Olá, Blue" });
});

module.exports = router;
