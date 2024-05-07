"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import authService, {
  SignupWithEmailPassword,
} from "@/lib/firebase/authServices";
import React, { useState } from "react";
import { ImSpinner8 } from "react-icons/im";

export default function EmailPasswordBox() {
  const [loading, setLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [credential, setCredential] = useState<SignupWithEmailPassword>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!credential.email || !credential.password) {
      console.log("Enter valid username & password");
      return;
    }

    setLoading(true);

    try {
      const res = await authService.signupWithEmailPassword(credential);
      // console.log("res: ", res);
    } catch (error) {
      console.log("error: ", error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4">
        <Label htmlFor="email">Email: </Label>
        <Input
          id="email"
          type="email"
          value={credential.email}
          onChange={(e) =>
            setCredential({ ...credential, email: e.target.value })
          }
        />
      </div>

      <div className="my-4">
        <Label htmlFor="password">Password: </Label>
        <Input
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          value={credential.password}
          onChange={(e) =>
            setCredential({ ...credential, password: e.target.value })
          }
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="show-password"
          onCheckedChange={() => setIsPasswordVisible(!isPasswordVisible)}
        />
        <label
          htmlFor="show-password"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show Password
        </label>
      </div>

      <Button disabled={loading} type="submit" className="w-full mt-8 mb-6">
        {loading ? <ImSpinner8 className="animate-spin" /> : "Sign Up"}
      </Button>
    </form>
  );
}
