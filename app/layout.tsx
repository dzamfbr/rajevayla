import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajeva Ayla Official Website",
  description: "Official Personal Website for Ayla",
  icons: {
    icon: "/image2.png",
    shortcut: "/image2.png",
    apple: "/image2.png",
  },
  verification: {
    google: "8JH4wtQG9lL6ChQ37hgPrrYi9uVAkmJXCXCOQYaNSRI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/image2.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/image2.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <div className="bg-glow"></div>
        <div className="bg-grid"></div>
        {children}
      </body>
    </html>
  );
}
