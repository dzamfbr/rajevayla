"use client";

import React, { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-[#f4acb7]/15 py-8 text-center bg-[#0f0c0e] mt-10">
      <div className="max-w-5xl mx-auto px-5 flex justify-center items-center text-xs text-[#9d8189]">
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-[#fff5f7] text-sm">
            AYLA{" "}
          </span>
          <span>&copy; {year} All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
