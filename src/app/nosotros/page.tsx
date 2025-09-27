import Hero from "../components/Hero/Hero";
import { VIDEOS } from "../constants/videos";

export default function Nosotros() {
  return (
    <>
      <Hero video={VIDEOS.NOSOTROS}>
        <h1 className="text-[100px] text-title-4 font-bold uppercase leading-[95%]">
          Nosotros
        </h1>
        <p className="w-[1120px] text-title-2 text-[40px] font-medium leading-[109%] text-pretty">
          Nuestra trayectoria y valores nos respaldan como desarrolladora
          inmobiliaria integral.
        </p>
      </Hero>
      Nosotros
    </>
  );
}
