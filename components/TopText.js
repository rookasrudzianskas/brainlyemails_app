import React from 'react';

const TopText = () => {
    return (
        <div className="flex flex-col mx-24 mt-16 lg:mt-8 max-w-screen-xl justify-items-center md:flex-row lg:mt-36">
            <div>
                <h1 className="text-[#EBEBED] text-6xl font-bold leading-tight max-w-screen-md md:leading-tight lg:text-7xl lg:leading-tight">The new era of smart emails platform 👨‍💻</h1>
            </div>

            <div>
                <div>
                    <h2 className="text-white text-2xl text-[#7E8BB6] mb-6  mt-5">Here’s why 🚀</h2>
                </div>
                <div className="max-w-screen-md">
                    <h3 className="text-white text-lg mb-8 text-[#7E8BB6] ">Brainlyemails comes packed with templates for any scenario and functionality to let you hit the ground running — in minutes. Meaning, you get to focus on what you do best, while your whole email game is as simple as making a cup of coffee. 🤙</h3>
                </div>
                <div className=" flex max-w-xs items-center justify-items-center">
                    <p className="text-white text-xl p-4 bg-[#0059F7] px-12 rounded-lg">Start Now!</p>
                </div>
            </div>
        </div>
    );
};

export default TopText;
