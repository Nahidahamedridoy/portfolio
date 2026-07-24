import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";
import ScrollToTop from "@/components/ScrollToTop";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nahid Ahamed — Frontend Developer",
  description: "Portfolio of Nahid Ahamed — a Frontend Developer specialising in React, Next.js and TypeScript. Building modern, responsive, and user-friendly web applications.",
  keywords: ["Frontend Developer", "React Developer", "Next.js Developer", "TypeScript", "Portfolio", "Nahid Ahamed"],
  authors: [{ name: "Nahid Ahamed" }],
  openGraph: {
    title: "Nahid Ahamed — Frontend Developer",
    description: "Building modern, responsive, and user-friendly web applications with React and Next.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nahid Ahamed — Frontend Developer",
    description: "Building modern, responsive, and user-friendly web applications with React and Next.js.",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${plusJakartaSans.variable} antialiased selection:bg-primary/20 selection:text-primary`}>
        <div className="noise" />
        <div className="mesh-gradient" />
        <SmoothScroll>
          <CursorFollower />
          <ScrollToTop />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}


