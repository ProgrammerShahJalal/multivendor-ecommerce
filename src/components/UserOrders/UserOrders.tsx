import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../hooks/UseAuth';
import './UserOrders.css';



const UserOrders = () => {
    const { user,userDetails } = UseAuth();
    const [myOrders, setMyOrders] = useState<any[]>([]);
    useEffect(() => {
        axios.get('https://guarded-ocean-73313.herokuapp.com/dashboard/orders?userEmail=fathekarim3@gmail.com')
            .then(res => setMyOrders(res.data))
    }, [userDetails.email])
    console.log(myOrders);
    return (
        <div className='container mx-auto'>
            <div className="min-h-screen lg:flex md:flex-1 ">
                <div>
                    {/* <Sidebar/> */}
                </div>
                <div>


                    <div className="my-1 ml-16">
                        <div className=" text-left">
                            <div className=" font-bold text-xl">Hello {user?.displayName} ,</div>

                            <div className='text-lg'>Logged in as: {user?.email}</div>
                        </div>

                        <div id="main-content" className="bg-white border w-full">


                            <h1 className="uppercase font-bold text-xl text-left py-2">My recent orders</h1>
                            <div className="order my-3">
                                {myOrders?.map((order) => (<>
                                    {/* <div className="lg:flex my-4 space-x-5">
                    <div className="box me-4 my-1 bg-light"> <img src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png" alt=""/>
                        <div className="flex items-center justify-between mt-2">
                            <div className=" text-lg ">Orders placed</div>
                            <div className="text-2xl font-bold">10</div>
                        </div>
                    </div>
                    <div className="box me-4 my-1 bg-light"> <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png" alt=""/>
                        <div className="flex items-center justify-between mt-2">
                            <div className="text-lg">Items in Cart</div>
                            <div className="text-2xl font-bold">{order?.products[0]?.cartQuantity}</div>
                        </div>
                    </div>
                    <div className="box me-4 my-1 bg-light"> <img src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png" alt=""/>
                        <div className="flex items-center justify-between mt-2">
                            <div className="text-lg">Wishlist</div>
                            <div className="text-2xl font-bold">10</div>
                        </div>
                    </div>
                </div> */}



                                    <div className="grid lg:grid-cols-2 bg-light my-2 gap-4 px-5 py-3">

                                        <div className="order-summary text-left">
                                            <div className="flex items-center justify-between ">
                                                <h1 className="font-bold text-xl">Order <br /> #{order?.paymentDetails.createdId}</h1>
                                                <h1 className="text-blue-100 p-1 bg-blue-900 uppercase">paid</h1>
                                            </div>

                                            <div className='text-left text-lg'>
                                                <div className="">{order?.products[0]?.title}</div>
                                                <div className="">{order?.paymentDetails.date} | 12:05 PM</div>
                                            </div>

                                            <div className="rating flex items-center pt-1"> <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png" alt="" /><span className="px-2">Rating:</span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="far fa-star"></span> </div>
                                        </div>

                                        <div>
                                            <div className="flex items-start justify-between">
                                                <div className="font-bold text-xl ">Status : {order?.status}</div>
                                                <button className="btn btn-primary p-2 uppercase">order info</button>
                                            </div>
                                            <div className="progressbar-track">
                                                <ul className="progressbar gap-3">
                                                    <li id="step-1" className= {`${ order?.status === "Placed" ?' text-muted green mr-3' : 'gray mr-3'}`}> <button className="fas fa-gift"></button> </li>
                                                    <li id="step-2" className= {`${ order?.status === "Accepted" ?' text-muted green mr-3' : 'gray mr-3'}`}> <button className="fas fa-check"></button> </li>
                                                    <li id="step-3" className= {`${ order?.status === "Packed" ?' text-muted green mr-3' : 'gray mr-3'}`}> <button className="fas fa-box"></button> </li>
                                                    <li id="step-4" className= {`${ order?.status === "Shipped" ?' text-muted green mr-3' : 'gray mr-3'}`}> <button className="fas fa-truck"></button> </li>
                                                    <li id="step-5" className= {`${ order?.status === "Pending" ?' text-muted green mr-3' : 'gray mr-3'}`}> <button className="fas fa-box-open"></button> </li>
                                                    <li id="step-6" className= {`${ order?.status === "Delivered" ?' text-muted green mr-3' : 'gray '}`}> <button className="fas fa-box-open"></button> </li>
                                                </ul>
                                                <div id="tracker"></div>
                                            </div>
                                        </div>

                                    </div></>))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    );
};

export default UserOrders;