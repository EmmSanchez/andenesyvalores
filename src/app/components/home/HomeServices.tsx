import Image from "next/image";
import LinkButton from "../common/LinkButton";
import { title } from "process";

const services = [
  {
    title: "Comercialización y arrendamiento de propiedades",
    backgroundImage: "/images/Servicios/desarrollo-y-gestion.jpg",
    icon: "/icons/Home/servicio-1.svg",
  },
  {
    title: "Administración de activos inmobiliarios",
    backgroundImage:
      "/images/Servicios/administracion-de-activos-inmobiliarios.jpg",
    icon: "/icons/Home/servicio-2.svg",
  },
  {
    title: "Desarrollo de nuevos proyectos",
    backgroundImage: "/images/Servicios/administracion-de-activos.jpg",
    icon: "/icons/Home/servicio-3.svg",
  },
  {
    title: "Asesoría e inversión inmobiliaria",
    backgroundImage: "/images/Servicios/asesoria-e-inversion-inmobiliaria.jpg",
    icon: "/icons/Home/servicio-4.svg",
  },
];

export default function HomeServices() {
  return (
    <>
      <section className="w-full flex justify-center items-center bg-background-3">
        <div className="flex flex-col justify-center items-center w-7xl h-[492px] px-[80px] py-[50px] gap-[30px]">
          <h2 className="flex gap-[30px] text-[64px] text-title-3 leading-[95%] tracking-wide">
            Nuestros{" "}
            <span className="text-title-4 font-semibold">Servicios</span>
          </h2>

          <div className="flex flex-row gap-[15px]">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className={`relative flex flex-wrap justify-center items-center gap-[15px] px-2.5 py-[30px] bg-[url(${service.backgroundImage})] bg-background-2/70`}
                >
                  <div className="w-full h-full flex flex-col justify-around items-center gap-2.5">
                    <Image
                      src={service.icon}
                      width={69}
                      height={60}
                      alt={service.title}
                    />
                    <p className="w-[248px] text-[24px] leading-[111%] font-semibold text-center text-paragragraph-2">
                      {service.title}
                    </p>
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

          <LinkButton
            title="Ver más"
            href="/servicios"
            className="w-[175px] h-[45px]"
          />
        </div>
      </section>
    </>
  );
}
