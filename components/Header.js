import React from 'react';

const Header = () => {
    return (
        <div className=" sticky top-0 z-50 flex items-center justify-between sm:flex flex-col">
            <div className="flex w-28 h-10 mt-8 ml-18 mb-5 ">
                <img src="/images/img_14.png" alt=""/>
            </div>

            <div className="flex mt-8 mr-28 mb-5  ml-36">
                <p className="px-12 py-4 text-white rounded-lg bg-[#131B3A] font-medium">Join now! It's live 🚀</p>
            </div>
        </div>
    );
};

export default Header;
