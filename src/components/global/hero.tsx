"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function Hero() {
  const words = [
    {
      text: "The",
      className: "text-black dark:text-black font-bold text-6xl",
    },
    {
      text: "fencing",
      className: "text-black dark:text-black font-bold text-6xl",
    },
    {
      text: "tool",
      className:
        "text-black dark:text-black font-bold text-6xl whitespace-pre-line",
    },
    {
      text: "you've",
      className: "text-black dark:text-black font-bold text-6xl",
    },
    {
      text: "been",
      className: "text-black dark:text-black font-bold text-6xl",
    },
    {
      text: "searching",
      className: "text-black dark:text-black font-bold text-6xl",
    },
    {
      text: "for.",
      className: "text-black dark:text-black font-bold text-6xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
      <p className="text-black dark:text-gray-700 text-xl mb-0 mt-4">
        Fencify will help make all of your construction projects simple
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="px-5 py-3 bg-[#7161EC] text-white rounded-lg text-xl font-bold transform hover:-translate-y-1 transition duration-400">
          Get started
        </button>
      </div>
    </div>
  );
}
