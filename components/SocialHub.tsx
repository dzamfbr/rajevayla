import React from "react";

const SOCIAL_PLATFORMS = [
  {
    name: "TikTok",
    icon: "fa-brands fa-tiktok",
    url: "https://www.tiktok.com/@tojisfavoritewifeu",
    badge: "Utama",
    accent: "hover:border-[#f4acb7]/60 group-hover:text-[#f4acb7]",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    url: "https://instagram.com",
    badge: "Official",
    accent: "hover:border-[#ffcad4]/60 group-hover:text-[#ffcad4]",
  },
  {
    name: "YouTube",
    icon: "fa-brands fa-youtube",
    url: "https://youtube.com",
    badge: "Official",
    accent: "hover:border-[#ffe5d9]/60 group-hover:text-[#ffe5d9]",
  },
];

export default function SocialHub() {
  return (
    <section className="py-4 sm:py-6 px-3.5 sm:px-5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-row items-center justify-between mb-3 sm:mb-4 pb-2 border-b border-[#f4acb7]/15">
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#fff5f7]">
            MEDIA SOSIAL
          </h2>
          <span className="text-[10px] sm:text-[11px] font-mono text-[#9d8189]">
            OFFICIAL LINKS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
          {SOCIAL_PLATFORMS.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between bg-[#191417] border border-[#f4acb7]/15 p-3.5 sm:p-4 rounded-xl transition-all duration-200 hover:bg-[#241d21] active:scale-[0.98] ${item.accent}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#241d21] flex items-center justify-center text-base sm:text-lg text-[#f4acb7] transition-colors shrink-0">
                  <i className={item.icon}></i>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm sm:text-base text-[#fff5f7]">
                    {item.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono bg-[#241d21] px-1.5 py-0.5 rounded text-[#d8e2dc] border border-[#f4acb7]/15">
                    {item.badge}
                  </span>
                </div>
              </div>

              <i className="fa-solid fa-chevron-right text-xs text-[#9d8189] group-hover:text-[#f4acb7] group-hover:translate-x-0.5 transition-all"></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
