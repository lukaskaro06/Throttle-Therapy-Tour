"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-10 py-6 flex items-center justify-between">
        {/* Left navigation */}
        <div className="flex gap-10 text-sm uppercase tracking-widest text-white/90">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/info" className="hover:text-white transition">
            Info
          </Link>
          <Link href="/roadmap" className="hover:text-white transition">
            Roadmap
          </Link>
          <Link href="/apply" className="hover:text-white transition">
            Apply
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Right CTA */}
        <Link
          href="/apply"
          className="border border-white/80 px-8 py-3 text-xs uppercase tracking-widest
                     hover:bg-white hover:text-black transition"
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
}
