"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AppTitle from "../app-title/AppTitle";
import { Slider } from "@/types/type";
import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";

const ImageSlider = ({
  slider,
  isNavigateIcon = true,
}: {
  slider: Slider[];
  isNavigateIcon?: boolean;
}) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setInterval(() => {
      handleNext();
    }, 1000 * 5);
  }, []);

  const handleNext = () => {
    setStep((c) => (c === slider.length - 1 ? 0 : c + 1));
  };

  const handlePrevious = () => {
    setStep((c) => (c === 0 ? slider.length - 1 : c - 1));
  };
  return (
    <div className="relative w-full h-full flex  overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${step * 100}%)`,
        }}
      >
        {slider.map((slide) => (
          <div className="w-full h-full relative flex-shrink-0" key={slide.id}>
            <Image
              width={1000}
              height={1000}
              src={slide.image}
              alt="Defcon event"
              className="w-full h-full block object-cover"
            />
            <div className="w-full h-full  absolute top-0 bg-[linear-gradient(to_bottom,#00003278_,#000000ab)] [&>div>p]:hover:text-white [&>div>p]:transition-color [&>div>p]:duration-500">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <AppTitle
                  title="DEFCON"
                  className=" text-gray-200 text-5xl font-semibold tracking-widest"
                />
                <p className="text-center text-gray-300">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isNavigateIcon ? (
        <>
          <button
            className="text-white absolute top-1/2 p-2 bg-gray-200/20 hover:bg-gray-200/60 transition-color duration-300 rounded-full ml-4"
            onClick={handlePrevious}
          >
            <ArrowLeftIcon className="w-10 h-10 fill-gray-800/60" />
          </button>
          <button
            className="text-white absolute top-1/2 right-0 p-2 bg-gray-200/20 hover:bg-gray-200/60 transition-color duration-300 rounded-full mr-4"
            onClick={handleNext}
          >
            <ArrowRightIcon className="w-10 h-10 fill-gray-800/60" />
          </button>
        </>
      ) : null}
    </div>
  );
};

export default ImageSlider;
