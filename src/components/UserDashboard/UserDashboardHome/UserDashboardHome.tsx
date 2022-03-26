import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import UserDashboard from '../UserDashboard/UserDashboard';
import './UserOrders.css';



const UserDashboardHome = () => {
    const { userDetails } = UseAuth();
    const [myOrders, setMyOrders] = useState<any[]>([]);
    const { cart } = useSelector((state: any) => state.cart)
    const { wishlist } = useSelector((state: any) => state.wishlist);
    useEffect(() => {
        axios.get(`https://young-springs-82149.herokuapp.com/dashboard/orders?userEmail=${userDetails.email}`)
            .then(res => setMyOrders(res.data?.slice(0, 6)))
    }, [userDetails.email])
    console.log(myOrders);
    return (
        <>
            <Helmet>
                <title>User Dashboard :: Unity Mart</title>
                <meta
                    name="description"
                    content="Learn more about Unity Mart."
                />
                <link rel="canonical" href="/profile/dashboard" />
            </Helmet>
            <div className='container mx-auto'>
                <div>
                    <div className='text-center'>
                        <Link className="lg:hidden md:hidden sm:block" to="/profile/profile"><button>Go to Profile</button></Link>
                    </div>
                    <div>

                        <div id="main-content" className="my-5 bg-white border w-full">
                            <div className="my-5 mx-16">
                                <div className=" text-left">
                                    <div className=" font-bold text-xl">Hello {userDetails?.name} ,</div>

                                    <div className='text-lg'>Logged in as: {userDetails?.email}</div>
                                </div>

                                <h1 className="uppercase font-bold text-xl text-left py-2">My recent orders</h1>
                                <div className="order my-3">
                                    <div className="lg:flex my-4 space-x-5">
                                        <div className="shadow box me-4 my-1 bg-light"> <img
                                            src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png"
                                            alt="" />
                                            <div className="flex items-center justify-between mt-2">
                                                <div className=" text-lg ">Orders placed</div>
                                                <div className="text-2xl font-bold">{myOrders.length}</div>
                                            </div>
                                        </div>
                                        <div className="shadow box me-4 my-1 bg-light"> <img
                                            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png"
                                            alt="" />
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="text-lg">Items in Cart</div>
                                                <div className="text-2xl font-bold">{cart.length}</div>
                                            </div>
                                        </div>
                                        <div className="shadow box me-4 my-1 bg-light"> <img
                                            src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png"
                                            alt="" />
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="text-lg">Wishlist</div>
                                                <div className="text-2xl font-bold">{wishlist.length}</div>
                                            </div>
                                        </div>
                                    </div>
                                    {myOrders.length === 0 ? <h2>No Orders Found</h2> : myOrders?.slice(0, 6)?.map((order) => {
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
                                        return <>
                                            <div className="grid lg:grid-cols-2 bg-light my-2 gap-4 px-5 py-3">

                                                <div className="order-summary text-left">
                                                    <div className="flex items-center justify-between ">
                                                        <h1 className="font-bold text-xl">Order <br />
                                                            #{order?.paymentDetails.createdId}</h1>
                                                        <h1 className="text-white rounded p-1 bg-indigo-600 uppercase">paid</h1>
                                                    </div>

                                                    <div className='text-left text-lg'>
                                                        <div className="">{order?.products[0]?.title}</div>
                                                        <div className="">{order?.paymentDetails.date}</div>
                                                    </div>

                                                    <div className="rating flex items-center pt-1"> <img
                                                        src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png"
                                                        alt="" /><span className="px-2">Rating:</span> <span
                                                            className="fas fa-star"></span> <span className="fas fa-star"></span>
                                                        <span className="fas fa-star"></span> <span className="fas fa-star"></span>
                                                        <span className="far fa-star"></span> </div>
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

                                            </div>
                                        </>
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>


    );
};

export default UserDashboardHome;