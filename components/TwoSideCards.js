import React from 'react';

const TwoSideCards = () => {
    return (
        <div className="flex flex-row mx-24 mt-14 max-w-screen-lg justify-items-center items-center">
            <div className="flex flex-col max-w-md">
                <p className="text-[#EBEBED] font-medium text-5xl mt-3 mb-3">Stress‑free email delivery</p>
                <p className="text-[#7E8BB6] text-lg">You’ll appreciate our robust email delivery that has been battle-tested by giants like Netflix, Stripe, Coinbase, HBO, Vodafone for almost a decade.</p>
            </div>

            <div>
                <img className="ml-10" src="https://www.brainlyemails.com/assets/img/gallery/comment1.png" alt=""/>
            </div>
        </div>
    );
};

export default TwoSideCards;
