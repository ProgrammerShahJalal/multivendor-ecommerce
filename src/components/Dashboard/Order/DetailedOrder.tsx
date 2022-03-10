import React from 'react'

type Props = {}

export default function DetailedOrder({ }: Props) {
    return (
        <div>
            <div className="py-4 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex justify-start item-start space-y-2 flex-col">
                    <h1 className="text-3xl dark:text-dark lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-white">Order #13432</h1>
                    <p className="text-base dark:text-dark-300 font-medium leading-6 text-zinc-700">21st Mart 2021 at 10:34 PM</p>
                </div>
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start items-start dark:text-zinc-100 bg-gray-50 dark:bg-gray-800 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full drop-shadow-md rounded">
                            <p className="text-lg md:text-xl dark:text-zinc-700	font-semibold leading-6 xl:leading-5 text-zinc-700	">Customer’s Cart</p>
                            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div className="pb-4 md:pb-8 w-full md:w-40">
                                    <img className="w-full hidden md:block" src="https://static-01.daraz.com.bd/p/5af836271644478c7c14d6b904f9531c.jpg" alt="dress" />
                                    <img className="w-full md:hidden" src="https://static-01.daraz.com.bd/p/5af836271644478c7c14d6b904f9531c.jpg" alt="dress" />
                                </div>
                                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 className="text-xl dark:text-zinc-700 xl:text-2xl font-semibold leading-6 text-zinc-700	">Premium Quaility Dress</h3>
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-sm dark:text-zinc-700	 leading-none text-zinc-700"><span className="dark:text-gray-400 text-zinc-700">Style: </span> Italic Minimal Design</p>
                                            <p className="text-sm dark:text-zinc-700	 leading-none text-zinc-700"><span className="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                                            <p className="text-sm dark:text-zinc-700	 leading-none text-zinc-700"><span className="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-start w-full">
                                        <p className="text-base dark:text-zinc-700	 xl:text-lg leading-6">$36.00 <span className="text-indigo-600 line-through"> $45.00</span></p>
                                        <p className="text-base dark:text-zinc-700	 xl:text-lg leading-6 text-gray-800 dark:text-white">01</p>
                                        <p className="text-base dark:text-zinc-700	 xl:text-lg font-semibold leading-6 text-gray-800 dark:text-white">$36.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                                <div className="w-full md:w-40">
                                    <img className="w-full hidden md:block" src="https://static-01.daraz.com.bd/p/0f0ab73477e71768956080b8af3b49ef.jpg" alt="dress" />
                                    <img className="w-full md:hidden" src="https://static-01.daraz.com.bd/p/5af836271644478c7c14d6b904f9531c.jpg" alt="dress" />
                                </div>
                                <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 className="text-xl dark:text-zinc-700	 xl:text-2xl font-semibold leading-6 text-gray-800 dark:text-white">High Quaility Italic Dress</h3>
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-sm dark:text-zinc-700	 leading-none text-gray-800 dark:text-white"><span className="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design</p>
                                            <p className="text-sm dark:text-zinc-700	 leading-none text-gray-800 dark:text-white"><span className="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                                            <p className="text-sm dark:text-zinc-700	 leading-none text-gray-800 dark:text-white"><span className="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-start w-full">
                                        <p className="text-base dark:text-zinc-700	 xl:text-lg leading-6">$20.00 <span className="text-indigo-600 line-through"> $30.00</span></p>
                                        <p className="text-base dark:text-zinc-700	 xl:text-lg leading-6 text-gray-800 dark:text-white">01</p>
                                        <p className="text-base dark:text-zinc-700	 xl:text-lg font-semibold leading-6 dark:text-zinc-700">$20.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-zinc-50	 dark:bg-zinc-50 space-y-6 drop-shadow-md rounded">
                                <h3 className="text-xl dark:text-zinc-700	 font-semibold leading-5 dark:text-zinc-700">Summary</h3>
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    <div className="flex justify-between w-full">
                                        <p className="text-base dark:text-zinc-700	 leading-4 dark:text-zinc-700">Subtotal</p>
                                        <p className="text-base dark:text-zinc-700 leading-4 text-zinc-700">$56.00</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base dark:text-zinc-700	 leading-4 text-gray-800 dark:text-white">Discount <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:bg-slate-800 dark:text-zinc-700 leading-3 text-gray-800 dark:text-white">STUDENT</span></p>
                                        <p className="text-base dark:text-zinc-700 leading-4 text-zinc-700">-$28.00 (50%)</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base dark:text-zinc-700	 leading-4 text-gray-800 dark:text-white">Shipping</p>
                                        <p className="text-base dark:text-zinc-700 leading-4 text-zinc-700">$8.00</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-zinc-700 font-semibold leading-4 text-gray-800 dark:text-white">Total</p>
                                    <p className="text-base dark:text-zinc-700 font-semibold leading-4 text-zinc-700">$36.00</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-zinc-50 dark:bg-zinc-50 space-y-6 drop-shadow-md rounded">
                                <h3 className="text-xl dark:text-zinc-700 font-semibold leading-5 text-gray-800 dark:text-white">Shipping</h3>
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex justify-center items-center space-x-4">
                                        <div className="w-8 h-8">
                                            <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                        </div>
                                        <div className="flex flex-col justify-start items-center">
                                            <p className="text-lg leading-6 dark:text-zinc-700	 font-semibold text-gray-800 dark:text-white">DPD Delivery<br /><span className="font-normal">Delivery with 24 Hours</span></p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold leading-6 dark:text-zinc-700	 text-gray-800 dark:text-white">$8.00</p>
                                </div>
                                <div className="w-full flex justify-center items-center">
                                    <button className="drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 py-5 w-96 md:w-full  text-base font-medium leading-4 text-white">View Carrier Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-50 drop-shadow-md rounded dark:bg-zinc-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                        <h3 className="text-xl dark:text-zinc-700	 font-semibold leading-5 text-gray-800 dark:text-white">Customer</h3>
                        <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                            <div className="flex flex-col justify-start items-start flex-shrink-0">
                                <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                    <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                    <div className="flex justify-start items-start flex-col space-y-2">
                                        <p className="text-base dark:text-zinc-700	 font-semibold leading-4 text-left text-gray-800 dark:text-white">David Kent</p>
                                        <p className="text-sm dark:text-zinc-700 leading-5 text-zinc-700">10 Previous Orders</p>
                                    </div>
                                </div>

                                <div className="flex justify-center text-gray-800 dark:text-white dark:text-zinc-700	 md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="cursor-pointer text-sm leading-5 mt-3 ">david89@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                    <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                        <p className="text-base dark:text-zinc-700	 font-semibold leading-4 text-center md:text-left text-gray-800 dark:text-white">Shipping Address</p>
                                        <p className="w-48 lg:w-full dark:text-zinc-700 xl:w-48 text-center md:text-left text-sm leading-5 text-zinc-700">180 North King Street, Northhampton MA 1060</p>
                                    </div>
                                    <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                        <p className="text-base dark:text-zinc-700	 font-semibold leading-4 text-center md:text-left text-gray-800 dark:text-white">Billing Address</p>
                                        <p className="w-48 lg:w-full dark:text-zinc-700 xl:w-48 text-center md:text-left text-sm leading-5 text-zinc-700">180 North King Street, Northhampton MA 1060</p>
                                    </div>
                                </div>
                                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                    <button className="mt-6 md:mt-0	 py-5 drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800 dark:text-white">Edit Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}