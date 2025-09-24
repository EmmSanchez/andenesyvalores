import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center gap-[50px] text-center">
        <Image
          src={"/logos/main/andenesyvalores-blue-3x.svg"}
          alt="Andenes y Valores Logo"
          width={532}
          height={82.5}
        />
        <p className="w-[1120px] text-title-3 text-[40px] font-medium leading-[109%] text-pretty">
          Desarrollamos espacios inmobiliarios que impulsan el crecimiento de
          nuestros clientes y comunidades.
        </p>
      </div>

      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="/videos/banner-home.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
