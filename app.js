const express = require("express");
const app = express();
const cors = require("cors");
const port = 5005;

const sendEmail = require("./helpers/sendEmail");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/send", async (req, res) => {
  console.log("req.body", req.body);

  const emailSent = await sendEmail(req.body);

  if (emailSent) {
    res.send("Email sent successfully!");
  } else {
    res.status(500).send("Failed to send email");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
