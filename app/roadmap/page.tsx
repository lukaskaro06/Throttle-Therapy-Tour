"use client";

import Navbar from "../Navbar";
import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    label: "Applications Open",
    status: "active",
    title: "Selection & Vetting",
    description:
      "Applications are reviewed privately. Each submission is evaluated on vehicle, driver profile, and alignment with the tour's ethos. A small circle. Every seat intentional.",
    detail: "Invitations extended to approved applicants.",
  },
  {
    number: "02",
    label: "Route Planning",
    status: "upcoming",
    title: "Route Reveal",
    description:
      "Roads chosen for rhythm and cinematic terrain. The route is released exclusively to confirmed participants — mountain passes, coast roads, unmarked stretches.",
    detail: "Final route released 30 days prior.",
  },
  {
    number: "03",
    label: "The Rally",
    status: "upcoming",
    title: "Throttle Therapy Tour",
    description:
      "Multi-day. Disciplined pacing. Elevated hospitality at each waypoint. Every element considered — from morning briefings to the final run.",
    detail: "Date and location forthcoming.",
  },
  {
    number: "04",
    label: "Post-Tour",
    status: "upcoming",
    title: "Archive & Memory",
    description:
      "Photography. Film. A private archive shared with participants. The record of what happens when the right machines meet the right roads.",
    detail: "Archive released within 30 days of conclusion.",
  },
];

const statusStyles: Record<string, string> = {
  active: "bg-white text-black",
  upcoming: "border border-white/30 text-white/50",
};

const statusLabel: Record<string, string> = {
  active: "Now",
  upcoming: "Upcoming",
};

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
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,black_90%)]" />

        <div className="relative z-10 text-center px-6">
          <p className="text-[10px] uppercase tracking-[0.6em] text-white/40 mb-6">
            The Journey
          </p>
          <h1 className="font-serif text-6xl md:text-8xl tracking-tight">
            Roadmap
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-white/60 font-light">
            Four phases. One continuous experience.
          </p>
        </div>
      </section>

      {/* PHASE LIST */}
      <section className="max-w-4xl mx-auto px-6 py-28">
        <div className="space-y-0">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.08 }}
              className="grid md:grid-cols-12 gap-8 py-16 border-t border-white/10 group"
            >
              {/* Left: number + status */}
              <div className="md:col-span-3 flex md:flex-col gap-4 items-start pt-1">
                <span className="text-[10px] uppercase tracking-[0.55em] text-white/15 font-medium">
                  {phase.number}
                </span>
                <span
                  className={`text-[9px] uppercase tracking-[0.5em] px-2.5 py-1 ${statusStyles[phase.status]}`}
                >
                  {statusLabel[phase.status]}
                </span>
              </div>

              {/* Center: label + title */}
              <div className="md:col-span-4">
                <p className="text-[10px] uppercase tracking-[0.55em] text-white/30 mb-4">
                  {phase.label}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-light">
                  {phase.title}
                </h2>
              </div>

              {/* Right: description + detail */}
              <div className="md:col-span-5 flex flex-col justify-between gap-6">
                <p className="text-[14px] leading-[1.85] text-white/50 font-light">
                  {phase.description}
                </p>
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/25">
                  {phase.detail}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Final border */}
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* ROUTE MAP */}
      <section className="border-t border-white/10 py-28">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[10px] uppercase tracking-[0.6em] text-white/30 mb-12 text-center">
            The Route — Nice to Budva
          </p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-sm"
          >
            <img
              src="/roadmap.jpeg"
              alt="Tour route: Nice to Budva"
              className="w-full object-contain"
            />
          </motion.div>
          <p className="mt-12 text-center text-[11px] uppercase tracking-[0.5em] text-white/25">
            Nice · Milan · Stelvio Pass · Celje · Zagreb · Venezia · Budva
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center border-t border-white/10">
        <p className="text-[10px] uppercase tracking-[0.6em] text-white/40 mb-10">
          Phase 01 is open
        </p>
        <a
          href="/apply"
          className="inline-block border border-white px-14 py-5 uppercase tracking-widest text-sm
                     hover:bg-white hover:text-black transition"
        >
          Apply for Consideration
        </a>
      </section>
    </main>
  );
}
