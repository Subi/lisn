import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Lisn",
  description: "what are you listening to",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <main>{children}</main>
      <Toaster/>
      </body>
    </html>
  );
}
