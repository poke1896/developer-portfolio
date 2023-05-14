import Link from "next/link";
import { WrapperProps } from "@/Types";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Wrapper({pageIndex,children,className}: WrapperProps) {
  const socialClassNames = "text-3xl cursor-pointer text-White"
  return(
    <section className={className}>
      <div className="fixed top-4 left-9 xs:text-3xl text-2xl text-Turquoise">
        0{pageIndex}
      </div>
      <>{children}</>

      <div className="fixed top-16 left-9 hidden md:flex items-center flex-col gap-4">
        <Link href={"https://github.com/poke1896"} target={"_blank"}>
          <AiFillGithub className={socialClassNames} />
        </Link>
        <Link href={"https://www.instagram.com"} target={"_blank"}>
          <AiFillInstagram className={socialClassNames} />
        </Link>
        <Link href={"https://www.Linkedin.com"} target={"_blank"}>
          <AiFillLinkedin className={socialClassNames} />
        </Link>
      </div>
      
    </section>
  )
}