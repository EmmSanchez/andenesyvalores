import Image from "next/image";
import Link from "next/link";

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

          <Link
            href={"/servicios"}
            className="w-[175px] h-[45px] text-[22px] leading-[120%] tracking-[-2%] px-[15px] py-3 text-center font-semibold text-button-blue bg-button-active cut-corner active:bg-icons-orange"
          >
            Ver más
          </Link>
        </div>
      </section>

      {/* Portafolio */}
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

            {/* Carrousel */}
            <div className="w-[718px] h-[445px] border-solid border-[7.5px] border-button-active">
              <Image
                src={"/images/Home/portafolio-carrousel-1.jpg"}
                alt="Imagen del carrusel 1"
                width={718}
                height={485}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Flechas */}
          <div className="w-full flex justify-center items-center">
            <div className="w-[241px] flex justify-between">
              <button>
                <Image
                  src={"/icons/Home/flecha-izquierda-3x.svg"}
                  alt="Flecha izquierda"
                  width={28.4}
                  height={28.8}
                />
              </button>

              <div className="flex justify-center items-center gap-[15.5px]">
                <div className="w-[15.5px] h-[15.5px] rounded-full bg-icons-orange"></div>
                <div className="w-[15.5px] h-[15.5px] rounded-full bg-background-3"></div>
                <div className="w-[15.5px] h-[15.5px] rounded-full bg-background-3"></div>
                <div className="w-[15.5px] h-[15.5px] rounded-full bg-background-3"></div>
              </div>

              <button>
                <Image
                  src={"/icons/Home/flecha-derecha-3x.svg"}
                  alt="Flecha izquierda"
                  width={28.4}
                  height={28.8}
                />
              </button>
            </div>
          </div>
        </div>

        <Link
          href={"/servicios"}
          className="w-[175px] h-[45px] text-[22px] leading-[120%] tracking-[-2%] px-[15px] py-3 text-center font-semibold text-button-blue bg-button-active cut-corner active:bg-icons-orange"
        >
          Ver más
        </Link>
      </section>

      {/* Explore */}
      <section className="relative w-dvw h-[636px]">
        <video
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
            <Link
              href={"/servicios"}
              className="w-[263px] h-[45px] text-[22px] leading-[120%] tracking-[-2%] px-[15px] py-3 text-center font-semibold text-button-blue bg-button-active cut-corner active:bg-icons-orange"
            >
              Ver recorrido 360°
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
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

        <div className="flex justify-center items-center w-[1120px] h-[84px] gap-[24px]">
          <div className="h-[84px] flex justify-center items-center p-4">
            <Image
              src={"/logos/partners/logo-1.svg"}
              width={75}
              height={64}
              alt="Logo partner 1"
              className="h-[64px] w-[75px]"
            />
          </div>
          <div className="h-[84px] flex justify-center items-center p-4">
            <Image
              src={"/logos/partners/logo-2.svg"}
              width={220}
              height={64}
              alt="Logo partner 2"
              className="w-[220px] h-[64px]"
            />
          </div>
          <div className="h-[84px] flex justify-center items-center p-4">
            <Image
              src={"/logos/partners/logo-3.svg"}
              width={53}
              height={60}
              alt="Logo partner 3"
              className="w-[63px] h-[63px]"
            />
          </div>
          <div className="h-[84px] flex justify-center items-center p-4">
            <Image
              src={"/logos/partners/logo-4.svg"}
              width={205}
              height={64}
              alt="Logo partner 4"
              className="w-[205px] h-[64px]"
            />
          </div>
          <div className="h-[84px] flex justify-center items-center p-4">
            <Image
              src={"/logos/partners/logo-5.svg"}
              width={146}
              height={62}
              alt="Logo partner 5"
              className="w-[146px] h-[62px]"
            />
          </div>
        </div>
      </section>

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
