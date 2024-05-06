import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trillion Mile Journey",
  description: "Journey to a trillion miles starts from here!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
