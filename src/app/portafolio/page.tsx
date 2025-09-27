import Hero from "../components/Hero/Hero";
import { VIDEOS } from "../constants/videos";

export default function Portafolio() {
  return (
    <>
      <Hero video={VIDEOS.PORTAFOLIO}>
        <h1 className="text-[100px] text-title-4 font-bold uppercase leading-[95%]">
          Portafolio
        </h1>
        <p className="w-[1120px] text-title-2 text-[40px] font-medium leading-[109%] text-pretty">
          Proyectos y propiedades diseñados con funcionalidad, ubicación
          estratégica y valor a largo plazo.
        </p>
      </Hero>
      Portafolio
    </>
  );
}
