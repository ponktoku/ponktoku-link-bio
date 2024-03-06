import { ReactNode } from "react";

type ButtonProps = {
  buttonText: string;
  href: string;
  icon?: ReactNode;
};

export default function Button({ buttonText, href, icon }: ButtonProps) {
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#2B2B2B] text-center hover:shadow-lg hover:shadow-[#E1E05B]/40 w-[300px] md:w-[500px] opacity-90 p-3 rounded-full 
        border-white border-2 hover:text-[#2B2B2B] hover:border-[#E1E05B] hover:bg-[#E1E05B]"
      >
        {icon && <span className="inline-block mr-2 align-middle">{icon}</span>}
        <button>{buttonText}</button>
      </a>
    </>
  );
}
