"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCTA(window.scrollY > 600); // adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-xl font-semibold">
          WebWriteHQ
        </Link>

        {/* Menu */}
        <ul className="flex gap-6 text-slate-200 text-sm font-medium">
          <li><a href="#what" className="hover:text-white transition">What We Deliver</a></li>
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>

        {/* CTA button appears after scroll */}
        {showCTA && (
          <Link
            href="#contact"
            className="bg-white text-slate-900 text-sm font-semibold px-5 py-2 rounded-full hover:bg-slate-200 transition"
          >
            Let’s Talk
          </Link>
        )}
      </nav>
    </header>
  );
}
