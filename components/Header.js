import React from 'react';

const Header = () => {
    return (
        <div className=" sticky top-0 z-50 flex items-center justify-between">
            <div className="flex w-28 h-10 mt-8 ml-20 mb-5 ">
                <img src="https://www.brainlyemails.com/assets/img/gallery/logo1.png" alt=""/>
            </div>

            <div className="flex mt-8 mr-20 mb-5 ">
                <p>Join now!</p>
            </div>
        </div>
    );
};

export default Header;
