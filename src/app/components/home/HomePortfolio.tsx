"use client";
import CarouselContent from "../Carousel/CarouselContent";
import Image from "next/image";
import CarouselControls from "../Carousel/CarouselControls";
import Link from "next/link";
import { ImageInfo } from "@/app/types/carousel";
import { useCarousel } from "@/app/hooks/useCarousel";
import LinkButton from "../common/LinkButton";

const images: ImageInfo[] = [
  {
    src: "/images/Home/portafolio-carousel-1.jpg",
    alt: "Imagen de nave vista frente superior",
  },
  {
    src: "/images/Home/portafolio-carousel-2.jpg",
    alt: "Imagen de nave vista interior",
  },
  {
    src: "/images/Home/portafolio-carousel-3.jpg",
    alt: "Imagen de nave vista interior hacia la entrada",
  },
  {
    src: "/images/Home/portafolio-carousel-4.jpg",
    alt: "Imagen de nave vista superior",
  },
];

export default function HomePortafolio() {
  // Lógica del carrusel en componente padre
  const { currentIndex, currentImage, goToNext, goToPrev, goToIndex } =
    useCarousel(images);

  return (
    <section className="w-[1280px] h-[870px] flex flex-col justify-center items-center gap-[30px] px-[80px] py-[50px]">
      <h2 className="text-[64px] leading-[95%] text-title-4 font-semibold tracking-wide">
        Portafolio
      </h2>
      <p className="text-3xl text-paragragraph-1">
        Conoce nuestros proyectos e inventario
      </p>

      <div className="w-[1118px] h-[537px] flex flex-col gap-[30px]">
        <div className="w-full flex flex-row justify-between items-center gap-[30px]">
          {/* Data */}
          <div className="flex flex-col gap-[10px]">
            <div className="absolute w-[359px] h-[117px] bg-background-3 cut-corner translate-y-2 translate-x-1.5"></div>
            <h3 className="w-[359px] h-[117px] text-[40px] font-semibold text-button-blue tracking-wider text-left px-4 py-4 leading-10 bg-button-active cut-corner">
              Nave Industrial Guadalupe, NL.
            </h3>

            {/* Ubicación */}
            <div className="flex flex-col gap-[5px] tracking-wide">
              <div className="flex flex-row items-center gap-[10px]">
                <Image
                  src={"/icons/Home/ubicacion-3x.svg"}
                  width={18.3}
                  height={24}
                  alt="Ícono de ubicación"
                />
                <h2 className="text-[30px] font-semibold text-title-4">
                  Ubicación
                </h2>
              </div>
              <p className="text-[22px] w-[349px] font-medium text-paragragraph-1 leading-6">
                Guadalupe, NL.
              </p>
            </div>

            {/* Área de terreno */}
            <div className="flex flex-col gap-[5px] tracking-wide">
              <div className="flex flex-row items-center gap-[10px]">
                <Image
                  src={"/icons/Home/ubicacion-3x.svg"}
                  width={18.3}
                  height={24}
                  alt="Ícono de ubicación"
                />
                <h2 className="text-[30px] font-semibold text-title-4">
                  Área Terreno
                </h2>
              </div>
              <p className="text-[22px] w-[349px] font-medium text-paragragraph-1 leading-6">
                4,048.65 sqmt / 43,579.30 sqft
              </p>
            </div>

            {/* Área rentable */}
            <div className="flex flex-col gap-[5px] tracking-wide">
              <div className="flex flex-row items-center gap-[10px]">
                <Image
                  src={"/icons/Home/ubicacion-3x.svg"}
                  width={18.3}
                  height={24}
                  alt="Ícono de ubicación"
                />
                <h2 className="text-[30px] font-semibold text-title-4">
                  Área Rentable
                </h2>
              </div>
              <p className="text-[22px] w-[349px] font-medium text-paragragraph-1 leading-6">
                3,238 sqmt / 34,863.12 sqft
              </p>
            </div>

            {/* Alturas */}
            <div className="flex flex-col gap-[5px] tracking-wide">
              <div className="flex flex-row items-center gap-[10px]">
                <Image
                  src={"/icons/Home/ubicacion-3x.svg"}
                  width={18.3}
                  height={24}
                  alt="Ícono de ubicación"
                />
                <h2 className="text-[30px] font-semibold text-title-4">
                  Alturas
                </h2>
              </div>
              <p className="w-[349px] text-[22px] font-medium text-paragragraph-1 leading-6">
                8.5m (27.88ft), Max. 10m (32.80ft)
              </p>
            </div>
          </div>

          {/* Carousel */}
          <CarouselContent currentImage={currentImage} />
        </div>

        {/* Flechas */}
        <CarouselControls
          images={images}
          currentIndex={currentIndex}
          goToNext={goToNext}
          goToPrev={goToPrev}
          goToIndex={goToIndex}
        />
      </div>

      <LinkButton
        title="Ver más"
        href="/portafolio"
        className="w-[175px] h-[45px]"
      />
    </section>
  );
}
