"use client";

import authService, {
  SignupWithEmailPassword,
} from "@/lib/firebase/authServices";
import FormTemplate, { Message } from "../formTemplate";
import { useState } from "react";

export default function SingUp() {
  const [loading, setLoading] = useState<boolean>(false);
  const [credential, setCredential] = useState<SignupWithEmailPassword>({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<Message>(null);

  const handleGoogleSignUp = async () => {
    const res = await authService.signupWithGoogle();

    console.log(res);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    if (!credential.email || !credential.password) {
      console.log("Enter valid username & password");
      return;
    }

    setLoading(true);

    const { error } = await authService.signinWithEmailPassword(credential);

    if (error) {
      setMessage({
        message: error.message,
        type: "Error",
      });
    }

    setLoading(false);
  };

  return (
    <FormTemplate
      formName="Log In"
      handleGoogleSignUp={handleGoogleSignUp}
      credential={credential}
      setCredential={setCredential}
      handleSubmit={handleSubmit}
      loading={loading}
      message={message}
    />
  );
}
