"use client";

import { useState } from "react";
import Navbar from "../Navbar";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      country: formData.get("country"),
      vehicle: formData.get("vehicle"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://throttle-therapy-tour.onrender.com/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed.");
      }
    } catch {
      alert("Server error.");
    }

    setLoading(false);
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="relative h-[60vh] flex items-center justify-center">
        <h1 className="font-serif text-6xl md:text-7xl">
          Apply for Consideration
        </h1>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-28">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-12">
            <Input label="Full Name" name="name" required />
            <Input label="Email Address" name="email" type="email" required />
            <Input label="Country" name="country" />
            <Input label="Primary Vehicle(s)" name="vehicle" />
            <Textarea
              label="Why should you be considered?"
              name="message"
              required
            />

            <div className="pt-12 text-center">
              <button
                type="submit"
                disabled={loading}
                className="border border-white px-14 py-5 uppercase tracking-widest text-sm
                           hover:bg-white hover:text-black transition
                           disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-24">
            <h2 className="text-3xl font-serif mb-6">
              Application Received
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Thank you for your interest. Applications are reviewed individually.
              If selected, you will be contacted directly.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

/* ---------- Inputs ---------- */

function Input({ label, name, type = "text", required = false }: any) {
  return (
    <div>
      <label className="block text-sm uppercase tracking-widest text-white/60 mb-3">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-white/30
                   py-3 text-lg outline-none focus:border-white transition"
      />
    </div>
  );
}

function Textarea({ label, name, required = false }: any) {
  return (
    <div>
      <label className="block text-sm uppercase tracking-widest text-white/60 mb-3">
        {label}
      </label>
      <textarea
        name={name}
        rows={4}
        required={required}
        className="w-full bg-transparent border-b border-white/30
                   py-3 text-lg outline-none resize-none focus:border-white transition"
      />
    </div>
  );
}