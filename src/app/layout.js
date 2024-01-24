import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Boi Binimoy",
  description: "A book exchange and buy-sell platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={lora.className}>
        <AuthProvider>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
