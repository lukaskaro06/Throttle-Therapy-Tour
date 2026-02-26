"use client";

import Navbar from "../Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function InfoPage() {
  return (
    <main className="bg-black text-white font-sans antialiased overflow-hidden">

      <Navbar />

      {/* ================= HERO ================= */}
{/* ================= HERO ================= */}
<section className="relative bg-black border-b border-white/10">

  <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 min-h-screen">

    {/* LEFT COLUMN — EDITORIAL META */}
    <div className="md:col-span-3 px-10 md:px-16 py-24 flex flex-col justify-between">

      <div>
        <p className="text-[9px] uppercase tracking-[0.6em] text-white/20">
          private publication
        </p>
      </div>

      <div>
        <p className="text-[9px] uppercase tracking-[0.6em] text-white/20">
          volume i
        </p>
      </div>

    </div>

    {/* CENTER COLUMN — MAIN TITLE */}
    <div className="md:col-span-5 px-10 md:px-16 py-24 flex flex-col justify-center">

      <div className="w-12 h-[1px] bg-white/30 mb-14" />

      <h1 className="font-serif text-[6vw] leading-[0.95] tracking-[-0.02em] font-light">
        throttle
        <br />
        therapy
      </h1>

      <p className="mt-14 text-[11px] uppercase tracking-[0.55em] text-white/40">
        tour information
      </p>

    </div>

    {/* RIGHT COLUMN — IMAGE PLATE */}
    <div className="md:col-span-4 relative min-h-[60vh] md:min-h-screen">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1511919884226-fd3cad34687c)",
        }}
      />

      {/* Soft edge fade like print margin */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />

    </div>

  </div>

</section>

      {/* ================= SECTION 01 ================= */}
      <section className="grid md:grid-cols-12 min-h-screen bg-neutral-950 border-t border-white/10">

        <div className="md:col-span-6 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1503736334956-4c8f8e92946d)",
            }}
          />
        </div>

        <div className="md:col-span-6 flex items-center px-12 md:px-28 py-40">
          <div>
            <span className="text-[9px] tracking-[0.6em] text-white/15 font-medium">
              01
            </span>

            <h2 className="mt-8 mb-14 text-[36px] font-light tracking-[-0.01em]">
              the experience
            </h2>

            <p className="text-[15px] leading-[1.9] text-white/50 font-light max-w-md">
              a multi-day rally curated for a considered circle of drivers
              scenic routes elevated hospitality disciplined pacing
              every element intentional
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 02 ================= */}
      <section className="grid md:grid-cols-12 min-h-screen bg-black border-t border-white/10">

        <div className="md:col-span-6 flex items-center px-12 md:px-28 py-40 order-2 md:order-1">
          <div>
            <span className="text-[9px] tracking-[0.6em] text-white/15 font-medium">
              02
            </span>

            <h2 className="mt-8 mb-14 text-[36px] font-light tracking-[-0.01em]">
              routes
            </h2>

            <p className="text-[15px] leading-[1.9] text-white/50 font-light max-w-md">
              roads selected for rhythm and cinematic terrain
              final route release forthcoming
            </p>
          </div>
        </div>

        <div className="md:col-span-6 relative overflow-hidden order-1 md:order-2">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1493238792000-8113da705763)",
            }}
          />
        </div>
      </section>

      {/* ================= HORIZONTAL ARCHIVE ================= */}
      <HorizontalArchive />

      {/* ================= MANIFESTO ================= */}
      <section className="relative bg-black py-56 border-t border-white/10 text-center">

        <h2 className="font-sans font-black uppercase text-[6vw] leading-[0.92] tracking-[-0.03em]">
          when{" "}
          <span className="relative inline-block text-[7vw]">
            driving
            <span className="absolute inset-0 -m-4 border-2 border-white rounded-full rotate-[-6deg]"></span>
          </span>{" "}
          becomes a philosophy
        </h2>

        <p className="mt-20 text-[11px] uppercase tracking-[0.55em] text-white/60">
          entry is extended by invitation
        </p>

        <div className="mt-16">
          <span className="script-font text-3xl text-white/80">
            Nick Papias
          </span>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-48 bg-neutral-950 border-t border-white/10 text-center">
        <p className="text-[11px] uppercase tracking-[0.55em] text-white/60">
          applications reviewed privately
        </p>

        <a
          href="/apply"
          className="block mt-16 text-[11px] uppercase tracking-[0.55em] text-white/70 hover:text-white transition"
        >
          request consideration
        </a>
      </section>

    </main>
  );
}

/* ================= ARCHIVE COMPONENT ================= */

function HorizontalArchive() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] bg-neutral-900 border-t border-white/10"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        <div className="absolute top-14 left-20 flex items-center gap-6">
          <div className="w-8 h-[1px] bg-white/20" />
          <span className="text-[9px] uppercase tracking-[0.6em] text-white/15 font-medium">
            private archive
          </span>
        </div>

        <motion.div
          style={{ x }}
          className="flex gap-20 px-24"
        >
          {[
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
            "https://images.unsplash.com/photo-1502877338535-766e1452684a",
            "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a",
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
          ].map((img, i) => (
            <div
              key={i}
              className="w-[45vw] h-[65vh] relative flex-shrink-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}