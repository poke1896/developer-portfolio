import React from 'react';
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import Skills from "@/components/Skills";
import { skills } from "@/Data/Data";


export default function Skill() {
    return (
        <>
            <Head>
                <title>Valverde | Skill</title>
            </Head>
            <Wrapper pageIndex={3}>
                <div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0">
                    <div className="w-full max-w-2xl">
                        <Skills skills={skills} />
                    </div>
                </div>
            </Wrapper>
        </>
    )
}