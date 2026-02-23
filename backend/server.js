import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* =========================
   CORS CONFIGURATION
   ========================= */

app.use(
  cors({
    origin: [
      "http://localhost:3000", // local dev
      "https://your-frontend-domain.vercel.app", // production frontend
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

/* =========================
   HEALTH CHECK ROUTE
   ========================= */

app.get("/", (req, res) => {
  res.status(200).send("Backend is running.");
});

/* =========================
   EMAIL ROUTE
   ========================= */

app.post("/apply", async (req, res) => {
  console.log("APPLY REQUEST RECEIVED:", req.body);

  const { name, email, country, vehicle, message } = req.body;

  /* -------- Basic Validation -------- */

  if (!name || !email || !country || !vehicle) {
    return res.status(400).json({
      error: "Missing required fields.",
    });
  }

  try {
    /* -------- Create Transporter -------- */

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // must be Gmail App Password
      },
    });

    /* -------- Verify SMTP -------- */

    await transporter.verify();
    console.log("SMTP connection verified");

    /* -------- Send Email -------- */

    await transporter.sendMail({
      from: `"Private Automotive Rally" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Application Submission",
      html: `
        <h2>New Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
    });

    console.log("Email sent successfully");

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (err) {
    console.error("==== EMAIL ERROR START ====");
    console.error("Full error object:", err);
    console.error("Message:", err.message);
    console.error("Code:", err.code);
    console.error("Stack:", err.stack);
    console.error("==== EMAIL ERROR END ====");

    return res.status(500).json({
      error: err.message,
      code: err.code,
    });
  }
});

/* =========================
   SERVER START
   ========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});