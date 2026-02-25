"use client";

import Navbar from "../Navbar";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function InfoPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50">
        <div className="w-full h-full bg-[url('/grain.png')]" />
      </div>

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center border-b border-white/10">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511919884226-fd3cad34687c)",
          }}
        />

        {/* Overlay Depth */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

        {/* Hero Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6"
        >
          <h1 className="font-serif text-[9vw] leading-[0.9] tracking-tight">
            Throttle
            <br />
            Therapy
          </h1>

          <p className="mt-10 uppercase tracking-[0.5em] text-xs text-white/50">
            Tour Information
          </p>
        </motion.div>
      </section>

      {/* ================= SECTION 01 ================= */}
      <section className="grid md:grid-cols-12 min-h-screen border-t border-white/10">

        <div className="md:col-span-6 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[2000ms] hover:scale-110"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1503736334956-4c8f8e92946d)",
            }}
          />
        </div>

        <div className="md:col-span-6 flex items-center px-10 md:px-24 py-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-white/30 tracking-widest text-sm">
              01
            </span>

            <h2 className="font-serif text-6xl mt-6 mb-12 leading-tight">
              The Experience
            </h2>

            <p className="text-white/70 text-xl leading-relaxed max-w-md">
              A multi-day rally curated for a considered circle of drivers.
              Scenic routes. Elevated hospitality. Disciplined pacing.
              Every element intentional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 02 ================= */}
      <section className="grid md:grid-cols-12 min-h-screen border-t border-white/10">

        <div className="md:col-span-6 flex items-center px-10 md:px-24 py-32 order-2 md:order-1">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-white/30 tracking-widest text-sm">
              02
            </span>

            <h2 className="font-serif text-6xl mt-6 mb-12">
              Routes
            </h2>

            <p className="text-white/70 text-xl leading-relaxed max-w-md">
              Roads selected for rhythm and cinematic terrain.
              Final route release forthcoming.
            </p>
          </motion.div>
        </div>

        <div className="md:col-span-6 relative overflow-hidden order-1 md:order-2">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[2000ms] hover:scale-110"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1493238792000-8113da705763)",
            }}
          />
        </div>
      </section>

      {/* ================= SECTION 03 ================= */}
      <section className="grid md:grid-cols-12 min-h-screen border-t border-white/10">

        <div className="md:col-span-6 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[2000ms] hover:scale-110"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1519648023493-d82b5f8d7b8a)",
            }}
          />
        </div>

        <div className="md:col-span-6 flex items-center px-10 md:px-24 py-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-white/30 tracking-widest text-sm">
              03
            </span>

            <h2 className="font-serif text-6xl mt-6 mb-12">
              The Group
            </h2>

            <p className="text-white/70 text-xl leading-relaxed max-w-md">
              Entry is limited. Alignment in driving style,
              temperament, and intention is essential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-48 border-t border-white/10 text-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-white/40 tracking-wide mb-20">
            Applications are currently under review.
          </p>

          <a
            href="/apply"
            className="relative text-lg uppercase tracking-[0.3em]
                       after:block after:h-[1px] after:bg-white
                       after:w-0 hover:after:w-full
                       after:transition-all after:duration-500"
          >
            Apply
          </a>
        </motion.div>
      </section>

    </main>
  );
}