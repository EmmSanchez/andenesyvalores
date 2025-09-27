import Hero from "../components/Hero/Hero";
import { VIDEOS } from "../constants/videos";
import Image from "next/image";

const values = [
  {
    title: "Integridad:",
    description: "Honestidad y transparencia en todas nuestras operaciones.",
    backgroundImage: "/images/Nosotros/integridad.jpg",
    icon: "/icons/Nosotros/integridad.svg",
  },
  {
    title: "Compromiso:",
    description: "Cumplir y superar las expectativas de clientes y aliados.",
    backgroundImage: "/images/Nosotros/compromiso.jpg",
    icon: "/icons/Nosotros/compromiso.svg",
  },
  {
    title: "Innovación:",
    description: "Mejorar continuamente nuestros procesos y soluciones.",
    backgroundImage: "/images/Nosotros/innovacion.jpg",
    icon: "/icons/Nosotros/innovacion.svg",
  },
  {
    title: "Excelencia:",
    description: "Altos estándares de calidad en cada etapa.",
    backgroundImage: "/images/Nosotros/excelencia.jpg",
    icon: "/icons/Nosotros/excelencia.svg",
  },
  {
    title: "Responsabilidad social:",
    description: "Aportar al bienestar y desarrollo sostenible.",
    backgroundImage: "/images/Nosotros/social.jpg",
    icon: "/icons/Nosotros/social.svg",
  },
  {
    title: "Trabajo en equipo:",
    description: "Colaborar con respeto, confianza y visión conjunta.",
    backgroundImage: "/images/Nosotros/equipo.jpg",
    icon: "/icons/Nosotros/equipo.svg",
  },
];

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

      <main className="w-full flex flex-col justify-center items-center">
        <div className="max-w-7xl">
          {/* Historia */}
          <section className="flex w-full justify-center items-center h-[672px] px-20 py-[50px]">
            <div className="w-full h-full flex flex-col gap-[30px]">
              <h3 className="text-center text-[64px] leading-[95%] font-semibold text-title-4">
                Historia
              </h3>
              <p className="flex flex-col w-[1120px] text-paragragraph-1 text-[30px] text-justify tracking-wide gap-5 leading-[120%]">
                <span>
                  <span className="font-bold">Andenes y Valores</span> nace del
                  legado inmobiliario de una familia con más de 15 años de
                  experiencia en adquisición, análisis y desarrollo de terrenos.
                </span>
                <span>
                  Hoy evolucionamos como desarrolladora inmobiliaria integral,
                  con la capacidad de atender proyectos industriales,
                  comerciales, corporativos y de usos mixtos.
                </span>
              </p>

              <div className="flex flex-row gap-[30px]">
                <div className="flex flex-1 flex-col gap-[15px]">
                  <div className="absolute w-[186px] h-[59px] bg-background-3 cut-corner translate-y-1.5 translate-x-1"></div>
                  <h3 className="w-[186px] h-[59px] text-[40px] text-center font-semibold text-paragragraph-1 bg-button-active cut-corner">
                    Misión
                  </h3>
                  <p className="flex-1 text-[25px] text-paragragraph-1 text-left">
                    Brindar soluciones inmobiliarias integrales con un enfoque
                    humano y profesional, centradas en las necesidades de cada
                    cliente y en la generación de valor sostenible.
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-[15px]">
                  <div className="absolute w-[186px] h-[59px] bg-background-3 cut-corner translate-y-1.5 translate-x-1"></div>
                  <h3 className="w-[186px] h-[59px] text-[40px] text-center font-semibold text-paragragraph-1 bg-button-active cut-corner shadowClone">
                    Visión
                  </h3>
                  <p className="flex-1 text-[25px] text-paragragraph-1 text-left">
                    Consolidarnos como una desarrolladora inmobiliaria
                    reconocida en la región por su ética, compromiso e
                    innovación, construyendo relaciones duraderas y
                    contribuyendo al desarrollo de comunidades.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Valores */}
        <div className="flex flex-col w-full justify-center items-center h-[717px] bg-background-3">
          <section className="w-full max-w-7xl h-full flex flex-col justify-center items-center gap-[30px]">
            <h3 className="text-center text-[64px] leading-[95%] font-semibold text-title-4">
              Valores
            </h3>

            <div className="grid grid-cols-3 gap-[30px]">
              {values.map((service, index) => {
                return (
                  <div
                    key={index}
                    className={`relative flex flex-wrap justify-center items-center gap-[15px] w-[268px] h-[248px] px-2.5 py-[30px] bg-background-2/50`}
                  >
                    <div className="w-full h-full flex flex-col justify-around items-center gap-2.5">
                      <Image
                        src={service.icon}
                        width={69}
                        height={60}
                        alt={service.title}
                      />
                      <div className="flex flex-col w-[248px]">
                        <h4 className="w-[248px] text-[22px] leading-[111%] font-bold text-center tracking-wider text-paragragraph-2">
                          {service.title}
                        </h4>
                        <p className="text-center text-[20px] text-paragragraph-2">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Background Image */}
                    <Image
                      src={service.backgroundImage}
                      alt={service.title}
                      fill
                      className="absolute -z-50 object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
