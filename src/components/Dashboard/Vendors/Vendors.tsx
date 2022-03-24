import React, { useEffect, useState } from 'react';
import VendorsSearchField from './VendorsSearchField';
import { Link, } from 'react-router-dom';

const Vendors = () => {
    const [vendors, setVendors] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        fetch('https://young-springs-82149.herokuapp.com/user/vendors')
            .then(res => res.json())
            .then(data => setVendors(data))

    }, [])
    const deleteVendor = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setIsLoading(true)
            fetch(`https://young-springs-82149.herokuapp.com/dashboard/vendor-delete/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert('Product Deleted')
                        const remainingVendors = vendors.filter(vendor => vendor._id !== id)
                        setVendors(remainingVendors)
                    }

                })
                .finally(() => setIsLoading(false))
        }
    }

    return (
        <>
            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-4'>
                    {/* user part 1  */}
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight text-left">Vendors</h2>
                    </div>
                    <div>
                        <VendorsSearchField />
                    </div>
                    {/* user part end  */}

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
                                            Vendor
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Mobile Number
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Email Address
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

                                    {
                                        vendors.map((vendor: any) => (
                                            <tr key={vendor._id}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                    <span className="flex items-center">
                                                        <span className="flex-shrink-0 w-10 h-10">
                                                            {/* <img className="w-full h-full rounded-full"
                                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                            alt="" /> */}
                                                            <img className="w-full h-full rounded-full"
                                                                src={vendor.storeLogo}
                                                                alt="" />
                                                        </span>
                                                        <span className="ml-3">
                                                            <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                                                {vendor.storeName}
                                                            </p>
                                                        </span>
                                                    </span>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                    <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">{vendor.phoneNumber}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                    <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">{vendor.storeEmail}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                    <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">
                                                        {vendor.date}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm text-left">
                                                    <span
                                                        className={`relative inline-block px-3 py-1  font-semibold ${vendor.status === "Active" ? "text-green-900" : "text-white"} leading-tight`}>
                                                        <span aria-hidden
                                                            className={`absolute inset-0 ${vendor.status === "Active" ? "bg-green-200" : "bg-red-500"}  rounded-full`}></span>
                                                        <span className="relative text-left">{vendor.status}</span>
                                                    </span>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                    <Link to={`/dashboard/user/vendor/${vendor.storeSlug}`}>
                                                        <p className="text-white rounded whitespace-no-wrap text-center bg-indigo-600 p-2 w-16">
                                                            Profile
                                                        </p>
                                                    </Link>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                    <p onClick={() => deleteVendor(vendor._id)} className="cursor-pointer text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                                        Delete
                                                    </p>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    {/* first order end  */}
                                </tbody>
                            </table>
                            {/* <div
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
                        </div> */}
                        </div>
                    </div>
                    {/* order part end  */}

                </div>
            </div>
        </>

    );
};

export default Vendors;