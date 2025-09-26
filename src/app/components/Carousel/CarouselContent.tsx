"use client";
import { ImageInfo } from "@/app/types/carousel";
import Image from "next/image";

interface CarouselContentProps {
  currentImage: ImageInfo;
}

export default function CarouselContent({
  currentImage,
}: CarouselContentProps) {
  return (
    <>
      <div className="w-[718px] h-[445px] border-solid border-[7.5px] border-button-active">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={718}
          height={485}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
