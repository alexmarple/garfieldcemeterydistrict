import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function handler(event) {
  const headers = {
    "Access-Control-Allow-Origin": process.env.FRONTEND_ORIGIN || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers };
  }

  const { email } = JSON.parse(event.body || "{}");
  try {
    await transporter.sendMail({
      from: `"Subscription Form" <${process.env.SMTP_FROM}>`,
      to: process.env.MY_EMAIL,
      subject: "New subscription",
      text: `A new subscription:\nEmail: ${email}`,
    });
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Email send error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: "Failed to subscribe." }),
    };
  }
}
