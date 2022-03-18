import axios from 'axios';
import React, { createRef, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { affiliateCommission } from '../Services/AffiliateCommssion/AffiliateCommission';
import Celebrating from './Home/Celebrating';
import Pdf from "react-to-pdf";
const ref = createRef();

const Success = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://morning-inlet-49130.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data, 'fetch');
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
                    console.log(res.data, 'data', '-', data, 'orders');
                    const ref = localStorage.getItem("affiliate_Link")
                    const affiliateLink = JSON.parse(ref)
                    alert("Order placed successfully")
                    affiliateCommission(affiliateLink, 500)
                    navigate(`/home`)
                }
            })
    }

    return (
        <>
            <div className='container px-12 overflow-x-hidden'>
                <div className='overflow-x-auto mx-auto w-full h-full'>
                    <Celebrating />
                </div>
                <div className="py-12 bg-white dark:bg-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Your Payment Successfully Completed!
                            </p>
                        </div>

                        <div>
                            <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-1 md:gap-y-5">
                                <div className='w-96 mx-auto'>
                                    <div className='grid grid-cols-1'>
                                        <img className='w-72 lg:w-80' src={orders.product_image} alt="" />
                                    </div>
                                    <div className="mt-2 text-base">
                                        <p className="w-72 text-lg leading-6 font-medium text-gray-900 dark:text-white"><span className='text-indigo-600 font-semi-bold'>Product Name:</span> {orders.product_name}</p>
                                        <p><span className='text-indigo-600'>Total Amount:</span> $ {orders.total_amount}</p></div>
                                </div>
                                <div className='gap-3 mx-auto flex'>
                                    <button onClick={validatePayment} className="mx-auto flex items-center justify-center my-6 border border-indigo-500 bg-white dark:bg-slate-800 text-indigo-500 p-2 rounded-sm hover:bg-indigo-500 hover:text-white">Confirm Order</button>
                                    <Pdf style={{ height: '600px', width: '800px' }} targetRef={ref} filename="invoice.pdf">
                                        {({ toPdf }) => (
                                            <button className="mx-auto flex items-center justify-center my-6 border border-indigo-500 bg-white dark:bg-slate-800 text-indigo-500 p-2 rounded-sm hover:bg-indigo-500 hover:text-white" onClick={toPdf}><i className="fa-light fa-file-arrow-down pe-2"></i>ㅤDownload invoice</button>
                                        )}
                                    </Pdf>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="mx-auto bg-gray-300 my-3" style={{ marginX: 'auto', height: '600px', width: '800px' }}>
                    <div class="mx-auto p-16" ref={ref}>
                        <div class="flex items-center justify-between mb-8 px-3">
                            <div>
                                <span class="text-2xl">Order Invoice</span>: 0001-2019<br />
                                <span>Invoice Id: {id}</span><br />
                                <span>Date</span>:  April 1st 2022<br />
                            </div>
                            <div class="text-right">
                                {/* <img src="https://www.stenvdb.be/assets/img/email-signature.png" alt="" /> */}
                            </div>
                        </div>

                        <div class="flex justify-between mb-8 px-3">
                            <div>
                                Unity Mart<br />
                                919 NW Bond St. Ste 203<br />
                                Bend, OR 97703 USA<br />
                                unitymart.com<br />
                                +1 855-700-5115
                            </div>
                            <div class="text-right">
                                Unity Mart<br />
                                Street 12<br />
                                10000 City<br />
                                unitymart.com
                            </div>
                        </div>
                        <h1 className='text-2xl text-center'>{orders.product_name}</h1>
                        <div class="mb-8 px-3"></div>
                        <div class="flex justify-between mb-4 px-3 py-2">
                            <div>Price</div>
                            <div class="text-right font-medium"> $ {orders.total_amount}</div>
                        </div>
                        <div class="flex justify-between mb-4 px-3 py-2">
                            <div>TAX:</div>
                            <div class="text-right font-medium"> $ {orders.total_amount / 100 * 2}</div>
                        </div>
                        <div class="flex justify-between mb-4 px-3 py-2">
                            <div>Total:</div>
                            <div class="text-right font-medium">$ {parseFloat(orders.total_amount) + parseFloat(orders.total_amount / 100 * 2)}</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Success