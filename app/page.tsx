"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import SocialHub from "@/components/SocialHub";
import StreamInfo from "@/components/StreamInfo";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLive, setIsLive] = useState(false);

  return (
    <main className="min-h-screen flex flex-col justify-between bg-grid-subtle">
      <div className="flex-1">
        <Hero isLive={isLive} setIsLive={setIsLive} />
        <SocialHub />
        <StreamInfo />
      </div>
      <Footer />
    </main>
  );
}
