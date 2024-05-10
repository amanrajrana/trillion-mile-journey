import Image from "next/image";
import CheckAuth from "./checkAuth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid lg:grid-cols-11 lg:max-h-screen lg:min-h-[700px] overflow-hidden">
      <div className="lg:relative h-full lg:col-span-5">
        <Image
          src={"/images/painting-person-standing-cliff-with-blue-lake-bg.jpg"}
          alt="background"
          height={500}
          width={500}
          className="lg:absolute lg:top-0 left-0 right-0 bottom-0 object-fill w-full h-full"
          priority
        />
      </div>

      <div className="-mt-48 lg:mt-0 lg:col-span-6 flex justify-center items-center flex-col py-8">
        <div className="w-full flex flex-col gap-y-2 justify-center items-center p-4">
          <Image
            src={"/images/logo.svg"}
            className="h-[37px]"
            alt="logo"
            height={37}
            width={80}
          />
          <p className="lg:text-muted-foreground text-center">
            Journey to a trillion miles starts from here!!
          </p>
        </div>
        <div className="p-4 lg:max-w-md flex justify-center rounded-t-2xl bg-background items-center mx-auto w-full">
          <CheckAuth>{children}</CheckAuth>
        </div>
      </div>
    </div>
  );
}
