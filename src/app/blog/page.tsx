import Hero from "../components/Hero/Hero";
import { VIDEOS } from "../constants/videos";

export default function Blog() {
  return (
    <>
      <Hero video={VIDEOS.BLOG}>
        <h1 className="text-[100px] text-title-4 font-bold uppercase leading-[95%]">
          Blog
        </h1>
        <p className="w-[1120px] text-title-2 text-[40px] font-medium leading-[109%] text-pretty">
          Tendencias, noticias y análisis del sector inmobiliario para la toma
          de decisiones.
        </p>
      </Hero>
      Blog
    </>
  );
}
