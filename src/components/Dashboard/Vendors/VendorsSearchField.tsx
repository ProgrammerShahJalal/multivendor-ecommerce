import React, { useLayoutEffect, useState } from 'react';

interface VendorState {
    vendors: {
        storeName: string
        storeLogo: string
        phoneNumber: string
        storeEmail: string
    }[]
}

const VendorsSearchField: React.FunctionComponent = () => {
    const [vendors, setVendors] = useState<VendorState["vendors"]>([]);
    const [vendorList, setVendorList] = useState<any>();
    useLayoutEffect(() => {
        fetch('https://guarded-ocean-73313.herokuapp.com/user/vendors')
            .then(res => res.json())
            .then(data => setVendors(data));
    }, []);

    const handleOnChange = (event: any) => {
        const searchText = event.target.value.toLowerCase();
        const findVendor = vendors && vendors.length > 0 ? vendors?.filter(vendor => vendor?.storeName.toLowerCase().includes(searchText)) : undefined;
        setVendorList(findVendor);
        // console.log(findVendor, "vendor");
        if (searchText === "") {
            setVendorList("");
        }
    }
    return (
        <div>
            <div className="my-2 flex sm:flex-row flex-col">

                <div className="block relative">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input onChange={handleOnChange} placeholder="Search"
                        className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white dark:bg-slate-800 text-sm placeholder-gray-400 text-gray-700 focus:bg-white dark:bg-slate-800 focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
            </div>

            <div className="text-xl">
                {
                    vendorList && vendorList?.length === 0 && (
                        <div className="text-xl font-bold text-red-600"> This Type Of Vendor Is Not Available Now</div>
                    )
                }
            </div>

            <tbody>
                {/* first order start */}

                {
                    vendorList && vendorList?.length > 0 && vendors.map((vendor: any) => (
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 w-10 h-10">
                                        <img className="w-full h-full rounded-full"
                                            src={vendor.storeLogo}
                                            alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                            {vendor.storeName}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">{vendor.phoneNumber}</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">{vendor.storeEmail}</p>
                            </td>
                            {/* <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">
                                    Feb 21, 2022
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm text-left">
                                <span
                                    className="relative inline-block px-3 py-1  font-semibold text-green-900 leading-tight">
                                    <span aria-hidden
                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                    <span className="relative text-left">Delivered</span>
                                </span>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                <p className="text-gray-900 dark:text-white rounded whitespace-no-wrap text-left bg-green-200 p-2 w-10">
                                    Edit
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                <p className="text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                    Delete
                                </p>
                            </td> */}
                        </tr>
                    ))
                }

            </tbody>
        </div>
    );
};

export default VendorsSearchField;