import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
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
      </section>

      {/* <section className="relative flex flex-col justify-center items-center w-full px-[80px] gap-[30px] bg-orange-200">
        <Image
          src={"/logos/main/andenes-forma-3x.svg"}
          alt="Andenes logo forma"
          width={1904}
          height={1267.35}
          className="absolute  top-0"
        />

        <article className="flex flex-col justify-center items-center w-7xlc px-[80px] gap-[30px]">
          <Link
            href={"/conocenos"}
            className="w-[175px] h-[45px] text-[22px] leading-[120%] tracking-[-2%] px-[15px] py-3 text-center font-semibold text-button-blue bg-button-active cut-corner"
          >
            Conócenos
          </Link>

          <Image
            src={"/images/Home/content-mision-vision-x.svg"}
            alt="Imagen aerea ejemplo"
            width={1037}
            height={343}
            className=""
          />
        </article>
      </section> */}

      {/* Servicios */}
      <section className="w-full flex justify-center items-center bg-background-3">
        <div className="flex flex-col justify-center items-center w-7xl h-[492px] px-[80px] py-[50px] gap-[30px]">
          <h2 className="flex gap-[30px] text-[64px] text-title-3 leading-[95%">
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

          <Link
            href={"/servicios"}
            className="w-[175px] h-[45px] text-[22px] leading-[120%] tracking-[-2%] px-[15px] py-3 text-center font-semibold text-button-blue bg-button-active cut-corner"
          >
            Ver más
          </Link>
        </div>
      </section>

      {/* Portafolio */}
      <section className="w-[1280px] h-[870px] flex flex-col justify-center items-center gap-[30px] px-[80px] py-[50px]">
        <h2 className="text-[64px] leading-[95%] text-title-4 font-semibold">
          Portafolio
        </h2>
        <p className="text-3xl text-paragragraph-1">
          Conoce nuestros proyectos e inventario
        </p>

        <div className="w-[1118px] h-[537px] flex flex-row gap-[30px]">
          {/* Data */}
          <div className="">
            <div className="absolute w-[359px] h-[117px] bg-background-3 cut-corner translate-y-2 translate-x-1.5"></div>
            <h3 className="w-[359px] h-[117px] text-[40px] font-semibold text-button-blue tracking-wider text-left px-4 py-4 leading-10 bg-button-active cut-corner">
              Nave Industrial Guadalupe, NL.
            </h3>
          </div>
          {/* Carrousel */}
          <div className=""></div>
        </div>
      </section>
    </main>
  );
}
