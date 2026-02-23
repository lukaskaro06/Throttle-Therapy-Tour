"use client";

import Navbar from "../Navbar";

export default function RoadmapPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2023/08/hennessey-venom-f5-revolution-roadster-quarter-front.jpg?w=1600&h=900&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,black_90%)]" />

        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-6xl md:text-7xl tracking-tight">
          Roadmap
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80">
            Your journey
          </p>
        </div>
      </section>
      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-28 space-y-24">
        {/* Section 1 */}
        <div>
          <h2 className="text-3xl font-serif mb-6">Roadmap</h2>
          <p className="text-white/75 leading-relaxed text-lg">
            added soon
          </p>
        </div>
          <a
            href="/apply"
            className="inline-block border border-white px-10 py-4
                       uppercase tracking-widest text-sm
                       hover:bg-white hover:text-black transition"
          >
            Apply for The Idea
          </a>
          </section>
    </main>
  );
}
