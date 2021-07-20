import Head from 'next/head'
import Header from "../components/Header";
import TopText from "../components/TopText";
import TopImage from "../components/TopImage";

export default function Home() {
  //   h-screen justify-between for making footer
  return (
    <div className="flex flex-col min-h-screen py-2 bg-[#070E27] ">
      <Head>
        <title>👋 Brainlyemails</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
<div className="max-w-screen-3xl">

        <Header />
        <TopText />
        <TopImage />
</div>


      {/*<footer className="flex items-center justify-center w-full h-24 border-t">*/}
      {/*  <a*/}
      {/*    className="flex items-center justify-center"*/}
      {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Powered by{' '} Rookas*/}
      {/*  </a>*/}
      {/*</footer>*/}
    </div>
  )
}
