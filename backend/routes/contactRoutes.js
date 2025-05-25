const express = require("express");
const { sendContactMessage } = require("../controllers/ContactController");

const router = express.Router();

// POST /api/contact
router.post("/contactus", sendContactMessage);

module.exports = router;
