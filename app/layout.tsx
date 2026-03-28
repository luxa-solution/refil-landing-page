import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Refil - Smart Gas Delivery, Right to Your Doorstep",
  description: "Never run out of gas again. Refil delivers cooking gas to your doorstep with just a tap. Join the waitlist for early access and exclusive offers.",
  keywords: "gas delivery, cooking gas, LPG delivery, gas refill, home gas delivery, Refil",
  openGraph: {
    title: "Refil - Smart Gas Delivery",
    description: "Never run out of gas again. Join the waitlist for early access.",
    type: "website",
    locale: "en_NG",
    siteName: "Refil",
  },
  icons: {
    icon: "/icons/refil_logo.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased overflow-x-hidden w-full font-montserrat`}
      >
        {children}
      </body>
    </html>
  );
}
