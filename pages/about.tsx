import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { skills } from "@/Data/Data";

export default function about() {
  return (
    <>
      <Head>
        <title>Valverde | About</title>
      </Head>

    <Wrapper pageIndex={2}> Home</Wrapper></>
  )
}
