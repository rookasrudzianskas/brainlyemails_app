import React from 'react';

const ReadyToStart = () => {
    return (
        <div className="mt-36 px-42 py-5 rounded-2xl flex flex-col mx-24 max-w-screen-xl flex-grow bg-[#0059F7] md:px-72">
        {/*<div className="mt-36 px-72 py-5 rounded-2xl flex flex-col mx-24 max-w-screen-xl flex-grow bg-[#0059F7]">*/}
            {/*<div className="flex items-center flex-col">*/}
            {/*    <h1 className="text-[#6D9AF3] font-medium text-2xl mt-3 mb-3">READY TO START 🤷‍♂️</h1>*/}
            {/*    <h2 className="text-[#EBEBED] font-medium text-5xl mb-10">Start Your Free Trial Today!</h2>*/}
            {/*    <p className="text-[#EBEBED] px-14 py-4 bg-[#689EFF] rounded-lg font-normal text-xl cursor-pointer hover:bg-[#5886D9] duration-200ms">Get Started! ▶️</p>*/}
            {/*</div>*/}


            <div className="">
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-[#6D9AF3] font-medium text-2xl mt-3 mb-3">
            <span className="block  mb-5">
                READY TO START 🤷‍♂️

            </span>
                        <span className="block text-[#EBEBED] font-medium text-5xl mb-10">
                Start Your Free Trial Today It's today or never ever!
            </span>
                    </h2>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <p className="text-[#EBEBED] ml-10 px-14 py-4 bg-[#689EFF] rounded-lg font-normal text-xl cursor-pointer hover:bg-[#5886D9] duration-200ms">Get Started!</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReadyToStart;
