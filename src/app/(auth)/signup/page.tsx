"use client";

import authService, {
  SignupWithEmailPassword,
} from "@/lib/firebase/authServices";
import FormTemplate, { Message } from "../formTemplate";
import { useState } from "react";

export default function SingUp() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<Message>(null);

  const [credential, setCredential] = useState<SignupWithEmailPassword>({
    email: "",
    password: "",
  });

  const handleGoogleSignUp = async () => {
    const res = await authService.signupWithGoogle();

    console.log(res);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setMessage(null);

    e.preventDefault();

    if (!credential.email || !credential.password) {
      setMessage({
        message: "Fill the required field",
        type: "Error",
      });
      return;
    }

    setLoading(true);

    const { error } = await authService.signupWithEmailPassword(credential);

    if (error) {
      console.log("Yaha Error aa raha hai");

      setMessage({
        message: error.message,
        type: "Error",
      });

      setLoading(false);
      return;
    }

    setMessage({
      message: "Account created",
      type: "Success",
    });

    setLoading(false);
  };

  return (
    <FormTemplate
      formName="Sign Up"
      handleGoogleSignUp={handleGoogleSignUp}
      credential={credential}
      setCredential={setCredential}
      handleSubmit={handleSubmit}
      loading={loading}
      message={message}
    />
  );
}
