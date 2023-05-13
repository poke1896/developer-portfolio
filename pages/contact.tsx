import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { contacts } from "@/Data/Data";
import { FormEvent } from "react";
export default function contact() {
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <>
      <Head>
        <title>Valverde | Contact</title>
      </Head>

    <Wrapper pageIndex={5}> Home</Wrapper></>
  )
}
