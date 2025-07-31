import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/shared/SideBar";
import Header from "@/components/shared/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[auto_1fr] grid-cols-[250px_1fr]">
          <Header />
          <SideBar />
          <main>
          {children}
          </main>
        </div>
        
      </body>
    </html>
  );
}
