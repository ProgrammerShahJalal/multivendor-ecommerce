import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';

const AllOrders = () => {
    const [orders, setOrders] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [notFound, setNotFound] = useState('')
    const [value, setValue] = useState('All');
    const { userDetails } = UseAuth()
    useEffect(() => {
        setIsLoading(true)
        if (userDetails.role === 'vendor') {
            fetch(`https://unitymart-admin.onrender.com/dashboard/vendor-orders?email=${userDetails.email}`)
                .then(res => res.json())
                .then(data => {

                    const latestData = data.sort(
                        (a, b) => new Date(b.paymentDetails.date).getTime() - new Date(a.paymentDetails.date).getTime()
                    );
                    setOrders(latestData)
                })
                .finally(() => setIsLoading(false))
        } else if (userDetails.role === 'admin') {
            fetch(`https://unitymart-admin.onrender.com/dashboard/orders`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    const latestData = data.sort(
                        (a, b) => new Date(b.paymentDetails.date).getTime() - new Date(a.paymentDetails.date).getTime()
                    );
                    setOrders(latestData)
                })
                .finally(() => setIsLoading(false))
        }

    }, [userDetails.role, userDetails.email])


    // DELETE ORDER
    const deleteOrderFunc = (id) => {

        if (window.confirm('Are you sure you want to delete?')) {
            setIsLoading(true)
            fetch(`https://unitymart-admin.onrender.com/dashboard/orders/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert('Order Deleted')
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders)//
                    }

                })
                .finally(() => setIsLoading(false))
        }

    }
    const handleOnChange = (event: any) => {
        const searchText = event.target.value.toLowerCase();
        const findOrder: any = orders && orders.length > 0 ? orders?.filter(p => JSON.stringify(p?.paymentDetails.createdId).toLowerCase().includes(searchText)) : null;
        if (findOrder.length > 0) {
            setOrders(findOrder);
            setNotFound('')
        }
        else if (findOrder.length === 0) {
            setNotFound('Not found')
            fetch('https://unitymart-admin.onrender.com/dashboard/orders')
                .then(res => res.json())
                .then(data => setOrders(data))
        }
        if (searchText===''){
            fetch('https://unitymart-admin.onrender.com/dashboard/orders')
                .then(res => res.json())
                .then(data => setOrders(data))
        }
        
    }
    const handleChange = (event:any) =>{
        const statusFilter = event.target.value;
        event.preventDefault();
        if (statusFilter === 'Delivered'){
        const filteringDeliver = orders?.filter(p => p?.status === 'Delivered')
        // console.log(filteringDeliver);
        setOrders(filteringDeliver)
        setValue('Delivered')
        }
        else if (statusFilter==='Shipped'){
            const filteringShipped = orders?.filter(p => p?.status === 'Shipped')
            // console.log(filteringShipped);
            setOrders(filteringShipped)
        setValue('Shipped')
        }
        else {
            fetch('https://unitymart-admin.onrender.com/dashboard/orders')
                .then(res => res.json())
                .then(data => setOrders(data))
                setValue('All')
        }
    }
    return (

        <div className='container mx-auto px-4 sm:px-8'>
            <div className='py-4'>
                {/* user part 1  */}
                <div>
                    <h2 className="text-2xl font-semibold leading-tight text-left">All Orders</h2>
                </div>
                <div className="my-2 flex sm:flex-row flex-col">
                    <div className="flex flex-row mb-1 sm:mb-0">

                        <div className="relative">
                            {/* <select
                                className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                <option>All</option>
                                <option>Delivered</option>
                                <option>Shipped</option>
                            </select> */}
                            <div
                                className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 text-gray-700">

                            </div>
                        </div>
                    </div>
                    <div className="block relative">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input placeholder="Search"
                        onChange={handleOnChange}
                            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                </div>
                {isLoading ? <span className='flex justify-center'><CircularProgress color="inherit" /></span> : <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        #ID
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Total
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Created at
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Vendor
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Admin Commission
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Edit
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Delete
                                    </th>
                                </tr>
                                {/* heading end  */}
                            </thead>
                            <tbody>


                                {orders.length === 0 ? <h2>No Order Found</h2> :
                                    orders.map(order => {
                                        return <tr key={order._id}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="ml-1">
                                                        <p className="text-gray-900 whitespace-no-wrap font-bold">#{order.paymentDetails.createdId}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">{order.paymentDetails.email}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">${order.paymentDetails.amount}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">{order.paymentDetails.date}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">Fathe Store</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">${((order.paymentDetails.amount) * 0.03).toFixed(2)}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                                                <span
                                                    className="relative inline-block px-3 py-1  font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden
                                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span className="relative text-left">{order.status}</span>
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <Link to={`/dashboard/detailed-order/${order._id}`}>
                                                    <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">Edit</p>
                                                </Link>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p onClick={() => deleteOrderFunc(order._id)} className="text-white rounded whitespace-no-wrap text-left bg-red-500 cursor-pointer p-2 w-16">
                                                    Delete
                                                </p>
                                            </td>
                                        </tr>
                                    

                                    })
                                }



                            </tbody>
                        </table>
                        {/* <div
                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 10 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                <button
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>}
                {/* order part end  */}

            </div>

        </div>

    );
};

export default AllOrders;