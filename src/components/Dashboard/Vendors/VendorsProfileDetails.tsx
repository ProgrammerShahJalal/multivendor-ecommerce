import React from 'react';

const VendorProfileDetails = () => {
    return (

        <div className='container mx-auto  '>

            {/* vendor profile start  */}
            <div className="md:flex no-wrap md:-mx-2 py-12">
                {/* <!-- Left Side --> */}
                <div className="w-full md:w-3/12 md:mx-2">
                    {/* <!-- Profile Card --> */}
                    <div className="bg-white dark:bg-slate-800 p-3 border-t-4 border-indigo-600">
                        <div className="image overflow-hidden">
                            <img className="h-auto w-full mx-auto"
                                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                alt="" />
                        </div>
                        <h1 className="text-gray-900 dark:text-white font-bold text-xl leading-8 my-1">Hafsa Jahan Ohi</h1>
                        <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                            I am a gentle and kind person.
                        </p>
                        <ul
                            className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li className="flex items-center py-3">
                                <span>Status</span>
                                <span className="ml-auto"><span
                                    className="bg-indigo-600 py-1 px-2 rounded text-white text-sm">Active</span></span>
                            </li>
                            <li className="flex items-center py-3">
                                <span>Member since</span>
                                <span className="ml-auto">Feb 17, 2022</span>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End of profile card -->  */}


                </div>

                <div className="w-full md:w-9/12 mx-2 h-64">
                    {/* <!-- Profile tab -->
                <!-- About Section --> */}
                    <div className="bg-white dark:bg-slate-800 p-3 shadow-sm rounded-sm">
                        <div className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-white leading-8">
                            <span className="text-indigo-600">
                                <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span className="tracking-wide">About</span>
                        </div>
                        <div className="text-gray-700 text-left">
                            <div className="grid md:grid-cols-2 text-sm">
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">First Name</div>
                                    <div className="px-4 py-2">Jane</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Last Name</div>
                                    <div className="px-4 py-2">Doe</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Gender</div>
                                    <div className="px-4 py-2">Female</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                                    <div className="px-4 py-2">+11 998001001</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Current Address</div>
                                    <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                    <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Email.</div>
                                    <div className="px-4 py-2">
                                        <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="px-4 py-2 font-semibold">Birthday</div>
                                    <div className="px-4 py-2">Feb 06, 1998</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- End of about section --> */}

                    {/* <!-- Experience and education --> */}
                    <div className="bg-white dark:bg-slate-800 p-3 shadow-sm rounded-sm text-left">

                        <div className="grid grid-cols-2">
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-white leading-8 mb-3">
                                    <span className="text-indigo-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Experience</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    <li>
                                        <div className="text-teal-600">Owner at Her Company Inc.</div>
                                        <div className="text-gray-500 text-xs">January 2022 - Now</div>
                                    </li>



                                </ul>
                            </div>
                            <div>
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-white leading-8 mb-3">
                                    <span className="text-indigo-600">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path fill="#fff"
                                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">Education</span>
                                </div>
                                <ul className="list-inside space-y-2">
                                    <li>
                                        <div className="text-teal-600">Masters Degree in Oxford</div>
                                        <div className="text-gray-500 text-xs">March 2019 - completed</div>
                                    </li>
                                    <li>
                                        <div className="text-teal-600">Bachelors Degreen in LPU</div>
                                        <div className="text-gray-500 text-xs">March 2017 - completed</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:flex space-x-4 my-12">
                            <div className="flex items-center justify-around p-6 bg-white dark:bg-slate-800 w-64 rounded-xl space-x-2 mt-10 shadow-lg">
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
                            <div className="flex items-center justify-around p-6 bg-white dark:bg-slate-800 w-64 rounded-xl space-x-2 mt-10 shadow-lg">
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
                            <div className="flex items-center justify-around p-6 bg-white dark:bg-slate-800 w-64 rounded-xl space-x-2 mt-10 shadow-lg">
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
                            <div className="flex items-center justify-around p-6 bg-white dark:bg-slate-800 w-64 rounded-xl space-x-2 mt-10 shadow-lg">
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
                        </div>

                    </div>

                </div>
            </div>
            {/* vendor profile end  */}




        </div>

    );
};

export default VendorProfileDetails;