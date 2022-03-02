import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PaymentLottie from './Lottie/PaymentLottie';

const Success = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://morning-inlet-49130.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, [id])

    const validatePayment = () => {
        const data = {
            tran_id: id,
            val_id: orders?.val_id
        }
        axios.post(`https://morning-inlet-49130.herokuapp.com/validate`, data)
            .then(res => {
                if (res.data) {
                    alert("Order placed successfully")
                    navigate(`/home`)
                }
            })
    }

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Your Payment Successfully Completed!
                    </p>
                </div>

                <div>
                    <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-1 md:gap-y-5">
                        <div className='w-96 mx-auto'>
                            <div className='grid grid-cols-1'>
                                <PaymentLottie />
                                <img className='w-72 lg:w-80' src={orders.product_image2} alt="" />
                            </div>
                            <div className="mt-2 text-base">
                                <p className="w-72 text-lg leading-6 font-medium text-gray-900"><span className='text-indigo-600 font-semi-bold'>Product Name:</span> {orders.product_name}</p>
                                <p><span className='text-indigo-600'>Total Amount:</span> ${orders.total_amount}</p></div>
                        </div>
                        <div className='w-64 mx-auto'>
                            <button onClick={validatePayment} className='bg-indigo-500 text-white rounded-lg px-4 py-1'>Confirm Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success