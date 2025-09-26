import Image from "next/image";
import LinkButton from "./LinkButton";

export default function ContactForm() {
  return (
    <form className="w-full h-[463px] flex flex-col justify-between gap-[30px] flex-1">
      <label htmlFor="name" className="flex items-center w-full">
        <span className="flex items-center justify-end size-[50px] bg-white">
          <Image
            src={"/icons/Shared/icono-usuario.svg"}
            width={20}
            height={22.76}
            alt="Icono de usuario"
            className="w-[20px] h-[22.76px]"
          />
        </span>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          className="w-full h-[50px] pr-[30px] pl-4 py-[10px] text-2xl bg-white text-button-blue placeholder:text-button-blue outline-none focus:placeholder:text-transparent"
        />
      </label>

      <label htmlFor="mail" className="flex items-center w-full">
        <span className="flex items-center justify-end size-[50px] bg-white">
          <Image
            src={"/icons/Shared/icono-correo.svg"}
            width={24}
            height={24}
            alt="Icono de correo"
            className="w-[24px] h-[24px]"
          />
        </span>
        <input
          id="mail"
          type="email"
          placeholder="Correo"
          className="w-full h-[50px] pr-[30px] pl-4 py-[10px] text-2xl bg-white text-button-blue placeholder:text-button-blue outline-none focus:placeholder:text-transparent"
        />
      </label>

      <label htmlFor="phone" className="flex items-center w-full">
        <span className="flex items-center justify-end size-[50px] bg-white">
          <Image
            src={"/icons/Shared/icono-tel.svg"}
            width={24}
            height={24}
            alt="Icono de teléfono"
            className="w-[24px] h-[24px]"
          />
        </span>
        <input
          id="phone"
          type="tel"
          placeholder="Teléfono"
          className="w-full h-[50px] pr-[30px] pl-4 py-[10px] text-2xl bg-white text-button-blue placeholder:text-button-blue outline-none focus:placeholder:text-transparent"
        />
      </label>

      <label htmlFor="message" className="flex items-center w-full">
        <span className="flex items-start justify-end w-[50px] h-[148px] pt-[12px] bg-white">
          <Image
            src={"/icons/Shared/icono-mensaje.svg"}
            width={24}
            height={24}
            alt="Icono de mensaje"
            className="w-[24px] h-[24px]"
          />
        </span>
        <textarea
          id="message"
          placeholder="Mensaje"
          className="w-full h-[148px] pr-[30px] pl-4 py-[10px] text-2xl bg-white text-button-blue placeholder:text-button-blue outline-none focus:placeholder:text-transparent placeholder:h-full resize-none"
        />
      </label>

      <LinkButton title="Enviar" href="/" className="w-[175px] h-[45px]" />
    </form>
  );
}
