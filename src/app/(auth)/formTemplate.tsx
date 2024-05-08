"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import EmailPasswordBox, { EmailPasswordBoxProps } from "./emailPasswordBox";

type Props = EmailPasswordBoxProps & {
  message: Message;
  handleGoogleSignUp: () => void;
};

export type Message = {
  message: string;
  type: "Error" | "Success";
} | null;

export default function FormTemplate(props: Props) {
  const [emailFiledVisible, setEmailFiledVisible] = useState<boolean>(false);

  return (
    <Card className="rounded-2xl lg:bg-white/5 border-none lg:border-2 space-y-4 w-full">
      <CardHeader>
        <CardTitle className="text-center tracking-wider">
          {props.formName}
        </CardTitle>
        <CardDescription className="text-center">
          Choose a {props.formName} method
        </CardDescription>
      </CardHeader>

      <CardContent>
        {props.message && (
          <p
            className={`text-center text-sm font-semibold -mt-4 ${
              props.message.type === "Error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {props.message.message}
          </p>
        )}
        {emailFiledVisible ? (
          <EmailPasswordBox
            formName={props.formName}
            credential={props.credential}
            loading={props.loading}
            setCredential={props.setCredential}
            handleSubmit={props.handleSubmit}
          />
        ) : (
          <div className="flex flex-col gap-y-6">
            <Button
              variant={"outline"}
              className="bg-inherit w-full rounded-lg py-6"
              onClick={props.handleGoogleSignUp}
            >
              <FcGoogle size={24} className="mr-2" />
              {props.formName} with Google
            </Button>

            <Button
              variant={"outline"}
              className="bg-inherit w-full rounded-lg py-6"
              onClick={() => setEmailFiledVisible(true)}
            >
              <MdEmail size={24} className="mr-2" />
              {props.formName} with Email
            </Button>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-center">
        {props.formName === "Log In" ? (
          <>
            Don&lsquo;t have Account?
            <Link
              href={"/signup"}
              className="text-primary ml-2 hover:underline"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            Already a user?
            <Link href={"/login"} className="text-primary ml-2 hover:underline">
              Log In
            </Link>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
