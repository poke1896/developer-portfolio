import Link from "next/link";
import { WrapperProps } from "@/Types";
import { DiReact } from "react-icons/di";
import {  SiTypescript, SiNextdotjs } from 'react-icons/si';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


export default function Wrapper({ pageIndex, children, className }: WrapperProps) {
  const socialClassNames = "text-3xl cursor-pointer text-white";

  return (
    <section className={className}>
      <div className="fixed bottom-4 left-9 xs:text-3xl text-2xl text-Turquoise">
        0{pageIndex}
      </div>
      <>{children}</>

      {/* Footer */}
      <footer className="fixed bottom-4 right-4 flex items-center gap-4 text-white">
        <p className="text-sm">Portfolio made with</p>
        <DiReact className="text-3xl" />
        <SiNextdotjs className="text-3xl" />
        <SiTypescript className="text-3xl" />
      </footer>
      
      {/* Social Icons */}
      <div className="fixed top-16 left-9 hidden md:flex items-center flex-col gap-4">
        <Link href="https://github.com/poke1896" target="_blank">
          <AiFillGithub className={socialClassNames} />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <AiFillInstagram className={socialClassNames} />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank">
          <AiFillLinkedin className={socialClassNames} />
        </Link>
      </div>
    </section>
  );
}