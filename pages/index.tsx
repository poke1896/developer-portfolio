import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Valverde = () => {
  const text = "<Valverde>"; // Texto a animar
  const textVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.08, // Retardo entre cada letra
        delayChildren: 0.3, // Retardo inicial
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={textVariants}>
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Home = () => {
  const textVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.08, // Retardo entre cada letra
        delayChildren: 0.3, // Retardo inicial
      },
    },
  };

  const texts = ["A Back-end developer", "<coffee addict/>"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Valverde</title>
      </Head>
      <div className="relative h-screen">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/back3.png')",
            filter: "brightness(80%)",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center">
          <Wrapper pageIndex={1} className="max-w-2xl text-center">
            <div className="text-xl sm:text-3xl uppercase text-WhiteGray font-bold mt-64 mb-8">Hey, I&apos;m</div>
            <div className="h-2 w-full rounded-sm bg-Turquoise"></div>
            <div className="sm:text-[7.2rem] xs:text-7xl text-5xl text-White font-medium mt-4 mb-2">
              <Valverde />
            </div>
            <motion.div initial="hidden" animate="visible" variants={textVariants}>
              <motion.div
                key={texts[currentIndex]}
                variants={textVariants}
                className="uppercase font-bold xs:text-2xl text-xl text-Turquoise text-center mb-8"
              >
                {texts[currentIndex]}
              </motion.div>
            </motion.div>
            <hr className="mt-4 border-Turquoise w-3/4 mx-auto" />
            <div className="text-center mt-8 text-WhiteGray">
              Back-end-focused application developer skilled in building the back-end of websites and web applications that drive overall product success. I optimize performance and functionality by creating a robust and efficient back-end. Take your product to the next level with enhanced user experience and seamless operation.
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default Home;
