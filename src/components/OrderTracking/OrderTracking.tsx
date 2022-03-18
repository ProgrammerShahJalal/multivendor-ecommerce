import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';


const OrderTracking = () => {
    const {user}= UseAuth();
    const [myOrders, setMyOrders] = useState<any[]>([]);
    useEffect(() => {
        axios.get('https://guarded-ocean-73313.herokuapp.com/dashboard/orders?userEmail=fathekarim3@gmail.com')
            .then(res => setMyOrders(res.data))
    }, [])
    console.log(myOrders);
        return (
            <div>
                <div className=' flex justify-center items-center gap-3'>
                    <img className='w-72' src="https://i.ibb.co/52Vj8CR/oder-1.png" alt="" />
                    <img className='w-72' src="https://i.ibb.co/pRkCpsP/order-2.png" alt="" />
                    <img className='w-72' src="https://i.ibb.co/y8S4bsS/order-3.png" alt="" />
                </div>
                <div className=''>
                    <h2 className='text-5xl text-center font-bold  '>Order Tracking</h2>
                    <p className='text-center font-normal py-10 sm:p-5'>To track your order please enter your Order ID in the box below and press the "Track" button. <br /> This was given to you on your receipt and in the confirmation email you should have received.</p>

                    <div className=''>
                        <div>
                            <form className='flex flex-col space-y-4 text-left w-6/12 mx-auto pb-10'>
                                <div>
                                    <label htmlFor="" className='text-lg'>Order ID</label>

                                    <input type="number" placeholder='Find in your order confirmation email.' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-4 mt-2  outline-none focus:ring-2 focus:ring-teal-300 ' />
                                </div>
                                <div>
                                    <label className='text-lg'>Your Billing Email</label>

                                    <input type="email" placeholder='Email you used during checkout.' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-4 mt-2 outline-none focus:ring-2 focus:ring-teal-300 ' />
                                </div>

                                <button className='  bg-orange-600 text-white font-bold rounded-lg px-6 py-4 upperase text-lg'>Track</button>

                            </form>
                        </div>
                    </div>
                </div>
                <div className='bg-green-200 py-10'>
                    <div className='container mx-auto pt-10'></div>
                    <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
                        <div className="relative text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-green-700 ">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 text-xl font-normal">Ordered</h6>
                            <p>Sat, February 12</p>

                            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                                <svg
                                    className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                        fill="none"
                                        strokeMiterlimit="10"
                                        x1="2"
                                        y1="12"
                                        x2="22"
                                        y2="12"
                                    />
                                    <polyline
                                        fill="none"
                                        strokeMiterlimit="10"
                                        points="15,5 22,12 15,19 "
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="relative text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-green-700 sm:w-20 sm:h-20">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 text-xl font-normal">Shipped</h6>
                            <p>Sun, February 13</p>

                            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                                <svg
                                    className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                        fill="none"
                                        strokeMiterlimit="10"
                                        x1="2"
                                        y1="12"
                                        x2="22"
                                        y2="12"
                                    />
                                    <polyline
                                        fill="none"
                                        strokeMiterlimit="10"
                                        points="15,5 22,12 15,19 "
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="relative text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-orange-500 sm:w-20 sm:h-20">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 text-xl font-normal">Delivered</h6>
                            <p>Tue, February 15</p>


                        </div>

                    </div>
                </div>
            </div>
        );
    };

export default OrderTracking;



