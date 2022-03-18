import React from 'react';

const Vendors = () => {
    return (

        <div className='container mx-auto px-4 sm:px-8'>
            <div className='py-4'>
                {/* user part 1  */}
                <div>
                    <h2 className="text-2xl font-semibold leading-tight text-left">Vendors</h2>
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
                            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white dark:bg-slate-800 text-sm placeholder-gray-400 text-gray-700 focus:bg-white dark:bg-slate-800 focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                </div>

                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                {/* heading start  */}
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Store
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        phone Number
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

                                </tr>
                                {/* heading end  */}
                            </thead>
                            <tbody>
                                {/* first order start */}
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                                    Vera Carpenter
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                        <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">Mobile iPhone</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                        <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">300.00tk</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                        <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">
                                            Feb 21, 2022
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm text-left">
                                        <span
                                            className="relative inline-block px-3 py-1  font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span className="relative text-left">Active</span>
                                        </span>
                                    </td>
                                    <td className="flex gap-2 px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                        <p className="dark:text-white rounded whitespace-no-wrap text-left text-white bg-indigo-600 p-2 w-10">
                                            Edit
                                        </p>
                                        <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                        <div
                            className="px-5 py-5 bg-white dark:bg-slate-800 border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm text-gray-900 dark:text-white">
                                Showing 1 to 10 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                <button
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-r">
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

export default Vendors;