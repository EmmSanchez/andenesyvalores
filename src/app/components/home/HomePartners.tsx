import Image from "next/image";
import LogoMarquee from "../LogoMarquee.tsx/LogoMarquee";

export default function HomePartners() {
  return (
    <>
      <section className="w-[1280px] h-[359px] flex flex-col justify-center items-center gap-[30px] px-[80px] py-[50px] text-center">
        <h2 className="flex gap-[10px] text-[64px] text-title-3 leading-[95%] tracking-wide">
          Colaboraciones y{" "}
          <span className="text-title-4 font-semibold">Aliados</span>
        </h2>
        <p className="w-[1120px] text-[22px] text-black">
          En Andenes y Valores creemos en el poder de las alianzas. Por eso
          mantenemos una comunicación constante con nuestros clientes y
          colaboradores para generar oportunidades de valor conjunto.
        </p>

        <LogoMarquee />
      </section>
    </>
  );
}
