"use client";
import AuthProvider from "@/providers/AuthProvider";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import TranstackProvider from "@/providers/TranstackProvider";

const sourceSerif = Source_Serif_4({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className="dark">
      <body className={`${sourceSerif.className} min-h-[100svh]`}>
        <TranstackProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </TranstackProvider>
      </body>
    </html>
  );
}
