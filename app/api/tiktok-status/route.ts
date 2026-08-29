import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "tojisfavoritewifeu";
  const cleanUsername = username.replace(/^@/, "");

  // Real browser headers to pass anti-bot / WAF checks
  const browserHeaders = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
    "Cache-Control": "max-age=0",
    "Sec-Ch-Ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
  };

  try {
    const response = await fetch(`https://www.tiktok.com/@${cleanUsername}/live`, {
      headers: browserHeaders,
      next: { revalidate: 15 },
    });

    // FAILSAFE: Jika TikTok memberikan response 403 / 429 Anti-Bot, jangan lempar error ke user.
    // Kirim isLive: null agar sistem otomatis fallback ke Jadwal WIB (15:00 - 21:00 WIB).
    if (response.status === 403 || response.status === 429 || !response.ok) {
      return NextResponse.json({
        isLive: null,
        title: null,
        isBlocked: true,
        username: cleanUsername,
        liveUrl: `https://www.tiktok.com/@${cleanUsername}/live`,
      });
    }

    const html = await response.text();
    const sigiMatch = html.match(/<script id="SIGI_STATE"[^>]*>([\s\S]*?)<\/script>/);

    if (sigiMatch && sigiMatch[1]) {
      try {
        const sigiData = JSON.parse(sigiMatch[1]);
        const liveRoomDetails = sigiData?.LiveRoom?.liveRoomUserInfo?.liveRoom;

        if (liveRoomDetails) {
          const status = liveRoomDetails.status;
          const liveTitle = liveRoomDetails.title;
          const viewerCount = liveRoomDetails.liveRoomStats?.userCount || 0;

          // Status 2 = Live Aktif
          const isLive = status === 2;

          return NextResponse.json({
            isLive,
            title: isLive ? (liveTitle || "Live Streaming Mobile Legends") : null,
            viewerCount: isLive ? viewerCount : 0,
            isBlocked: false,
            username: cleanUsername,
            liveUrl: `https://www.tiktok.com/@${cleanUsername}/live`,
          });
        }
      } catch (jsonErr) {
        console.error("JSON parse error:", jsonErr);
      }
    }

    return NextResponse.json({
      isLive: null,
      title: null,
      isBlocked: false,
      username: cleanUsername,
      liveUrl: `https://www.tiktok.com/@${cleanUsername}/live`,
    });
  } catch {
    // Tangkap semua network error dan fallback secara halus
    return NextResponse.json({
      isLive: null,
      title: null,
      isBlocked: true,
      username: cleanUsername,
      liveUrl: `https://www.tiktok.com/@${cleanUsername}/live`,
    });
  }
}
