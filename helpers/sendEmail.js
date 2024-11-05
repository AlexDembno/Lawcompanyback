const nodemailer = require("nodemailer");
require("dotenv").config();

const { EMAIL_PASSWORD, EMAIL_FROM } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_FROM,
    pass: EMAIL_PASSWORD,
  },
});

const sendEmail = async (data) => {
  try {
    const emailOptions = {
      from: EMAIL_FROM,
      to: "lawcompany911@gmail.com",
      subject: "Letter from customer",
      text: `This is email data: ${JSON.stringify(data, null, 2)}`,
      html: `<p>This is email data:</p><pre>${JSON.stringify(
        data,
        null,
        2
      )}</pre>`,
    };

    await transporter.sendMail(emailOptions);
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

module.exports = sendEmail;
