import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function LogoMarquee() {
  return (
    <div className="w-dvw">
      <Marquee autoFill className="flex w-dvw h-[84px] gap-[24px]">
        <div className="h-[84px] flex items-center p-4">
          <Image
            src={"/logos/partners/logo-1.svg"}
            width={75}
            height={64}
            alt="Logo partner 1"
            className="h-[64px] w-[75px]"
          />
        </div>
        <div className="h-[84px] flex justify-center items-center p-4 ">
          <Image
            src={"/logos/partners/logo-2.svg"}
            width={220}
            height={64}
            alt="Logo partner 2"
            className="w-[220px] h-[64px]"
          />
        </div>
        <div className="h-[84px] flex justify-center items-center p-4 ">
          <Image
            src={"/logos/partners/logo-3.svg"}
            width={53}
            height={60}
            alt="Logo partner 3"
            className="w-[63px] h-[63px]"
          />
        </div>
        <div className="h-[84px] flex justify-center items-center p-4 ">
          <Image
            src={"/logos/partners/logo-4.svg"}
            width={205}
            height={64}
            alt="Logo partner 4"
            className="w-[205px] h-[64px]"
          />
        </div>
        <div className="h-[84px] flex justify-center items-center p-4 ">
          <Image
            src={"/logos/partners/logo-5.svg"}
            width={146}
            height={62}
            alt="Logo partner 5"
            className="w-[146px] h-[62px]"
          />
        </div>
      </Marquee>
    </div>
  );
}
