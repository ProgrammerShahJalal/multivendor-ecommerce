import React from 'react';
import './UserOrders.css';

const UserOrders = () => {
    return (
        <div className='container mx-auto'>
            <div className="min-h-screen lg:flex md:flex-1 ">
                <div>
                        {/* <Sidebar/> */}
                </div>
                <div>
                    

                    <div className="my-1 ml-16">
            <div id="main-content" className="bg-white border w-full">
                <div className=" text-left">
                    <div className=" font-bold text-xl">Hello Sahara ,</div>
                    
                    <div className='text-lg'>Logged in as: saharabanu@gmail.com</div>
                </div>
                <div className="lg:flex my-4 space-x-5">
                    <div className="box me-4 my-1 bg-light"> <img src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png" alt=""/>
                        <div className="flex items-center justify-between mt-2">
                            <div className=" text-lg ">Orders placed</div>
                            <div className="text-2xl font-bold">10</div>
                        </div>
                    </div>
                    <div className="box me-4 my-1 bg-light"> <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png" alt=""/>
                        <div className="flex items-center justify-between mt-2">
                            <div className="text-lg">Items in Cart</div>
                            <div className="text-2xl font-bold">10</div>
                        </div>
                    </div>
                    <div className="box me-4 my-1 bg-light"> <img src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png" alt=""/>
                        <div className="flex items-center justify-between mt-2">
                            <div className="text-lg">Wishlist</div>
                            <div className="text-2xl font-bold">10</div>
                        </div>
                    </div>
                </div>
                <div className="uppercase font-bold text-xl text-left py-2">My recent orders</div>
                <div className="order my-3 bg-light">
                    <div className="grid lg:grid-cols-2 gap-4 px-5 py-3">
                        
                            <div className=" order-summary text-left">
                                <div className="flex items-center justify-between ">
                                    <div className="font-bold text-xl">Order <br /> #fur10001</div>
                                    <div className="text-blue-100 p-1 bg-blue-900 uppercase">paid</div>
                                </div>

                                <div className='text-left text-lg'>
                                <div className="">Products #03</div>
                                <div className="">22 August, 2020 | 12:05 PM</div>
                                </div>

                                <div className="rating flex items-center pt-1"> <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png" alt=""/><span className="px-2">Rating:</span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="far fa-star"></span> </div>
                            </div>
                        
                            <div>
                            <div className="flex items-start justify-between">
                                <div className="font-bold text-xl ">Status : Delivered</div>
                                <div className="btn btn-primary p-2 uppercase">order info</div>
                            </div>
                            <div className="progressbar-track">
                                <ul className="progressbar">
                                    <li id="step-1" className="text-muted green mr-3"> <span className="fas fa-gift"></span> </li>
                                    <li id="step-2" className="text-muted green mr-3"> <span className="fas fa-check"></span> </li>
                                    <li id="step-3" className="text-muted green mr-3"> <span className="fas fa-box"></span> </li>
                                    <li id="step-4" className="text-muted green mr-3"> <span className="fas fa-truck"></span> </li>
                                    <li id="step-5" className="text-muted green "> <span className="fas fa-box-open"></span> </li>
                                </ul>
                                <div id="tracker"></div>
                            </div>
                            </div>
                        
                    </div>
                </div>




                <div className="order my-5 bg-light">
                    <div className="grid lg:grid-cols-2 gap-4 px-5 py-3">
                        
                            <div className="text-left order-summary">
                                <div className="flex items-center justify-between">
                                    <div className="font-bold text-xl">Order <br /> #fur10001</div>
                                    <div className="text-green-100 p-1 bg-green-900 uppercase">cod</div>
                                </div>
                                <div className='text-left text-lg'>
                                <div className="">Products #03</div>
                                <div className="">22 August, 2020 | 12:05 PM</div>
                                </div>
                                <div className="rating flex items-center pt-1"> <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png" alt=""/><span className="px-2">Rating:</span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="far fa-star"></span> </div>
                            </div>
                       

                        <div>
                        
                            <div className="flex items-start justify-between">
                                <div className="font-bold text-xl">Status : Delivered</div>
                                <div className="btn btn-primary uppercase p-1">order info</div>
                            </div>
                            <div className="progressbar-track">
                                <ul className="progressbar">
                                    <li id="step-1" className="text-muted green"> <span className="fas fa-gift"></span> </li>
                                    <li id="step-2" className="text-muted"> <span className="fas fa-check"></span> </li>
                                    <li id="step-3" className="text-muted"> <span className="fas fa-box"></span> </li>
                                    <li id="step-4" className="text-muted"> <span className="fas fa-truck"></span> </li>
                                    <li id="step-5" className="text-muted"> <span className="fas fa-box-open"></span> </li>
                                </ul>
                                <div id="tracker"></div>
                            </div>
                        
                        </div>

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