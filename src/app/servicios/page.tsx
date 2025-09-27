import Hero from "../components/Hero/Hero";
import { VIDEOS } from "../constants/videos";

export default function Servicios() {
  return (
    <>
      <Hero video={VIDEOS.SERVICIOS}>
        <h1 className="text-[100px] text-title-4 font-bold uppercase leading-[95%]">
          Servicios
        </h1>
        <p className="w-[1120px] text-title-2 text-[40px] font-medium leading-[109%] text-pretty">
          Soluciones inmobiliarias integrales para cada etapa del desarrollo de
          tu proyecto
        </p>
      </Hero>
      Servicios
    </>
  );
}
