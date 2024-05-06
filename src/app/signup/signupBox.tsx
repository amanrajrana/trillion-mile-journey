import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

export default function SignUpBox() {
  return (
    <Card className="rounded-2xl lg:bg-white/5 border-none lg:border-2 space-y-4 lg:space-y-12 w-full">
      <CardHeader>
        <CardTitle className="text-center">Sign Up</CardTitle>
        <CardDescription className="text-center">
          Choose a sign up method
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-y-6">
          <Button
            variant={"outline"}
            className="bg-inherit w-full rounded-lg py-6"
          >
            <FcGoogle size={24} className="mr-2" />
            Sign up with Google
          </Button>
          <Button
            variant={"outline"}
            className="bg-inherit w-full rounded-lg py-6"
          >
            <MdEmail size={24} className="mr-2" />
            Sign up with Email
          </Button>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center">
        Already a user?{" "}
        <Link href={"/login"} className="text-primary ml-2 hover:underline">
          Log In
        </Link>
      </CardFooter>
    </Card>
  );
}
