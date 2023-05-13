import Head from "next/head";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { projects } from "@/Data/Data";

export default function Portfolio() {

  return (
    <>
      <Head>
        <title>Valverde | Portfolio</title>
      </Head>
    <Wrapper pageIndex={3}> Home</Wrapper></>
  )
}
