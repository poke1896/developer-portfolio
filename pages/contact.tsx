import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Wrapper from '@/components/Wrapper';
import { contacts } from '@/Data/Data';
import { FormEvent } from 'react';
import { HiPhone, HiOutlineMail, HiLocationMarker } from "react-icons/hi"

export default function Contact() {
  const [animatedTitle, setAnimatedTitle] = useState('');
  const [showFullTitle, setShowFullTitle] = useState(false);

  useEffect(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const textLength = 7;

    const generateRandomText = () => {
      const randomText = Array.from({ length: textLength }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length))
      ).join('');

      setAnimatedTitle(randomText);
    };

    const intervalId = setInterval(generateRandomText, 50);

    setTimeout(() => {
      clearInterval(intervalId);
      setShowFullTitle(true);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const contactVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Agrega tu lógica de envío de formulario aquí
  }

  return (
    <>
      <Head>
        <title>Valverde | Contact</title>
      </Head>
      <Wrapper
        pageIndex={5}
        className="text-White gap-12 flex flex-col justify-center items-center lg:flex-row pt-28 lg:pt-0"
      >
        <motion.div
          variants={contactVariants}
          initial="hidden"
          animate="visible"
          className="md:px-6 py-6 text-center"
        >
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold">
            {showFullTitle ? 'Contact' : animatedTitle}
          </div>
          <p className="leading-8 mb-8 text-sm max-w-xl mt-10 text-WhiteGray">
            If you&apos;re seeking a talented backend developer to transform your web application concepts into reality, don&apos;t hesitate to reach out.
            I&apos;m available to explore how I can make valuable contributions to your team and ensure exceptional outcomes. Feel free to initiate a conversation,
            and let&apos;s uncover the possibilities together.
          </p>
          <div>
            {contacts.map((contact) => (
              <div className="mt-6" key={contact.id}>
                <div className="text-xl font-medium mb-2">{contact.title}</div>
                <div className="text-sm text-WhiteGray">{contact.text}</div>
              </div>

            ))}
            <div className="grid justify-center items-center text-white p-4 md:p-10">
              <div className="flex flex-row">
                <HiPhone className="text-white text-2xl mr-4" />
                <HiOutlineMail className="text-white text-2xl mr-4" />
                <HiLocationMarker className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={contactVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 sm:w-[30rem] px-6 text-center py-6 shadow-ShadowBlur"
        >
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold mb-10">
            Contact Form
          </div>
          <form onSubmit={submitHandler}>
            <motion.div variants={contactVariants} className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Name"
              />
            </motion.div>
            <motion.div variants={contactVariants} className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Phone"
              />
            </motion.div>
            <motion.div variants={contactVariants} className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="email"
                className="appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Email"
              />
            </motion.div>
            <motion.div variants={contactVariants} className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Message"
              />
            </motion.div>
            <motion.button
              type="submit"
              variants={contactVariants}
              className="mt-10 px-8 py-4 shadow-ShadowBlur uppercase text-sm cursor-pointer"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </Wrapper>
    </>
  );
}
