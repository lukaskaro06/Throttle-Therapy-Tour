"use client";

import Navbar from "./Navbar";
import { motion } from "framer-motion";
import bg from "./assets/wallhometta.jpeg";
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      

      <Navbar />

      {/* ======================
          HERO SECTION
         ====================== */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        {/* Background image */}
<div
  className="absolute inset-0 bg-cover bg-center scale-105"
  style={{
    backgroundImage: `url(${bg.src})`,
  }}
/>

{/* Dark overlay */}
<div className="absolute inset-0 bg-black/55" />

{/* Strong vignette */}
<div className="absolute inset-0 bg-[radial-gradient(circle,transparent_35%,black_85%)]" />

        {/* Center content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <p className="uppercase tracking-widest text-sm mb-4 opacity-80">
            Welcome
          </p>

          <h1 className="font-serif text-7xl md:text-8xl tracking-tight">
            THROTTLE THERAPY TOUR
          </h1>

          <p className="mt-6 text-neutral-300 max-w-xl">
            
          </p>

          <div className="mt-12">
            <a
              href="/apply"
              className="border border-white px-10 py-4 uppercase tracking-wide text-sm
                         hover:bg-white hover:text-black transition"
            >
              Apply Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* SCROLL CONTENT (comes later) */}
    </main>
  );
}
