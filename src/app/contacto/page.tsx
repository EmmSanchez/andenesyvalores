import Hero from "../components/Hero/Hero";
import { VIDEOS } from "../constants/videos";

export default function Contacto() {
  return (
    <>
      <Hero video={VIDEOS.CONTACTO}>
        <h1 className="text-[100px] text-title-4 font-bold uppercase leading-[95%]">
          Contacto
        </h1>
        <p className="w-[1120px] text-title-2 text-[40px] font-medium leading-[109%] text-pretty">
          Estamos listos para escuchar tu proyecto y ofrecerte soluciones
          inmobiliarias integrales que impulsen su crecimiento.
        </p>
      </Hero>
      Contacto
    </>
  );
}
