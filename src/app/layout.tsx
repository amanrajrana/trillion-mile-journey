import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "@/app/global.css";
import UserState from "@/context/user/userState";

// APP Metadata constants
const APP_NAME = "Trillion Miles";
const APP_DEFAULT_TITLE = "Trillion Miles";
const APP_TITLE_TEMPLATE = "%s - Trillion Miles";
const APP_DESCRIPTION = "Journey to a trillion miles starts from here!!";

// APP Font constants
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// APP Viewport export
export const viewport: Viewport = {
  themeColor: "#00B2FF",
};

// APP Metadata and required metadata for PWA
export const metadata: Metadata = {
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
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
