import Image from "next/image";
import Link from "next/link";
import CarouselContent from "./components/Carousel/CarouselContent";
import CarouselControls from "./components/Carousel/CarouselControls";
import HomePortafolio from "./components/home/HomePortfolio";
import LinkButton from "./components/common/LinkButton";
import HomePartners from "./components/home/HomePartners";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Mision y Visión */}
      <section className="flex flex-col justify-center items-center w-7xl px-[80px] py-[50px] gap-[30px]">
        <h2 className="text-[64px] leading-[95%] text-title-3">
          Juntos creamos el{" "}
          <span className="text-title-4 font-semibold">Futuro</span>
        </h2>
        <p className="text-paragragraph-1 text-3xl text-justify">
          Más de 15 años transformando ideas en proyectos inmobiliarios que
          generan valor a largo plazo. Desde la planeación hasta la
          administración, trabajamos con visión, compromiso y transparencia.
        </p>

        <article className="flex flex-row gap-[30px]">
          <div className="flex flex-col gap-[15px]">
            <div className="absolute w-[186px] h-[59px] bg-background-3 cut-corner translate-y-1.5 translate-x-1"></div>
            <h3 className="w-[186px] h-[59px] text-[40px] text-center font-semibold text-paragragraph-1 bg-button-active cut-corner">
              Misión
            </h3>
            <p className="flex-1 text-[25px] text-paragragraph-1 text-justify">
              Brindar soluciones inmobiliarias integrales, con un enfoque humano
              y profesional, adaptadas a las necesidades de cada cliente y
              orientadas a superar sus expectativas, generando valor sostenible.
            </p>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="absolute w-[186px] h-[59px] bg-background-3 cut-corner translate-y-1.5 translate-x-1"></div>
            <h3 className="w-[186px] h-[59px] text-[40px] text-center font-semibold text-paragragraph-1 bg-button-active cut-corner shadowClone">
              Visión
            </h3>
            <p className="flex-1 text-[25px] text-paragragraph-1 text-justify">
              Consolidarnos como una desarrolladora inmobiliaria de referencia
              en la región, reconocida por su innovación, ética y compromiso con
              el desarrollo sostenible de comunidades y negocios.
            </p>
          </div>
        </article>

        <LinkButton
          title="Conócenos"
          href="/nosotros"
          className="w-[175px] h-[45px]"
        />
      </section>

      {/* Imagen de fondo */}
      <section className="relative flex flex-col justify-start items-center w-full h-[386px]">
        <div className="absolute w-dvw max-w-[1920px] h-[1267px]">
          <Image
            src={"/images/Home/background-content-home.svg"}
            alt="Andenes logo"
            width={1904}
            height={1267.35}
            className="absolute -z-50 -top-[68px] left-32 h-[1267px] object-cover overflow-visible"
          />
        </div>
      </section>

      {/* Servicios */}
      <section className="w-full flex justify-center items-center bg-background-3">
        <div className="flex flex-col justify-center items-center w-7xl h-[492px] px-[80px] py-[50px] gap-[30px]">
          <h2 className="flex gap-[30px] text-[64px] text-title-3 leading-[95%] tracking-wide">
            Nuestros{" "}
            <span className="text-title-4 font-semibold">Servicios</span>
          </h2>

          <div className="flex flex-row gap-[15px]">
            <div className="flex justify-center items-center gap-[15px] px-2.5 py-[30px] bg-background-2/70">
              <div className="flex flex-col justify-center items-center gap-2.5">
                <Image
                  src={"/icons/Home/servicio-1.svg"}
                  width={69}
                  height={60}
                  alt="Ícono del primer servicio"
                />
                <p className="w-[248px] text-[24px] leading-[111%] font-semibold text-center text-paragragraph-2">
                  Comercialización y arrendamiento de propiedades
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[15px] px-2.5 py-[30px] bg-background-2/70">
              <div className="flex flex-col justify-center items-center gap-2.5">
                <Image
                  src={"/icons/Home/servicio-1.svg"}
                  width={69}
                  height={60}
                  alt="Ícono del primer servicio"
                />
                <p className="w-[248px] text-[24px] leading-[111%] font-semibold text-center text-paragragraph-2">
                  Comercialización y arrendamiento de propiedades
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[15px] px-2.5 py-[30px] bg-background-2/70">
              <div className="flex flex-col justify-center items-center gap-2.5">
                <Image
                  src={"/icons/Home/servicio-1.svg"}
                  width={69}
                  height={60}
                  alt="Ícono del primer servicio"
                />
                <p className="w-[248px] text-[24px] leading-[111%] font-semibold text-center text-paragragraph-2">
                  Comercialización y arrendamiento de propiedades
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[15px] px-2.5 py-[30px] bg-background-2/70">
              <div className="flex flex-col justify-center items-center gap-2.5">
                <Image
                  src={"/icons/Home/servicio-1.svg"}
                  width={69}
                  height={60}
                  alt="Ícono del primer servicio"
                />
                <p className="w-[248px] text-[24px] leading-[111%] font-semibold text-center text-paragragraph-2">
                  Comercialización y arrendamiento de propiedades
                </p>
              </div>
            </div>
          </div>

          <LinkButton
            title="Ver más"
            href="/servicios"
            className="w-[175px] h-[45px]"
          />
        </div>
      </section>

      {/* Portafolio */}
      <HomePortafolio />

      {/* Explore */}
      <section className="relative w-dvw h-[636px]">
        <video
          autoPlay
          muted
          loop
          preload="auto"
          src="/videos/home-explore.mp4"
          className="absolute w-full h-full object-cover"
        ></video>

        <div className="absolute w-full h-full flex flex-col justify-center items-center">
          <div className="w-[1120px] h-[240px] flex flex-col justify-center items-center gap-[30px]">
            <h2 className="flex gap-[15px] text-[64px] text-title-1 leading-[95%]">
              Explora cada
              <span className="text-title-4 font-semibold">Detalle</span>
            </h2>
            <p className="text-3xl text-center text-paragragraph-2">
              Recorre nuestra nave en un tour 360° y descubre sus espacios,
              dimensiones y ventajas como si estuvieras ahí.
            </p>
            <LinkButton
              title="Ver recorrido 360°"
              href="/servicios"
              className="w-[263px] h-[45px]"
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <HomePartners />

      {/* Contactanos */}
      <section className="w-full h-[715px] flex flex-col justify-center items-center bg-background-2">
        <div className="w-[1280px] flex flex-col justify-center items-center gap-[30px] py-[50px]">
          <h2 className="w-[1180px] h-[122px] flex flex-col text-[64px] text-center tracking-wide leading-[105%] text-title-2">
            Tu historia merece ser contada{" "}
            <span className="text-title-4 font-semibold">Contáctanos</span>
          </h2>

          {/* Formulario */}
          <div className="w-[1280px] h-[463px] flex justify-center items-center gap-[15px]">
            <div className="w-[456.2px] h-[453.52] box p-5">
              <h3 className="w-full h-full pt-16 flex flex-col text-[64px] text-right font-bold tracking-wide leading-[105%] text-title-2">
                <span className="text-title-4">JUNTOS</span>
                CREAMOS
                <span className="text-title-4">FUTUROS.</span>
              </h3>
            </div>

            <form action="" className="bg-green-200 w-[747px] h-[463px]">
              <label htmlFor="">Nombre</label>
              <input type="text" className="w-full h-14 bg-background-1" />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
