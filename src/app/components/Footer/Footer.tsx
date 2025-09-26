import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    title: "Instagram",
    icon: "/icons/Shared/icono-instagram.svg",
    url: "instagram.com",
  },
  {
    title: "Facebook",
    icon: "/icons/Shared/icono-facebook.svg",
    url: "facebook.com",
  },
  {
    title: "LinkedIn",
    icon: "/icons/Shared/icono-linkedin.svg",
    url: "linkedin.com",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background-2 flex justify-center border-t-[1px] border-solid border-white/15">
      <div className="w-full max-w-7xl flex px-16 gap-24">
        <div className="flex w-full justify-between py-[50px]">
          {/* Bloque izquierdo */}
          <div className="flex flex-col items-start gap-[30px]">
            <Image
              src={"/logos/main/andenes-text-logo-white.svg"}
              alt="Logo Andenes y Valores"
              width={178.5}
              height={57.18}
              className="w-[178.5px] h-[57.18px]"
            />

            <div className="flex flex-col text-paragragraph-2 text-lg gap-1">
              <address className="not-italic">
                123 Candyland Lane, Suite 123 Los Angeles, CA 94117
              </address>
              <small className="text-lg">
                Jones & Brown Legal © 2025 All Rights Reserved
              </small>
              <div className="flex items-center gap-[15px]">
                <span className="font-semibold tracking-wider">
                  Desarrollador por:
                </span>
                <Image
                  src={"/logos/partners/xperience-group.svg"}
                  alt="Experience Group Logo"
                  width={128}
                  height={33}
                />
              </div>
            </div>

            <nav className="mt-2 text-[16px]">
              <Link
                href="/aviso-de-privacidad"
                className="text-paragragraph-2 underline"
              >
                Aviso de privacidad
              </Link>
            </nav>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col justify-start items-end h-[206px] text-title-2 gap-6">
            <h2 className="text-4xl font-semibold tracking-wider">
              Contáctanos
            </h2>

            <p className="flex text-xl tracking-wide underline gap-2 items-center">
              <span>
                <Image
                  src={"/icons/Shared/icono-correo-verde.svg"}
                  alt="Icono de correo verde"
                  width={20}
                  height={14}
                />
              </span>
              <Link href={"mailto:info@andenesyvalores.com"}>
                info@andenesyvalores.com
              </Link>
            </p>

            <p className="flex text-xl tracking-wide gap-2 items-center">
              <span>
                <Image
                  src={"/icons/Shared/icono-tel-verde.svg"}
                  alt="Icono de telefono verde"
                  width={20}
                  height={20}
                />
              </span>
              <Link href={"tel:+528125760000"}>+52 81 2576 0000</Link>
            </p>

            <div className="flex flex-row gap-6">
              {socials.map((social, index) => {
                return (
                  <Link key={index} href={social.url}>
                    <Image
                      src={social.icon}
                      alt={social.title}
                      width={24}
                      height={24}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
