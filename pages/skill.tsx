import React from 'react';
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import Skills from "@/components/Skills";
import { skills } from "@/Data/Data";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTypescript, SiReact } from "react-icons/si";


export default function Skill() {
    return (
        <>
            <Head>
                <title>Valverde | Skill</title>
            </Head>
            <Wrapper pageIndex={3}>
                <div className="flex justify-center items-center h-screen">
                    <div className="w-full max-w-2xl">
                        <Skills skills={skills} />
                        <div className="flex justify-center items-center mt-4">

                            <AiOutlineHtml5 size={32} className="mr-4" />

                            <SiTypescript size={32} className="mr-4" />
                            <SiReact size={32} className="mr-4" />

                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}