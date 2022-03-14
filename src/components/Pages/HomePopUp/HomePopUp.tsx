import React from 'react';
import Popup from 'reactjs-popup';
import './HomePopUp.css';

const HomePopUp = () => {

    return (
        <div className="">
            <Popup
                trigger={<button className="button text-white rounded-full px-3">Read More</button>}
                modal
                nested
            >

                {(close: any) => (
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div style={{ backgroundColor: '#22174B' }}>
                            <div className="pb-3 relative h-auto w-full">
                                <img className="absolute top-0 right-0 w-10 cursor-pointer" onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                }} src="https://i.ibb.co/Jk9J94P/close.png" alt="" />
                            </div>
                            <div className="md:flex items-center place-content-center">

                                <div className="md:shrink-0">
                                    <img className="w-20 p-3" src="https://i.ibb.co/nQn7Vkc/trophy.png" alt="Man looking at item at a store" />
                                </div>
                                <div>
                                    <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">Remote Coder Unity</div>
                                    <p className="mt-2 text-white  text-justify">United we stand, divided we fall.</p>
                                </div>
                            </div>
                            <div className="md:flex items-center">

                                <div className="md:shrink-0">
                                    <img className="w-28 pl-2" src="https://i.ibb.co/k8DK23c/team-management.png" alt="Man looking at item at a store" />
                                </div>
                                <div className="p-6">
                                    <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">Dedicated Team</div>
                                    <p className="mt-2 text-white text-justify">We are Remote Coder Unity. We have accepted the challenge to be the best team and also to be the best project holder in the end game. We are facing a lot of challenges in doing so, yet we are overcoming of all challenges with our best team collaboration.</p>
                                </div>

                            </div>
                            <div className="md:flex items-center">
                                <div className="p-6">
                                    <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">Our Goal</div>
                                    <p className="mt-2 text-white  text-justify">If we want to say something about our goal, we can simply say that our website is multi-vendor e-commerce based and so our goal is to provide the best user experience and interface. By Using exclusive features of our website users can be able to explore the website and get their preferable product whatever they want. Our main purpose is to give users the feel of online shopping as shopping from the market. </p>
                                </div>
                                <div className="md:shrink-0">
                                    <img className="w-28 pr-2" src="https://i.ibb.co/F6cCyBR/target.png" alt="Man looking at item at a store" />
                                </div>
                            </div>

                        </div>


                    </div>
                )}
            </Popup>
        </div >
    );
};

export default HomePopUp;