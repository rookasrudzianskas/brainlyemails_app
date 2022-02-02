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
import Footer from "../components/Footer";

export default function Home() {
  //   h-screen justify-between for making footer
  return (
    <div className="flex flex-col py-2 bg-black h-screen ">
      <Head>
        <title>👋 Brainlyemails</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
        <div className="flex flex-col md:ml-24">
        <Header />


        </div>


        <div className="w-full flex items-center justify-center mt-36 flex flex-col">
            <h1 className="text-5xl font-bold text-gray-100 xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl">Brainlyemails</h1>
            <h2 className="text-xl font-bold text-gray-100 mt-10 xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl">Already live in the USA, Coming in the Europe, in just 7 days!</h2>
        </div>





{/*<   div className="items-center flex flex-col mx-0">*/}
{/*        <TopText />*/}

{/*        <div className="flex items-center flex-col border-b-2 border-[#1E294E]">*/}
{/*            <TopImage />*/}
{/*            <TrustedBy />*/}
{/*        </div>*/}

{/*    <FiveClicks />*/}
{/*    <ProductCards />*/}
{/*    <div className=" max-w-full	">>*/}
{/*    <ReadyToStart />*/}
{/*    </div>*/}
{/*    <div className="flex items-center flex-col mt-32">*/}
{/*        <h2 className="text-[#7E8BB6] font-medium text-xl mt-3 mb-3">BRAINLYEMAILS</h2>*/}
{/*        <h1 className="text-[#EBEBED] font-medium text-6xl mt-3 mb-3">How does it work?</h1>*/}
{/*    </div>*/}

{/*    <div className="">>*/}
{/*        <TwoSideCards />*/}
{/*    </div>*/}
{/*    <div className="flex items-center flex-col mt-32">*/}
{/*        <h2 className="text-[#7E8BB6] font-medium text-xl mt-3 mb-3">BRAINLYEMAILS</h2>*/}
{/*        <h1 className="text-[#EBEBED] font-medium text-6xl mt-3 mb-12">Pricing</h1>*/}
{/*    </div>*/}

{/*    <div className="border-b-2 border-[#1E294E]">*/}
{/*    <PricingCards />*/}
{/*    </div>*/}

{/*    </div>*/}
{/*        <div>*/}
{/*            <CTA />*/}
{/*        </div>*/}
{/*    /!*<hr className="divide-y border-light-blue-500"/>*!/*/}

{/*      /!*<footer className="flex items-center justify-center w-full h-24 border-t">*!/*/}
{/*       <Footer />*/}
{/*      /!*</footer>*!/*/}
    </div>
  )
}
