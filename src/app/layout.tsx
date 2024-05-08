import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/app/global.css";
import UserState from "@/context/user/userState";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

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
    <html className="dark" lang="en">
      <body className={poppins.className}>
        <UserState>{children}</UserState>
      </body>
    </html>
  );
}
