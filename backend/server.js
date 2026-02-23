import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Allow both localhost (development) and Vercel (production)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://throttle-therapy-tour.vercel.app",
    ],
  })
);

app.use(express.json());

app.post("/apply", async (req, res) => {
  console.log("APPLY REQUEST RECEIVED:", req.body);

  const { name, email, country, vehicle, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP connection verified");

    await transporter.sendMail({
      from: `"Private Automotive Rally" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Application",
      html: `
        <h2>New Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully");
    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("EMAIL ERROR FULL:", err);
    return res.status(500).json({
      error: err.message,
      code: err.code,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});