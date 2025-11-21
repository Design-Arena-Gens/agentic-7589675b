import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Switch it Up Gallery | Luxury Skincare, Made Simple",
  description:
    "Switch on the beauty in you with Switch it Up Gallery’s luxurious skincare essentials. Discover cleansers, brightening creams, and glow-boosting rituals tailored to unveil your radiance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-luxury`}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
            <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(233,215,187,0.55),_transparent_65%)] blur-2xl" />
            <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(206,166,122,0.35),_transparent_60%)] blur-3xl" />
            <div className="absolute bottom-24 left-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(250,241,230,0.8),_transparent_70%)] blur-3xl" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
