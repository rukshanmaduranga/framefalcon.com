import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReCaptchaProvider from "@/components/ReCaptchaProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Frame Falcon Studios | Professional Video & Audio Production",
  description: "Premier video and audio production company specializing in teledrama editing, TV commercials, music videos, color grading, AI music production, and social media content. Transform your creative vision into reality.",
  keywords: ["video production", "audio production", "teledrama editing", "TV commercials", "music video editing", "color grading", "AI music production", "social media content", "Sri Lanka", "Frame Falcon Studios"],
  authors: [{ name: "Frame Falcon Studios" }],
  creator: "Frame Falcon Studios",
  publisher: "Frame Falcon Studios",
  metadataBase: new URL('https://framefalcon.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Frame Falcon Studios | Professional Video & Audio Production",
    description: "Transform your creative vision into cinematic reality with our professional video and audio production services.",
    url: 'https://framefalcon.com',
    siteName: 'Frame Falcon Studios',
    images: [
      {
        url: '/falcon-logo.png',
        width: 1200,
        height: 630,
        alt: 'Frame Falcon Studios Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Frame Falcon Studios | Professional Video & Audio Production",
    description: "Transform your creative vision into cinematic reality with our professional video and audio production services.",
    images: ['/falcon-logo.png'],
    creator: '@framefalcon',
  },

  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#001f3f' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-navy-blue text-gray-900 dark:text-white`}
      >
        <ReCaptchaProvider>
          {children}
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
