"use client";

import Navbar from "../Navbar";
import { FadeUp } from "../components/Animate";

export default function InfoPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511919884226-fd3cad34687c)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,black_90%)]" />
        <FadeUp>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-6xl md:text-7xl tracking-tight">
          Throttle Therapy Tour Info
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80">
            Destination is a part of the way
          </p>
        </div>
       </FadeUp>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-28 space-y-24">
        {/* Section 1 */}
        <div>
          <h2 className="text-3xl font-serif mb-6">Experience</h2>
          <p className="text-white/75 leading-relaxed text-lg">
            High end rally experience for a select group of automotive enthusiasts. Themed road trip will span multiple days, covering hundreds of miles through scenic routes. Participants will enjoy a blend of spirited driving, camaraderie, and curated stops at unique locations. The tour is designed to be more than just a drive – it's an immersive experience that celebrates the joy of motoring and the thrill of discovery.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-3xl font-serif mb-6">Routes</h2>
          <p className="text-white/75 leading-relaxed text-lg">
             added soon
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-3xl font-serif mb-6">Group</h2>
          <p className="text-white/75 leading-relaxed text-lg">
            added soon
          </p>
        </div>

        {/* Closing */}
        <div className="pt-16 text-center">
          <p className="text-white/60 mb-10">
            Applications for the upcoming rally are currently under review.
          </p>
          <a
            href="/apply"
            className="inline-block border border-white px-10 py-4
                       uppercase tracking-widest text-sm
                       hover:bg-white hover:text-black transition"
          >
            Apply for The Idea
          </a>
        </div>
      </section>
    </main>
  );
}
