"use client";

import Navbar from "../Navbar";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-6xl md:text-7xl tracking-tight">
            Contact
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-white/80">
            Team:
            Antonio, 
            Danilo, 
            Vito
            &
            Luka
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-28 text-center space-y-12">
        <div>
          <p className="text-white/60 uppercase tracking-widest text-sm mb-4">
            Email
          </p>
          <p className="text-lg">
            throttletherapytour@gmail.com
          </p>
        </div>

        <div>
          <p className="text-white/60 uppercase tracking-widest text-sm mb-4">
            Location
          </p>
          <p className="text-lg">
            Europe
            (More coming soon)
          </p>
        </div>

        <div className="pt-16">
          <a
            href="/apply"
            className="inline-block border border-white px-12 py-5
                       uppercase tracking-widest text-sm
                       hover:bg-white hover:text-black transition"
          >
            Apply for Consideration
          </a>
        </div>
      </section>
    </main>
  );
}
