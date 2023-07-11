import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
function Herosection() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 1000);

    const textArray =
      "Hei, my name is Amith Jagannath Soorenji and I'm a third-year computer science student. I'm passionate about using technology to solve real-world problems and make a positive impact in people's lives.\n".split(
        ""
      );
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < textArray.length - 1) {
        setText((prevText) => prevText + textArray[currentIndex]);
        currentIndex++;
      } else {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      }
    }, 50); // Decreased the interval time to load characters faster

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="py-32 container1 bg-white dark:bg-black  ">
      <div className="div2 card rounded-none text-center w-1/2 ">
        <Image
          src="/pic.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="rounded-full"
          priority={false}
        />
      </div>
      <div className=" div1 card rounded-none text-center w-1/2 text-black dark:text-white">
        <h1 className="text-5xl pb-9">A Software Developer</h1>
        <div className="flex items-center justify-center">
          <p
            className={`text-2xl  ${
              isVisible
                ? "opacity-100 transition-opacity duration-1000"
                : "opacity-0"
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Herosection;
