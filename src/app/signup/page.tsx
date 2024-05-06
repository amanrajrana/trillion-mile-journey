import Image from "next/image";
import SignUpBox from "./signupBox";

export default function SingUp() {
  return (
    <div className="flex flex-col lg:flex-row lg:min-h-max lg:h-screen">
      <div className="h-full lg:w-5/12">
        <Image
          src={"/painting-person-standing-cliff-with-blue-lake-background.jpg"}
          alt="painting-person-standing-cliff-with-blue-lake-background"
          height={832}
          width={640}
          className="bg-green-400 h-[30rem] lg:h-full w-full"
        />
      </div>
      <div className="flex-1 -mt-60 lg:mt-0 flex gap-y-12 lg:gap-y-16 items-center flex-col justify-center">
        <div className="w-full flex flex-col gap-y-2 justify-center items-center">
          <Image
            src={"./logo.svg"}
            className="h-[37px]"
            alt="logo"
            height={37}
            width={80}
          />
          <p className="lg:text-muted-foreground">
            Journey to a trillion miles starts from here!!
          </p>
        </div>
        <div className="p-4 lg:max-w-md flex justify-center rounded-t-2xl bg-background items-center mx-auto w-full">
          <SignUpBox />
        </div>
      </div>
    </div>
  );
}
