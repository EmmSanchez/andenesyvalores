import ContactForm from "../common/ContactForm";

export default function HomeContact() {
  return (
    <section className="w-full h-[715px] flex flex-col justify-center items-center bg-background-2">
      <div className="w-[1280px] flex flex-col justify-center items-center gap-[30px] py-[50px]">
        <h2 className="w-[1180px] h-[122px] flex flex-col text-[64px] text-center tracking-wide leading-[105%] text-title-2">
          Tu historia merece ser contada{" "}
          <span className="text-title-4 font-semibold">Contáctanos</span>
        </h2>

        <div className="w-[1280px] h-[463px] flex justify-center items-center gap-[15px]">
          <div className="w-[456.2px] h-[453.52] box p-5">
            <h3 className="w-full h-full pt-16 flex flex-col text-[64px] text-right font-bold tracking-wide leading-[105%] text-title-2">
              <span className="text-title-4">JUNTOS</span>
              CREAMOS
              <span className="text-title-4">FUTUROS.</span>
            </h3>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
