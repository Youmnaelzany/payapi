import type { Metadata } from "next";
import { DM_Serif_Display, Public_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PayAPI",
  description:
    "PayAPI is a payment processing platform that allows you to accept payments online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${dmSerifDisplay.variable} max-w-360 mx-auto bg-[#EDF3F8] ${publicSans.variable} antialiased`}
      >
        <Header />
        <main className="mt-24 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
