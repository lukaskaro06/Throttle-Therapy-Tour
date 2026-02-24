import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running.");
});

app.post("/apply", async (req, res) => {
  console.log("Request received:", req.body);

  const { name, email, country, vehicle, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "dev@gmail.com", // default sender for testing
      to: "vadl.auto.events@gmail.com",     // where you want to receive it
      subject: "APLlICATION",
      text: `
Name: ${name}
Email: ${email}
Country: ${country}
Vehicle: ${vehicle}
Message: ${message}
      `,
    });

    console.log("Email sent successfully");
    res.status(200).json({ success: true });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});