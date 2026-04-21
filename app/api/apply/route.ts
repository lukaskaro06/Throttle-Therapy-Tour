import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, country, vehicle, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Throttle Therapy Tour <onboarding@resend.dev>",
      to: "vadl.auto.events@gmail.com",
      subject: "New Application — Throttle Therapy Tour",
      text: `New application received.\n\nName: ${name}\nEmail: ${email}\nCountry: ${country || "—"}\nVehicle: ${vehicle || "—"}\n\nMessage:\n${message || "—"}`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
