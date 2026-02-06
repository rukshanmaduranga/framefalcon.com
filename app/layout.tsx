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
  title: "Frame Falcon Studios | Professional Video & Audio Production",
  description: "Premier video and audio production company specializing in teledrama editing, TV commercials, music videos, color grading, AI music production, and social media content. Transform your creative vision into reality.",
  keywords: ["video production", "audio production", "teledrama editing", "TV commercials", "music video editing", "color grading", "AI music production", "social media content", "Sri Lanka"],
  authors: [{ name: "Frame Falcon Studios" }],
  openGraph: {
    title: "Frame Falcon Studios | Professional Video & Audio Production",
    description: "Transform your creative vision into cinematic reality with our professional video and audio production services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-navy-blue text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
