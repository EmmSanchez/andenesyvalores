import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute z-50 w-full flex justify-center">
      <div className="w-[1237.5px] flex justify-center items-center py-[35px] px-[50px] flex-wrap gap-[50px]">
        <Link href={"/"}>
          <Image
            src={"/logos/main/logo-navbar.svg"}
            alt="Navbar logo"
            width={120}
            height={38.44}
          />
        </Link>

        <Link
          href={"/nosotros"}
          className="flex justify-center items-center w-[153px] h-[45px] text-lg tracking-[-2%] font-semibold gap-[5px] text-button-blue bg-button-normal cut-corner hover:opacity-70"
        >
          <Image
            src={"/icons/Shared/icono-nosotros-navbar.svg"}
            width={15}
            height={15}
            alt="Ícono de nosotros"
          />
          <span>Nosotros</span>
        </Link>

        {/* Botón servicios */}
        <Link
          href={"/servicios"}
          className="flex justify-center items-center w-[153px] h-[45px] text-lg tracking-[-2%] font-semibold gap-[5px] text-button-blue bg-button-normal cut-corner hover:opacity-70"
        >
          <Image
            src={"/icons/Shared/icono-servicios-navbar.svg"}
            width={15}
            height={15}
            alt="Ícono de servicios"
          />
          <span>Servicios</span>
        </Link>

        {/* Botón portafolio */}
        <Link
          href={"/portafolio"}
          className="flex justify-center items-center w-[153px] h-[45px] text-lg tracking-[-2%] font-semibold gap-[5px] text-button-blue bg-button-normal cut-corner hover:opacity-70"
        >
          <Image
            src={"/icons/Shared/icono-portafolio-navbar.svg"}
            width={15}
            height={15}
            alt="Ícono de portafolio"
          />
          <span>Portafolio</span>
        </Link>

        {/* Botón blog */}
        <Link
          href={"/blog"}
          className="flex justify-center items-center w-[153px] h-[45px] text-lg tracking-[-2%] font-semibold gap-[5px] text-button-blue bg-button-normal cut-corner hover:opacity-70"
        >
          <Image
            src={"/icons/Shared/icono-blog-navbar.svg"}
            width={15}
            height={15}
            alt="Ícono de blog"
          />
          <span>Blog</span>
        </Link>

        {/* Botón contacto */}
        <Link
          href={"/contacto"}
          className="flex justify-center items-center w-[153px] h-[45px] text-lg tracking-[-2%] font-semibold gap-[5px] text-button-blue bg-button-normal cut-corner hover:opacity-70"
        >
          <Image
            src={"/icons/Shared/icono-contacto-navbar.svg"}
            width={15}
            height={15}
            alt="Ícono de contacto"
          />
          <span>Contacto</span>
        </Link>
      </div>
    </nav>
  );
}
