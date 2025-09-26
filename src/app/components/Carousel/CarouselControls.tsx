"use client";
import { ImageInfo } from "@/app/types/carousel";
import Image from "next/image";

interface CarouselControlsProps {
  images: ImageInfo[];
  currentIndex: number;
  goToNext: () => void;
  goToPrev: () => void;
  goToIndex: (i: number) => void;
}

export default function CarouselControls({
  images,
  currentIndex,
  goToNext,
  goToPrev,
  goToIndex,
}: CarouselControlsProps) {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="flex justify-between gap-[30px]">
          <button onClick={goToPrev} className="hover:cursor-pointer">
            <Image
              src={"/icons/Home/flecha.svg"}
              alt="Flecha izquierda"
              width={28.4}
              height={28.8}
              className="h-[28.8px]"
            />
          </button>

          <div className="flex justify-center items-center gap-[15.5px]">
            {images.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`w-[15.5px] h-[15.5px] rounded-full ${
                    index === currentIndex
                      ? "bg-icons-orange"
                      : "bg-background-3"
                  } hover:cursor-pointer transition-colors`}
                ></button>
              );
            })}
          </div>

          <button onClick={goToNext} className="hover:cursor-pointer">
            <Image
              src={"/icons/Home/flecha.svg"}
              alt="Flecha derecha"
              width={28.4}
              height={28.8}
              className="h-[28.8px] rotate-180"
            />
          </button>
        </div>
      </div>
    </>
  );
}
