"use client";

import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { User } from "@/types/type";
import { onAuthStateChanged } from "firebase/auth";
import authService from "@/lib/firebase/authServices";

const UserState = ({ children }: { children: React.ReactNode }) => {
  const [loadingUserSession, setLoadingUserSession] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(authService.auth, (user) => {
      console.log("hello user: ", user);

      if (!user) {
        setUser(null);
        return;
      }

      setUser({
        email: user?.email || "",
        name: user?.displayName || "",
        photoUrl: user?.photoURL || "",
      });
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUserSession }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
