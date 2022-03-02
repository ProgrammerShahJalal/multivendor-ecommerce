import React from 'react';

const Users = () => {
    return (

        <div className='container mx-auto px-4 sm:px-8'>
            <div className='py-4'>
                {/* user part 1  */}
                <div>
                    <h2 className="text-2xl font-semibold leading-tight text-left">Users</h2>
                </div>
                <div className="my-2 flex sm:flex-row flex-col">

                    <div className="block relative">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input placeholder="Search"
                            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                </div>
                {/* user part end  */}
                {/* total part start  */}
                {/* <div className="lg:flex space-x-4 py-12">
                    <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                        <div>
                            <span className="text-sm font-semibold text-gray-400">Total Orders</span>
                            <h1 className="text-2xl font-bold">$682.5</h1>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                        <div>
                            <span className="text-sm font-semibold text-gray-400">Total Earned</span>
                            <h1 className="text-2xl font-bold">$20679.00</h1>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                        <div>
                            <span className="text-sm font-semibold text-gray-400">Total Products</span>
                            <h1 className="text-2xl font-bold">79</h1>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
                        <div>
                            <span className="text-sm font-semibold text-gray-400">Ratings</span>
                            <p className="text-xl font-bold">5 star</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div> */}
                {/* total part end  */}
                {/* order part start */}
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                {/* heading start  */}
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Product Name
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
                                {/* first order start */}
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Vera Carpenter
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">Mobile iPhone</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">
                                            Feb 21, 2022
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1  font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Delivered</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                            Edit
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>
                                {/* first order end  */}
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">
                                                    Dana Moore
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">T-shirt</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">
                                            Jan 10, 2022
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Suspended</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                            Edit
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>


                                <tr>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">
                                                    Alonzo Cox
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">Camera</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">March 18, 2022</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Shipped</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                            Edit
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">
                                                    Alonzo Cox
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">Camera</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">March 18, 2022</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Shipped</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                            Edit
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">
                                                    Alonzo Cox
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">Camera</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">March 18, 2022</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Shipped</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                            Edit
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">
                                                    Alonzo Cox
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">Camera</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">March 18, 2022</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Shipped</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                            Edit
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">
                                                    Alonzo Cox
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">Camera</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">March 18, 2022</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Shipped</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                            Edit
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">
                                                    Alonzo Cox
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">Camera</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">March 18, 2022</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Shipped</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                            Edit
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">
                                                    Alonzo Cox
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">Camera</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">March 18, 2022</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Shipped</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                            Edit
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">
                                                    Alonzo Cox
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">Camera</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">March 18, 2022</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Shipped</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                            Edit
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap text-left">
                                                    Alonzo Cox
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">Camera</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap text-left">March 18, 2022</p>
                                    </td>
                                    <td className="px-5 py-5 bg-white text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Shipped</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                            Edit
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div
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
                        </div>
                    </div>
                </div>
                {/* order part end  */}

            </div>

        </div>

    );
};

export default Users;