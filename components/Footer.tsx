"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 py-2 pl-margin-mobile pr-4 md:pl-margin-desktop md:pr-8 bg-accent-yellow border-t-brutal border-brutal-black shadow-[0_-4px_0_0_rgba(0,0,0,1)] select-none flex items-center justify-between gap-6 overflow-hidden">
      {/* Marquee Container */}
      <div className="overflow-hidden whitespace-nowrap flex-1 relative">
        <div className="flex gap-12 font-code-sm text-code-sm uppercase tracking-widest text-brutal-black font-black w-full animate-marquee">
          <span className="min-w-max">
            © 2024 NEON_VOID_OPERATIONS // UNRESTRICTED_ACCESS_GRANTED
          </span>
          <span className="min-w-max text-accent-magenta">
            TICKER: BTC/EVM EXPLOIT DETECTED
          </span>
          <span className="min-w-max text-accent-cyan">
            GAS_PRICE: OMEGA_LEVEL
          </span>
          <span className="min-w-max">MEME_RATIO: 420.69%</span>
          <span className="min-w-max text-accent-magenta">
            SYSTEM_STABLE: FALSE
          </span>
          {/* duplicate for marquee effect */}
          <span className="min-w-max">
            © 2024 NEON_VOID_OPERATIONS // UNRESTRICTED_ACCESS_GRANTED
          </span>
          <span className="min-w-max text-accent-magenta">
            TICKER: BTC/EVM EXPLOIT DETECTED
          </span>
          <span className="min-w-max text-accent-cyan">
            GAS_PRICE: OMEGA_LEVEL
          </span>
          <span className="min-w-max">MEME_RATIO: 420.69%</span>
          <span className="min-w-max text-accent-magenta">
            SYSTEM_STABLE: FALSE
          </span>
        </div>
      </div>

      {/* GitHub Button */}
      <a
        href="https://github.com/Aryan27-max/CJP_EVM_HACK_PYTHON_FULLSTACK"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white border-brutal border-brutal-black px-3 py-1 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all transform -rotate-1 font-code-sm text-[10px] sm:text-code-sm font-black text-brutal-black hover:bg-accent-cyan cursor-pointer shrink-0 z-10"
      >
        <img
          src="/Music/github.svg"
          alt="GitHub Logo"
          className="w-4 h-4 sm:w-5 h-5"
        />
        <span>START MY REPO →</span>
      </a>
    </footer>
  );
}
