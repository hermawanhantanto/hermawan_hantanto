/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Hero = () => {
  const [text, setText] = useState<string>("");
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [delta, setDelta] = useState<number>(
    Math.floor(Math.random() * 300) + 1
  );
  const periode = 2000;
  const fullText = "FullStack Web Developer";

  useEffect(() => {
    const ticker = setInterval(() => {
      let updateText = isDeleted
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updateText);

      if (isDeleted) setDelta((prev) => prev / 2);

      if (text === fullText && !isDeleted) {
        setIsDeleted(true);
        setDelta(periode);
      } else if (text === "" && isDeleted) {
        setIsDeleted(false);
        setDelta(Math.floor(Math.random() * 300) + 1);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, isDeleted, delta, fullText, periode]);

  return (
    <div className="py-5 px-5">
      <MaxWidthWrapper className="lg:flex-row items-center lg:justify-between flex flex-col justify-center">
        <div className="flex flex-col gap-4 lg:text-left text-center">
          <h1 className="font-bold lg:text-5xl text-4xl text-balance">
            Hello I&apos;m
          </h1>
          <p className="text-4xl lg:text-5xl font-bold text-green-600 text-balance ">
            <span className="border-r-4 border-green-400 pr-1">{text}</span>
          </p>
          <p className="max-w-[400px]">
            I build user-friendly web applications with a focus on{" "}
            <span className="bg-gray-900 text-white p-1 leading-8">
              performance and scalability.
            </span>
          </p>
          <a
            href="CV.pdf"
            className="cursor-pointer w-fit ring-2 ring-green-500 rounded-full items-center justify-center px-6 py-2 text-xs max-lg:self-center hover:bg-green-500 hover:text-white transition-colors duration-200 ease-in-out"
            download
          >
            Download CV
          </a>
        </div>
        <div className="lg:w-1/2 w-full animate-up-down">
          <img
            src="https://storage.googleapis.com/mine_bucket_hermawan/portofolio-website/meSection.png"
            alt="My Picture"
            className="w-full rounded-full"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
