import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_ORIGIN }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await transporter.sendMail({
      from: "Garfield Cemetery District - Contact",
      to: process.env.MY_EMAIL,
      subject: `New contact message`,
      text: [
        `A new message from the contact form:\n`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Message:\n${message}`,
      ].join("\n"),
    });
    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;
  try {
    await transporter.sendMail({
      from: "Garfield Cemetery District - Subscribe",
      to: process.env.MY_EMAIL,
      subject: `New subscription`,
      text: [`A new subscription:\n`, `Email: ${email}`].join("\n"),
    });
    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
