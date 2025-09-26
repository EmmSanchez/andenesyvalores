"use client";
import { useState } from "react";
import { ImageInfo } from "../types/carousel";

export function useCarousel(images: ImageInfo[]) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index: number) => {
    if (currentIndex === index) return;
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex];

  return { currentImage, currentIndex, goToNext, goToPrev, goToIndex };
}
