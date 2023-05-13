import Wrapper from "@/components/Wrapper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Valverde</title>
      </Head>
      <div className="relative h-screen">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/back.jpg')",
            filter: "brightness(20%)", // Se aplica un filtro de brillo para oscurecer la imagen más
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-95 flex flex-col justify-center items-center">
          <Wrapper pageIndex={1} className="max-w-2xl text-center">
            <div className="text-xl sm:text-3xl uppercase text-WhiteGray font-bold mt-64 mb-8">Hey, I&apos;m</div>
            <div className="h-2 w-full rounded-sm bg-Turquoise"></div>
            <div className="sm:text-[7.2rem] xs:text-7xl text-5xl text-White font-medium mt-4 mb-2">Valverde</div>
            <div className="uppercase font-bold xs:text-2xl text-xl text-Turquoise text-center mb-8">A Back-end developer</div>
            <hr className="mt-4 border-Turquoise w-3/4 mx-auto" />
            <div className="text-center mt-8 text-WhiteGray">Back-end-focused application developer skilled in building the back-end of websites and web applications that drive overall product success. I optimize performance and functionality by creating a robust and efficient back-end. Take your product to the next level with enhanced user experience and seamless operation.</div>
          </Wrapper>
        </div>
      </div>
    </>
  );
}


