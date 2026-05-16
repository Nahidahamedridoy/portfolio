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
  title: "Nahid Ahamed Ridoy - Portfolio",
  description: "Frontend & Web Developer Portfolio",
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


