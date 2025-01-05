const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors"); // Add CORS support
const https = require("https");
const fs = require("fs");
const app = express();
const http = require("http");
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Parse JSON bodies

app.use(cors()); // For handling CORS issues
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;


  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Use 'gmail' for Gmail or other services like 'smtp.mailtrap.io'
    auth: {
      user: 'dheeraj.portfolio.reply@gmail.com', // Your email address
      pass: 'gpzxabypqgzjpfug',  // Your email password (or app-specific password)
    },
  });
  let mailText =
    name +
    "\nEmail : " +
    email +
    "\nMessage : " +
    message 

  const mailOptions = {
    from: email,
    to: "dheerajpgirish09@gmail.com",
    subject: "PORTFOLIO REQUEST",
    text: mailText,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
           res.re('Error sending email');
    } else {
      res.send("Email sent successfully");
    }
  });
});

const httpServer = http.createServer(app);


httpServer.listen(3001, () => {
  console.log("HTTP Server running on port 3001");
});
