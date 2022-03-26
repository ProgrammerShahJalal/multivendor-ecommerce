import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { TrackOrderApi } from '../../Services/orderApi/TrackOrderApi';
export default function OrderTracking() {

    const [ordersTrack, setOrdersTrack] = useState<any>([])
    const [isLoading, setIsLoading] = useState()

    const trackOrder = (e) => {
        e.preventDefault()
        const id = e.target.id.value
        const email = e.target.email.value
        TrackOrderApi(id, email, setOrdersTrack, setIsLoading)
    }

    return (
        <>
            <Helmet>
                <title>Order Tracking :: Unity Mart</title>
                <meta
                    name="description"
                    content="Track your order."
                />
                <link rel="canonical" href="/orderTrack" />
            </Helmet>
            <div className='dark:text-white'>
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
                            <form onSubmit={trackOrder} className='flex flex-col space-y-4 text-left w-6/12 mx-auto pb-10'>
                                <div>
                                    <label htmlFor="" className='text-lg'>Order ID</label>
                                    <input name='id' type="number" autoComplete='off' placeholder='Find in your order confirmation email.' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-4 mt-2  outline-none focus:ring-2 focus:ring-teal-300 ' />
                                </div>
                                <div>
                                    <label className='text-lg'>Your Billing Email</label>
                                    <input name='email' type="email" placeholder='Email you used during checkout.' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-4 mt-2 outline-none focus:ring-2 focus:ring-teal-300 ' />
                                </div>

                                <button type='submit' className='  bg-indigo-600 text-white font-bold rounded-lg px-6 py-4 upperase text-lg'>Track</button>

                            </form>
                        </div>
                    </div>
                </div>

                {isLoading ? <span className='flex justify-center'><CircularProgress color="inherit" /> </span> :
                    ordersTrack.map(order => {
                        let statusNumber;
                        if (order.status === "Placed") {
                            statusNumber = 1
                        }
                        else if (order.status === "Accepted") {
                            statusNumber = 2
                        }
                        else if (order.status === "Packed") {
                            statusNumber = 3
                        }
                        else if (order.status === "Shipped") {
                            statusNumber = 4
                        }
                        else if (order.status === "Delivered") {
                            statusNumber = 5
                        }
                        else if (order.status === "Cancel") {
                            statusNumber = 6
                        }
                        return <div className='container py-10  mx-auto'>
                            <div className="grid gap-8 row-gap-0 lg:grid-cols-5">
                                <div className="relative text-center">
                                    <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full ${statusNumber >= 1 && statusNumber <= 5 ? "bg-indigo-600 text-white" : ''} `}>
                                        <button className="fas fa-gift  text-xl"></button>
                                    </div>
                                    <h6 className="mb-2 text-xl font-normal">Ordered</h6>
                                    <p>{order.paymentDetails.date}</p>

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
                                    <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full border sm:w-20 sm:h-20 ${statusNumber >= 2 && statusNumber <= 5 ? "bg-indigo-600 text-white" : 'text-dark'} `}>
                                        <button className="fas fa-check  text-xl"></button>
                                    </div>
                                    <h6 className="mb-2 text-xl font-normal">Accepted</h6>
                                    <div className="top-0 right-0 flex items-center justify-center  h-24 lg:-mr-8 lg:absolute">
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
                                    <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full border sm:w-20 sm:h-20 ${statusNumber >= 3 && statusNumber <= 5 ? "bg-indigo-600 text-white" : 'text-dark'} `}>
                                        <button className="fas fa-box text-dark text-xl"></button>
                                    </div>
                                    <h6 className="mb-2 text-xl font-normal">Packed</h6>


                                    <div className="top-0 right-0 flex items-center justify-center  h-24 lg:-mr-8 lg:absolute">
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
                                    <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full border sm:w-20 sm:h-20 ${statusNumber >= 4 && statusNumber <= 5 ? "bg-indigo-600 text-white" : 'text-dark'} `}>
                                        <button className="fas fa-truck text-dark text-xl"></button>
                                    </div>
                                    <h6 className="mb-2 text-xl font-normal">Shipped</h6>


                                    <div className="top-0 right-0 flex items-center justify-center  h-24 lg:-mr-8 lg:absolute">
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
                                    <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full border sm:w-20 sm:h-20 ${statusNumber >= 5 && statusNumber <= 5 ? "bg-indigo-600 text-white" : 'text-dark'} `}>
                                        <button className="fas fa-box-open text-dark text-xl"></button>
                                    </div>
                                    <h6 className="mb-2 text-xl font-normal">Delivered</h6>
                                    <p>{order?.deliveryDate}</p>


                                </div>

                            </div>
                        </div>
                    })
                }

            </div>
        </>
    )

}
