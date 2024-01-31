import AuthProvider from "@/providers/AuthProvider";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" data-theme="light" class="dark">
      <body className={sourceSerif.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
