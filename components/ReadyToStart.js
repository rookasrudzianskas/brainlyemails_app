import React from 'react';

const ReadyToStart = () => {
    return (
        <div className="mt-36 px-72 py-20 rounded-2xl flex flex-col mx-24 max-w-screen-xl flex-grow bg-[#0059F7]">
            <div className="flex items-center flex-col">
                <h1 className="text-[#EBEBED] font-medium text-2xl mt-3 mb-3">READY TO START 🤷‍♂️</h1>
                <h2 className="text-[#EBEBED] font-medium text-6xl mb-5">Start Your Free Trail Today!</h2>
                <p className="text-[#EBEBED] px-14 py-4 bg-[#689EFF] rounded-lg font-normal text-xl cursor-pointer hover:bg-[#5886D9] duration-200ms">Get Started! ▶️</p>
            </div>
        </div>
    );
};

export default ReadyToStart;
