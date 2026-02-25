"use client";

import Navbar from "../Navbar";
import { FadeUp } from "../components/Animate";

export default function InfoPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511919884226-fd3cad34687c)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

        <FadeUp>
          <div className="relative z-10 text-center px-6">
            <h1 className="font-serif text-6xl md:text-8xl tracking-tight">
              Throttle Therapy
            </h1>
            <p className="mt-6 text-xl text-white/80">
              Tour Information
            </p>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Destination is only part of the journey.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* EXPERIENCE SPLIT SECTION */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1503736334956-4c8f8e92946d)",
          }}
        />

        <div className="flex items-center px-10 md:px-20 py-20">
          <FadeUp>
            <div className="max-w-lg">
              <h2 className="text-4xl font-serif mb-8">The Experience</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                A high-end rally experience curated for a select group of
                automotive enthusiasts. Spanning multiple days and hundreds
                of scenic miles, this is more than a drive — it's immersion.
                Spirited roads, elevated hospitality, and meaningful
                camaraderie.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ROUTES + GROUP CARDS */}
      <section className="px-6 md:px-20 py-32 bg-neutral-950">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Routes Card */}
          <FadeUp>
            <div className="relative p-10 border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-3xl font-serif mb-6">Routes</h3>
              <p className="text-white/70 leading-relaxed">
                Carefully selected roads that balance performance driving
                with cinematic landscapes. Final routes announced soon.
              </p>
            </div>
          </FadeUp>

          {/* Group Card */}
          <FadeUp>
            <div className="relative p-10 border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-3xl font-serif mb-6">The Group</h3>
              <p className="text-white/70 leading-relaxed">
                Limited entry ensures alignment in driving style,
                personality, and ambition. This is a curated roster —
                not an open rally.
              </p>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <FadeUp>
          <p className="text-white/60 mb-12 text-lg">
            Applications for the upcoming rally are currently under review.
          </p>

          <a
            href="/apply"
            className="inline-block border border-white px-12 py-5
                       uppercase tracking-widest text-sm
                       hover:bg-white hover:text-black transition-all duration-300"
          >
            Apply for The Rally
          </a>
        </FadeUp>
      </section>
    </main>
  );
}