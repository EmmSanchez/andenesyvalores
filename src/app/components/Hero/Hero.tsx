import Image from "next/image";

interface HeroProps {
  video?: string;
  children: React.ReactNode;
}

export default function Hero({ video, children }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center gap-[50px] text-center">
        {children}
      </div>

      <video
        autoPlay
        loop
        muted
        preload="auto"
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
}
