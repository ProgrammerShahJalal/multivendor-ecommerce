import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';

const UserOrders = () => {
    const [myOrders, setMyOrders] = useState<any[]>([]);
    const { userDetails } = UseAuth()
    useEffect(() => {
        axios.get(`https://guarded-ocean-73313.herokuapp.com/dashboard/orders?userEmail=fathekarim3@gmail.com`)
            .then(res => setMyOrders(res.data))
    }, [userDetails.email])
    return (
        <div className='container mx-auto'>
            <div className="min-h-screen  ">

                <div>

                    <div id="main-content" className="my-5 bg-white border w-full">
                        <div className="my-5 mx-16">
                            <div className=" text-left">
                                <div className="order my-3">

                                    {myOrders.length === 0 ? "No Order Found" : myOrders?.map((order) => {
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
                                        return <><div className="grid lg:grid-cols-2 bg-light my-2 gap-4 px-5 py-3">

                                            <div className="order-summary text-left">
                                                <div className="flex items-center justify-between ">
                                                    <h1 className="font-bold text-xl">Order <br /> #{order?.paymentDetails.createdId}</h1>
                                                    <h1 className="text-white rounded p-1 bg-indigo-600 uppercase">paid</h1>
                                                </div>

                                                <div className='text-left text-lg'>
                                                    <div className="">{order?.products[0]?.title}</div>
                                                    <div className="">{order?.paymentDetails.date}</div>
                                                </div>

                                                <div className="rating flex items-center pt-1"> <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png" alt="" /><span className="px-2">Rating:</span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="far fa-star"></span> </div>
                                            </div>

                                            <div>
                                                <div className="flex items-start justify-between">
                                                    <div className="font-bold text-xl ">Status : {order?.status}</div>
                                                    <Link to={`/profile/order/${order._id}`}>
                                                        <button className="btn btn-primary p-2 uppercase">order info</button>
                                                    </Link>
                                                </div>
                                                <div className="progressbar-track">
                                                    <ul className="progressbar gap-3">
                                                        <li id="step-1" className={`${statusNumber >= 1 && statusNumber <= 5 ? 'text-muted green mr-3' : statusNumber === 6 ? "text-red-600" : 'gray mr-3'}`}> <button className="fas fa-gift"></button> </li>
                                                        <li id="step-2" className={`${statusNumber >= 2 && statusNumber <= 5 ? 'text-muted green mr-3' : statusNumber === 6 ? "text-red-600" : 'gray mr-3'}`}> <button className="fas fa-check"></button> </li>
                                                        <li id="step-3" className={`${statusNumber >= 3 && statusNumber <= 5 ? 'text-muted green mr-3' : statusNumber === 6 ? "text-red-600" : 'gray mr-3'}`}> <button className="fas fa-box"></button> </li>
                                                        <li id="step-4" className={`${statusNumber >= 4 && statusNumber <= 5 ? 'text-muted green mr-3' : statusNumber === 6 ? "text-red-600" : 'gray mr-3'}`}> <button className="fas fa-truck"></button> </li>
                                                        <li id="step-5" className={`${statusNumber >= 5 && statusNumber <= 5 ? 'text-muted green ' : statusNumber === 6 ? "text-red-600" : 'gray'}`}> <button className="fas fa-box-open"></button> </li>
                                                    </ul>
                                                    <div id="tracker"></div>
                                                </div>
                                            </div>

                                        </div></>
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    );
};
export default UserOrders;

