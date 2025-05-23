require('dotenv').config();
const nodemailer = require("nodemailer");

const sendContactMessage = async (req, res) => {
  const { name, email,  phone, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  try {
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `[Contact Us] New Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
      };

    await transporter.sendMail(mailOptions);

    // Respond with success
    res.status(200).json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending contact message:", error);
    res.status(500).json({ message: "Failed to send your message. Please try again later." });
  }
};

module.exports = {
  sendContactMessage,
};
