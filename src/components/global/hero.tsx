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
      className: "text-black dark:text-black font-bold text-6xl whitespace-pre-line",
    },
    {
      text: "you've",
      className: "text-black dark:text-black font-bold text-6xl",
    },
    {
      text: "been",
      className: "text-black dark:text-black font-bold text-6xl"
    },
    {
        text: "searching",
        className: "text-black dark:text-black font-bold text-6xl"
      },
      {
        text: "for.",
        className: "text-black dark:text-black font-bold text-6xl"
      },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
      <p className="text-black dark:text-gray-700 text-xl mb-4 mt-4">
        Fencify will help make all of your construction projects simple
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Get started
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
