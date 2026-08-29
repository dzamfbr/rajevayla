"use client";

import React, { useState, useEffect, useCallback } from "react";

// TikTok Username Streamer Ayla
const TIKTOK_USERNAME = "tojisfavoritewifeu";
const DEFAULT_VOD_URL = `https://www.tiktok.com/@${TIKTOK_USERNAME}`;
const DONATE_VIP_URL = "https://sociabuzz.com/rajevayla/tribe";

export default function Hero({
  isLive,
  setIsLive,
}: {
  isLive: boolean;
  setIsLive: (val: boolean) => void;
}) {
  const [streamTitle, setStreamTitle] = useState<string | null>(null);
  const [viewerCount, setViewerCount] = useState<number>(0);
  const [scheduleText, setScheduleText] = useState("");
  const [currentTimeWib, setCurrentTimeWib] = useState("");
  const [liveUrl, setLiveUrl] = useState(`https://www.tiktok.com/@${TIKTOK_USERNAME}/live`);
  const [isFetchingTiktok, setIsFetchingTiktok] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Failsafe Check TikTok Live Status
  const checkTiktokLive = useCallback(async () => {
    setIsFetchingTiktok(true);

    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const wibDate = new Date(utc + 7 * 3600000); // UTC+7 WIB
    const hours = wibDate.getHours();
    const minutes = wibDate.getMinutes();
    const timeStr = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} WIB`;
    setCurrentTimeWib(timeStr);

    const isScheduleHours = hours >= 15 && hours < 21;

    try {
      const res = await fetch(`/api/tiktok-status?username=${TIKTOK_USERNAME}`);
      
      if (res.ok) {
        const data = await res.json();

        if (data.isLive === true) {
          setIsLive(true);
          setStreamTitle(data.title || "Live Streaming Mobile Legends");
          if (data.viewerCount) setViewerCount(data.viewerCount);
          if (data.liveUrl) setLiveUrl(data.liveUrl);
        } else if (data.isLive === false) {
          setIsLive(false);
          setStreamTitle(null);
        } else {
          setIsLive(isScheduleHours);
          setStreamTitle(null);
        }
      } else {
        setIsLive(isScheduleHours);
        setStreamTitle(null);
      }
    } catch {
      setIsLive(isScheduleHours);
      setStreamTitle(null);
    } finally {
      setIsFetchingTiktok(false);

      if (hours < 15) {
        setScheduleText("Jadwal Stream Hari Ini: Pukul 15:00 - 21:00 WIB (Setiap Hari)");
      } else if (hours >= 21) {
        setScheduleText("Jadwal Stream Berikutnya: Besok Pukul 15:00 WIB");
      } else {
        setScheduleText("Jadwal Stream Setiap Hari: 15:00 - 21:00 WIB");
      }
    }
  }, [setIsLive]);

  useEffect(() => {
    setMounted(true);
    checkTiktokLive();
    const interval = setInterval(checkTiktokLive, 20000);
    return () => clearInterval(interval);
  }, [checkTiktokLive]);

  if (!mounted) return null;

  return (
    <section className="pt-6 sm:pt-10 pb-4 sm:pb-6 px-3.5 sm:px-5">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Responsive Streamer Avatar Image */}
        <div className="relative mb-5 sm:mb-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-[#191417] border border-[#f4acb7]/30 shadow-2xl p-1">
            <div className="w-full h-full rounded-xl overflow-hidden bg-[#241d21] relative">
              <img
                src="/image.png"
                alt="Ayla Streamer Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#191417] border border-[#f4acb7]/40 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-[#ffe5d9] flex items-center gap-1.5 shadow-lg whitespace-nowrap">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#f4acb7]"></span>
            <span>Content Creator</span>
          </div>
        </div>

        {/* Name & Responsive Bio */}
        <h1 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#fff5f7] mb-1.5 sm:mb-2">
          AYLA STREAM
        </h1>
        <p className="text-[#d8e2dc] text-xs sm:text-base max-w-lg mb-5 sm:mb-6 leading-relaxed px-2">
          Mobile Legends Content Creator & Streamer. Spesialis hero Mage & Support. Live streaming setiap hari jam 3 sore - 9 malam di TikTok!
        </p>

        {/* Responsive Quick Gamer Stats Bar */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md w-full mb-5 sm:mb-6">
          <div className="bg-[#191417] border border-[#f4acb7]/15 p-2 sm:p-3 rounded-xl flex flex-col justify-center">
            <span className="text-[9px] sm:text-[10px] text-[#9d8189] font-bold uppercase tracking-wider block mb-0.5">Role</span>
            <span className="text-[11px] sm:text-xs font-semibold text-[#ffcad4] truncate">Mage / Support</span>
          </div>
          <div className="bg-[#191417] border border-[#f4acb7]/15 p-2 sm:p-3 rounded-xl flex flex-col justify-center">
            <span className="text-[9px] sm:text-[10px] text-[#9d8189] font-bold uppercase tracking-wider block mb-0.5">Platform</span>
            <span className="text-[11px] sm:text-xs font-semibold text-[#d8e2dc] truncate">TikTok Live</span>
          </div>
          <div className="bg-[#191417] border border-[#f4acb7]/15 p-2 sm:p-3 rounded-xl flex flex-col justify-center">
            <span className="text-[9px] sm:text-[10px] text-[#9d8189] font-bold uppercase tracking-wider block mb-0.5">Jadwal</span>
            <span className="text-[11px] sm:text-xs font-semibold text-[#ffe5d9] truncate">15:00 - 21:00</span>
          </div>
        </div>

        {/* Touch-Optimized Donate / Order VIP Button */}
        <div className="max-w-md w-full mb-6 sm:mb-8">
          <a
            href={DONATE_VIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl font-display font-bold text-xs sm:text-sm tracking-wide bg-gradient-to-r from-[#9d8189] via-[#f4acb7] to-[#ffcad4] hover:from-[#f4acb7] hover:to-[#ffe5d9] text-[#0f0c0e] shadow-lg shadow-[#9d8189]/25 transition-all duration-200 active:scale-[0.98]"
          >
            <i className="fa-solid fa-heart text-[#0f0c0e] text-xs sm:text-sm"></i>
            <span>SUPPORT / DONATE & ORDER VIP</span>
          </a>
        </div>

        {/* Responsive Dynamic Live Status Card */}
        <div
          className={`w-full max-w-lg bg-[#191417] border rounded-2xl p-4 sm:p-6 text-left transition-all duration-300 ${
            isLive
              ? "border-[#f4acb7]/60 animate-live-glow"
              : "border-[#f4acb7]/15"
          }`}
        >
          {/* Card Top Row */}
          <div className="flex justify-between items-center mb-3 pb-2.5 sm:pb-3 border-b border-[#f4acb7]/15 gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                {isLive && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4acb7] opacity-75"></span>
                )}
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    isLive ? "bg-[#f4acb7]" : "bg-[#9d8189]"
                  }`}
                ></span>
              </span>
              <span className="font-display text-xs sm:text-base font-bold tracking-tight text-[#fff5f7] truncate">
                {isLive ? "TIKTOK LIVE BERLANGSUNG" : "TIKTOK STREAM OFFLINE"}
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-[#d8e2dc] bg-[#241d21] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[#f4acb7]/15 shrink-0">
              {currentTimeWib}
            </span>
          </div>

          {/* Real Live Stream Title Displayed Directly */}
          <div className="mb-4 sm:mb-5">
            {isLive ? (
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  {viewerCount > 0 ? (
                    <span className="text-[10px] font-mono text-[#f4acb7] bg-[#241d21] border border-[#f4acb7]/30 px-2 py-0.5 rounded inline-block">
                      👀 {viewerCount} Viewers
                    </span>
                  ) : <span></span>}
                  {isFetchingTiktok && (
                    <span className="text-[10px] text-[#9d8189] font-mono animate-pulse">
                      Mengecek status...
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-lg font-bold text-[#fff5f7] leading-snug">
                  "{streamTitle}"
                </p>
              </div>
            ) : (
              <p className="text-xs sm:text-sm font-medium text-[#d8e2dc] leading-relaxed">
                Saat ini Ayla (@tojisfavoritewifeu) tidak sedang live di TikTok. {scheduleText}
              </p>
            )}
          </div>

          {/* Touch-Friendly Action CTA Button */}
          <a
            href={isLive ? liveUrl : DEFAULT_VOD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 px-4 rounded-xl font-display font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 active:scale-[0.98] ${
              isLive
                ? "bg-gradient-to-r from-[#f4acb7] to-[#ffcad4] text-[#0f0c0e] shadow-lg shadow-[#f4acb7]/40"
                : "bg-[#241d21] hover:bg-[#2e252a] text-[#ffe5d9] border border-[#f4acb7]/20"
            }`}
          >
            <i className={isLive ? "fa-solid fa-play text-xs" : "fa-brands fa-tiktok"}></i>
            <span>
              {isLive ? "TONTON LIVE DI TIKTOK SEKARANG" : "KUNJUNGI PROFIL TIKTOK AYLA"}
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
