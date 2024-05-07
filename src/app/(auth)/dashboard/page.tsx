"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserContext from "@/context/user/userContext";
import authService from "@/lib/firebase/authServices";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

export default function DashBoard() {
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      router.replace("/signup");
    }
  });

  return (
    <div className="container flex justify-center items-center h-screen">
      <Card className="bg-white/5 w-full max-w-screen-lg">
        <CardHeader>
          <CardTitle>Hi {user?.name}</CardTitle>
          <CardDescription>{user?.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-center">Welcome Back!</div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => authService.logOut()} className="mx-auto">
            Log Out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
