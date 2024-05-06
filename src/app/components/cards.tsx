import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Cards() {
  const CARD_METADATA = [
    {
      image: "/rocket.png",
      heading: "Introduction to Rocket Science",
      text: "Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and",
    },
    {
      image: "/atom.png",
      heading: "Astro Physics",
      text: "Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and",
    },
    {
      image: "/ai-chip.png",
      heading: "Artificial Intelligence",
      text: "Covers fundamentals, design, construction, operation and programming of robots.",
    },
    {
      image: "/telescope.png",
      heading: "Astro Physics",
      text: "Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and",
    },
  ];

  return (
    <div className="container">
      <div className="flex justify-between items-center my-2">
        <h2 className="text-white text-xl font-semibold py-4">
          Popular Topic 🔥
        </h2>
        <div className="space-x-4">
          <button className="text-white/50 border rounded-lg p-2">
            <FaArrowLeft />
          </button>
          <button className="text-white border rounded-lg p-2">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="flex gap-x-4 w-full overflow-x-auto no-scrollbar">
        {CARD_METADATA.map((item, index) => (
          <Card
            key={index}
            className="p-4 rounded-2xl flex justify-between flex-col gap-y-6"
          >
            <CardContent className="flex flex-col md:flex-row items-center w-48 md:w-96 p-0 gap-2">
              <Image
                src={item.image}
                className="w-32 h-32 p-1"
                alt={item.heading}
                height={120}
                width={120}
              />
              <div className="flex-1 space-y-2">
                <h2 className="font-semibold tracking-wider">{item.heading}</h2>
                <p className="text-white/75 text-sm tracking-widest">
                  {item.text}
                </p>
              </div>
            </CardContent>
            <Button
              variant={"outline"}
              className="hidden md:block rounded-lg w-full font-bold tracking-widest"
            >
              READ
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
