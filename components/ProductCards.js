import React from 'react';

const ProductCards = () => {
    return (
        <div className="flex flex-row mx-24 mt-16 max-w-screen-xl justify-items-center">
        <div className="grid grid-rows-3 grid-flow-col gap-5">
            <div className="max2-w-xl py-12 px-14 flex items-left flex-col border-2 rounded-xl hover:bg-[#131B3A] duration-250 cursor-pointer border-[#1E294E]">
                <div>
                    <img src="/images/img_5.png" alt=""/>
                </div>
                <div>
                    <h2 className="text-[#EBEBED] font-medium text-2xl mt-3 mb-3">Send transactional emails via API ✉️</h2>
                </div>
                <div>
                    <h2 className="text-[#7E8BB6] text-lg">Start sending emails like password reset or welcome email from your application in just a few minutes — Brainlyemails makes it incredibly easy to create, deliver, maintain, and analyze beautiful transactional emails.</h2>
                </div>
            </div>

            <div className="max-2w-xl  py-12 px-14 flex items-left flex-col border-2 rounded-xl hover:bg-[#131B3A] duration-250 cursor-pointer border-[#1E294E]">
                <div>
                    <img src="/images/img_7.png" alt=""/>
                </div>
                <div>
                    <h2 className="text-[#EBEBED] font-medium text-2xl mt-3 mb-3">Send product updates & newsletters 📰</h2>
                </div>
                <div>
                    <h2 className="text-[#7E8BB6] text-lg">Send product update emails (newsletters) and let your users know what’s new in your product with Messenger. It’s as easy as sending an email directly from your Gmail account, except you can send to all users and see the stats.</h2>
                </div>
            </div>

            <div className="max-2w-xl  py-12 px-14 flex items-left flex-col border-2 rounded-xl hover:bg-[#131B3A] duration-250 cursor-pointer border-[#1E294E]">
                <div>
                    <img src="/images/img_9.png" alt=""/>
                </div>
                <div>
                    <h2 className="text-[#EBEBED] font-medium text-2xl mt-3 mb-3">Mobile-responsive 📞 ️</h2>
                </div>
                <div>
                    <h2 className="text-[#7E8BB6] text-lg">On any device your emails are going to look incredible! Nothing to worry about, just create your email, all other things are managed by Brainlyemails AI</h2>
                </div>
            </div>

            <div className="max-2w-xl  py-12 px-14 flex items-left flex-col border-2 rounded-xl hover:bg-[#131B3A] duration-250 cursor-pointer border-[#1E294E]">
                <div>
                    <img src="/images/img_6.png" alt=""/>
                </div>
                <div>
                    <h2 className="text-[#EBEBED] font-medium text-2xl mt-3 mb-3">All your subscribers in one place 🧑‍💻</h2>
                </div>
                <div>
                    <h2 className="text-[#7E8BB6] text-lg">All your subscribers in one neatly organized place that always has enough room — we don’t charge per subscriber. Collect email addresses, and grow your email list with simple to set up subscribe forms that are easy to share.</h2>
                </div>
            </div>

            <div className="max-2w-xl  py-12 px-14 flex items-left flex-col border-2 rounded-xl hover:bg-[#131B3A] duration-250 cursor-pointer border-[#1E294E]">
                <div>
                    <img src="/images/img_8.png" alt=""/>
                </div>
                <div>
                    <h2 className="text-[#EBEBED] font-medium text-2xl mt-3 mb-3">Automate emails and email sequences 🚘 ️</h2>
                </div>
                <div>
                    <h2 className="text-[#7E8BB6] text-lg">Set up email automation to deliver your email or sequence of emails when a defined event happens — for example, user sign-up. Use it to onboard new users, convert them into paying customers, and minimize churn.</h2>
                </div>
            </div>

            <div className="max-2w-xl  py-12 px-14 flex items-left flex-col border-2 rounded-xl hover:bg-[#131B3A] duration-250 cursor-pointer border-[#1E294E]">
                <div>
                    <img src="/images/img_10.png" alt=""/>
                </div>
                <div>
                    <h2 className="text-[#EBEBED] font-medium text-2xl mt-3 mb-3">Workflow 👷‍♂️ ️</h2>
                </div>
                <div>
                    <h2 className="text-[#7E8BB6] text-lg">We offer fully integrated workflow system! Just sit, and create it! Let's do that!</h2>
                </div>
            </div>
        </div>

        </div>
    );
};

export default ProductCards;
