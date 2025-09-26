import Link from "next/link";
interface LinkButtonProps {
  title: string;
  href: string;
  className?: string;
}

export default function LinkButton({
  title,
  href,
  className = "",
}: LinkButtonProps) {
  return (
    <>
      <Link
        href={href}
        className={`text-[22px] leading-[120%] tracking-[-2%] px-[15px] py-3 text-center font-semibold text-button-blue bg-button-active cut-corner hover:opacity-70 active:bg-icons-orange ${className} transition-colors`}
      >
        {title}
      </Link>
    </>
  );
}
