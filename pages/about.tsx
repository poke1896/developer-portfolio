import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";

export default function About() {
  const [text, setText] = useState("");

  useEffect(() => {
    const fullText = "Designer and BackEnd Developer, based on Costa Rica";
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex === fullText.length) {
        clearInterval(intervalId);
      }

      setText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Valverde | About</title>
      </Head>
      <Wrapper pageIndex={2}>
        <div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0">
          <Image
            src={"/image/photo.jpg"}
            width={300}
            height={300}
            alt={"about image"}
            style={{ borderRadius: "10px" }}
          />
          <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
            <div className="uppercase font-semibold text-sm text-WhiteGray">
              - Introduction
            </div>
            <motion.div
              className="font-semibold text-3xl mt-8 text-White uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {text}
            </motion.div>
            <p className="text-WhiteGray text-sm mt-8 leading-7">
              Hi! I'm Adrian, a passionate back-end programmer and a student of Systems Engineering at the University of Hispanoamerica. Currently, I am studying at the University of Costa Rica to expand my knowledge in the field of computer science. I love designing and building robust and efficient systems that power web applications and services. I have experience with languages such as Java, C++, and Python, and I have worked with popular frameworks like Reactjs, Next.js, and SQL. I am an organized individual with great attention to detail, and I value teamwork and collaboration. I am excited to contribute to innovative and challenging projects as part of your team!
            </p>
            <div className="flex gap-8 mt-8">
              <Link href="/contact">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-Turquoise font-semibold text-sm uppercase hover:underline cursor-pointer"
                >
                  Contact Me
                </motion.div>
              </Link>
              <Link href="/portfolio">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-Turquoise font-semibold text-sm uppercase hover:underline cursor-pointer"
                >
                  Portfolio
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
