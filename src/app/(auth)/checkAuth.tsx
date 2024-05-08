"use client";

import UserContext from "@/context/user/userContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function CheckAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  });

  return <>{children}</>;
}
