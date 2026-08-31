import React from "react";

const DONATE_VIP_URL = "https://sociabuzz.com/rajevayla/tribe";

export default function StreamInfo() {
  return (
    <section className="py-4 sm:py-6 px-3.5 sm:px-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
        {/* Stream Schedule Card */}
        <div className="bg-[#191417] border border-[#f4acb7]/15 p-4 sm:p-5 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <i className="fa-solid fa-calendar-days text-[#f4acb7] text-xs sm:text-sm"></i>
            <h3 className="font-display text-xs sm:text-sm font-bold text-[#fff5f7] tracking-wide uppercase">
              Jadwal Live Stream Rutin
            </h3>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center py-1.5 border-b border-[#f4acb7]/10 gap-2">
              <span className="text-[#9d8189]">Jadwal Live</span>
              <span className="font-mono text-[#d8e2dc] font-semibold text-right">
                Setiap Hari
              </span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-[#f4acb7]/10 gap-2">
              <span className="text-[#9d8189] shrink-0">Jam Operasional</span>
              <span className="font-mono text-[#ffcad4] font-semibold text-right text-[11px] sm:text-xs">
                15:00 - 21:00 WIB (3 Sore - 9 Malam)
              </span>
            </div>
            <div className="flex justify-between items-center py-1.5 gap-2">
              <span className="text-[#9d8189]">Platform Utama</span>
              <span className="font-mono text-[#f4acb7] font-semibold text-right">
                TikTok Live
              </span>
            </div>
          </div>
        </div>

        {/* SociaBuzz Tribe / Donate & Order VIP Card */}
        <div className="bg-[#191417] border border-[#f4acb7]/15 p-4 sm:p-5 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-gem text-[#ffcad4] text-xs sm:text-sm"></i>
              <h3 className="font-display text-xs sm:text-sm font-bold text-[#fff5f7] tracking-wide uppercase">
                Dukungan & Order VIP
              </h3>
            </div>
            <p className="text-xs text-[#d8e2dc] leading-relaxed mb-3 sm:mb-4">
              Dukung Ayla & dapatkan akses benefit eksklusif Mabar VIP melalui
              SociaBuzz!
            </p>
          </div>

          <a
            href={DONATE_VIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#241d21] hover:bg-[#2e252a] active:scale-[0.98] text-[#ffe5d9] border border-[#f4acb7]/30 text-xs font-bold transition-all"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-[#f4acb7]"></i>
            <span>ORDER VIP DI SOCIABUZZ TRIBE</span>
          </a>
        </div>
      </div>
    </section>
  );
}
