import type { Metadata } from "next";
import { Inter, Tektur } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import Providers from "./providers";

const inter = Tektur({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prediction Game",
  description: "Apex Legends ALGS Pro League Prediction Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
