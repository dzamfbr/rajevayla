"use client";

import React from "react";

interface HeaderProps {
  isLive: boolean;
}

export default function Header({ isLive }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 py-3.5 border-b border-white/10 backdrop-blur-xl bg-[#08090d]/85">
      <div className="max-w-5xl mx-auto px-5 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#ff2a4b] to-[#7928ca] flex items-center justify-center shadow-lg shadow-red-950/40">
            <span className="font-display font-extrabold text-white text-base tracking-tighter">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-white leading-none">
              AYLA <span className="text-[#ff2a4b]">.</span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
              MLBB Streamer
            </span>
          </div>
        </div>

        {/* Live Status Badge */}
        <div
          className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
            isLive
              ? "bg-[#ff2a4b]/15 border border-[#ff2a4b]/40 text-[#ff2a4b]"
              : "bg-white/5 border border-white/10 text-slate-400"
          }`}
        >
          <span className="relative flex h-2 w-2">
            {isLive && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2a4b] opacity-75"></span>
            )}
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isLive ? "bg-[#ff2a4b]" : "bg-slate-500"
              }`}
            ></span>
          </span>
          <span>{isLive ? "LIVE NOW" : "OFFLINE"}</span>
        </div>
      </div>
    </header>
  );
}
