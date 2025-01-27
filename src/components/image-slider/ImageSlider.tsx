"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AppTitle from "../app-title/AppTitle";
import { Slider } from "@/types/type";

const ImageSlider = ({ slider }: { slider: Slider[] }) => {
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
            <div className="w-full h-full  absolute top-0 bg-[linear-gradient(to_bottom,transparent_,#000000ab)] [&>div>p]:hover:text-white [&>div>p]:transition-color [&>div>p]:duration-500">
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
      <button className="text-white absolute top-1/2" onClick={handlePrevious}>
        Prev
      </button>
      <button
        className="text-white absolute top-1/2 right-0"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
