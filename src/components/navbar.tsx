import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="border-b-2 border-border-primary">
      <nav className="container flex justify-between items-center py-5">
        <div>
          <Image
            src={"/images/logo.svg"}
            className="h-[37px]"
            alt="logo"
            height={37}
            width={80}
          />
        </div>
        <Link href={"/signup"} className="text-primary text-xl font-bold">
          Sign Up
        </Link>
      </nav>
    </div>
  );
}
