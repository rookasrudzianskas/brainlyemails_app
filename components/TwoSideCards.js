import React from 'react';

const TwoSideCards = () => {
    return (
        <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row mx-24 mb-12 mt-14 max-w-screen-lg justify-items-center items-center">
            <div className="flex flex-col max-w-md">
                <p className="text-[#EBEBED] font-medium text-5xl mt-3 mb-3">Stress‑free email delivery</p>
                <p className="text-[#7E8BB6] text-lg">You’ll appreciate our robust email delivery that has been battle-tested by giants like Netflix, Stripe, Coinbase, HBO, Vodafone for almost a decade.</p>
            </div>
            <div className="order-first sm:order-none">
                <img className="ml-0 my-10 sm:ml-10" src="/images/img_11.png" alt=""/>
            </div>

        </div>

        <div className="flex flex-col sm:flex-row mx-24 mb-12 mt-14 max-w-screen-lg justify-items-center items-center">
            <div className="order-first sm:order-none">>
                <img className=" my-10 sm:ml-10" src="/images/img_12.png" alt=""/>
            </div>
            <div className="ml-16 flex flex-col max-w-md">
                <p className="text-[#EBEBED] font-medium text-5xl mt-3 mb-3">UNDER THE HOOD</p>
                <p className="text-[#7E8BB6] text-lg">Brainlyemails is built upon Google’s CLOUD infrastructure and uses Google’s mail servers, which means highly reliable email delivery that scales extremely well.</p>
            </div>
        </div>

            <div className="flex flex-col sm:flex-row  mx-24 mb-12 mt-14 max-w-screen-lg justify-items-center items-center">
                <div className="flex flex-col max-w-md">
                    <p className="text-[#EBEBED] font-medium text-5xl mt-3 mb-3">Plug’n’play with Stripe</p>
                    <p className="text-[#7E8BB6] text-lg">Import your customers' emails from Stripe into Brainlyemails with one click, no code required. After that, you can automate sending of emails that help convert, engage, prevent churn & more.</p>
                    <div className="ml-10">
                        <ol className="list-none mb-2 mt-5 text-[#7E8BB6]">
                            <li>🚀 Always up-to-date data</li>
                        </ol>

                        <ol className="list-none mb-2 text-[#7E8BB6]">
                            <li>🚀 One click import</li>
                        </ol>

                        <ol className="list-none mb-2 text-[#7E8BB6]">
                            <li>🚀 The fastest way to get started</li>
                        </ol>
                    </div>
                </div>
                <div  className="order-first sm:order-none">
                    <img className="ml-0 my-10 sm:ml-10" src="/images/img_13.png" alt=""/>
                </div>

            </div>

        </div>


    );
};

export default TwoSideCards;
