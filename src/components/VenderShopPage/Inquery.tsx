import React from 'react';
import Popup from 'reactjs-popup';
import './Inquery.css';

const Inquery = () => {

    return (
        <div className="">
            <Popup
                trigger={<button className="button text-white rounded-full px-3">Inquery?</button>}
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
                                    <img className="w-64 p-3" src="https://i.ibb.co/jk1QcVk/mainlogo.png" alt="Unity Mart" />
                                </div>
                            </div>
                            <div className="md:flex items-center">

                                <div className="md:shrink-0">
                                    <img className="w-28 pl-2" src="https://i.ibb.co/dgvVngw/earnings.png" alt="Man looking at item at a store" />
                                </div>
                                <div className="p-6">
                                    <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">Earning</div>
                                    <p className="mt-2 text-white text-justify">You can earn by affiliate marketing based on our affiliate terms and condition. As a vendor you haven't paid monthly or yearly cost. You have to pay 3% price per product selling.So, be a vendor and increase your business.</p>
                                </div>

                            </div>
                            <div className="md:flex items-center">
                                <div className="p-6">
                                    <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">Secure Payment</div>
                                    <p className="mt-2 text-white  text-justify">We ensure users Secure payment. The "Unity Mart" decision is final for all types of payment matters. Be sure to check the product price and medium before making the payment. We accept payments through bKash Merchant, Nagad, Rocket, Upay, Stripe and SSL Commerce. For any inquiries regarding this you can contact us on the given number, support, email or Facebook page.</p>
                                </div>
                                <div className="md:shrink-0">
                                    <img className="w-28 pr-2" src="https://i.ibb.co/y6q2My0/secure-payment.png" alt="Man looking at item at a store" />
                                </div>
                            </div>

                        </div>


                    </div>
                )}
            </Popup>
        </div >
    );
};

export default Inquery;