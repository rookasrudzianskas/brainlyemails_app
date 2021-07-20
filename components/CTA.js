import React from 'react';

const CTA = () => {
    return (
        <div className=" m-auto mt-32 max-w-screen-xl">

            <div className="bg-[#0059F7] rounded-xl dark:bg-gray-800 ">
                <div
                    className="lg:flex leading-tight	 lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-[#6D9AF3] font-medium text-2xl mt-3 mb-3">
            <span className="block mb-5 ">
                READY TO START ?
            </span>
                        <span className="block text-[#EBEBED] font-medium text-5xl mb-10">
                It&#x27;s today or never. Start Your Adventure with Us Today! Join Now ▶️

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

export default CTA;
