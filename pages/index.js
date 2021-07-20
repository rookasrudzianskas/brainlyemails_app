import Head from 'next/head'
import Header from "../components/Header";
import TopText from "../components/TopText";
import TopImage from "../components/TopImage";
import TrustedBy from "../components/TrustedBy";
import FiveClicks from "../components/FiveClicks";
import ProductCards from "../components/ProductCards";
import ReadyToStart from "../components/ReadyToStart";
import TwoSideCards from "../components/TwoSideCards";
import PricingCards from "../components/PricingCards";
import CTA from "../components/CTA";

export default function Home() {
  //   h-screen justify-between for making footer
  return (
    <div className="flex flex-col min-h-screen py-2 bg-[#070E27] ">
      <Head>
        <title>👋 Brainlyemails</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
        <Header />
<   div className="items-center flex flex-col">

        <TopText />
        <div className="flex items-center flex-col border-b-2 border-[#1E294E]">
            <TopImage />
            <TrustedBy />
        </div>

    <FiveClicks />
    <ProductCards />
    <div className=" max-w-full	">>
    <ReadyToStart />
    </div>
    <div className="flex items-center flex-col mt-32">>
        <h2 className="text-[#7E8BB6] font-medium text-xl mt-3 mb-3">BRAINLYEMAILS</h2>
        <h1 className="text-[#EBEBED] font-medium text-6xl mt-3 mb-3">How does it work?</h1>
    </div>

    <TwoSideCards />

    <div className="flex items-center flex-col mt-32">
        <h2 className="text-[#7E8BB6] font-medium text-xl mt-3 mb-3">BRAINLYEMAILS</h2>
        <h1 className="text-[#EBEBED] font-medium text-6xl mt-3 mb-12">Pricing</h1>
    </div>

    <div className="border-b-2 border-[#1E294E]">
    <PricingCards />
    </div>

    </div>
        <div>
            <CTA />
        </div>
    {/*<hr className="divide-y border-light-blue-500"/>*/}

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
