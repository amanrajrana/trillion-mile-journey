"use client";

import { useContext, useEffect } from "react";
import UserContext from "@/context/user/userContext";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      router.replace("/signup");
    }
  });

  return <div>{children}</div>;
}
