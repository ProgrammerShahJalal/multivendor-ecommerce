import React from 'react';

const VendorSidebar = () => {
    return (
        <div>
            <div>
                {/* sidebar starts */}
                <div className='py-14 pl-3 mx-auto'>
                    <h2 className='uppercase font-bold text-lg text-left px-11 py-3'>Search</h2>
                    <input type="text" className=' bg-slate-100 text-slate-400 py-3 px-4 border border-slate-30 hover:border-indigo-300' placeholder='Search Products' />
                    {/* <Sidebar/> */}
                </div>
                {/* Sidebar */}
                <div className="col-span-1  px-4 pb-6 shadow rounded overflow-hidden">
                    <div className="divide-y divide-gray-200 space-y-5">
                        {/* Category Filter */}
                        <div>
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium mt-5">Categories</h3>
                            <div className='space-y-2'>
                                <div className='flex item-center'>
                                    <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Mens</label>
                                    <div className='ml-auto text-gray-600 text-sm'>(10)</div>
                                </div>
                                <div className='flex item-center'>
                                    <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Womens</label>
                                    <div className='ml-auto text-gray-600 text-sm'>(15)</div>
                                </div>
                                <div className='flex item-center'>
                                    <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Kids</label>
                                    <div className='ml-auto text-gray-600 text-sm'>(18)</div>
                                </div>
                                <div className='flex item-center'>
                                    <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Gadgets</label>
                                    <div className='ml-auto text-gray-600 text-sm'>(9)</div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Vendors</h3>
                            <div className='space-y-2'>
                                <div className='flex item-center'>
                                    <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Under Armour</label>
                                    <div className='ml-auto text-gray-600 text-sm'></div>
                                </div>
                                <div className='flex item-center'>
                                    <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Denim</label>
                                    <div className='ml-auto text-gray-600 text-sm'></div>
                                </div>
                                <div className='flex item-center'>
                                    <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Dunhil Blue</label>
                                    <div className='ml-auto text-gray-600 text-sm'></div>
                                </div>
                                <div className='flex item-center'>
                                    <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Rolex</label>
                                    <div className='ml-auto text-gray-600 text-sm'></div>
                                </div>
                                <div className='flex item-center'>
                                    <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Denim</label>
                                    <div className='ml-auto text-gray-600 text-sm'></div>
                                </div>
                                <div className='flex item-center'>
                                    <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Titan</label>
                                    <div className='ml-auto text-gray-600 text-sm'></div>
                                </div>
                                <div className='flex item-center'>
                                    <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Unity Store</label>
                                    <div className='ml-auto text-gray-600 text-sm'></div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Section Start */}
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                            <div className="mt-4 flex items-center">
                                <input type="text" className='w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded' placeholder='min' />
                                <span className='mx-3 text-gray-500'>-</span>
                                <input type="text" className='w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded' placeholder='max' />
                            </div>
                        </div>
                        {/* Size Filter Section */}
                        <div className="pt-4 block">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Size</h3>
                            <div className="flex item-center gap-2">
                                {/* single size selector starts */}
                                <div className="size-selector">
                                    <input type="radio" name='size' className='hidden' id='xs' />
                                    <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        S
                                    </label>
                                </div>
                                <div className="size-selector">
                                    <input type="radio" name='size' className='hidden' id='xs' />
                                    <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        M
                                    </label>
                                </div>
                                <div className="size-selector">
                                    <input type="radio" name='size' className='hidden' id='xs' />
                                    <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        L
                                    </label>
                                </div>
                                <div className="size-selector">
                                    <input type="radio" name='size' className='hidden' id='xs' />
                                    <label htmlFor="size-xs" className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>
                                        XS
                                    </label>
                                </div>

                                <div className="pt-4 flex justify-center">
                                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium ">Color</h3>
                                    <div className="flex item-center gap-2">
                                        {/* Single Color Starts */}
                                        <div className="color-selctor">
                                            <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                                            <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "red" }}></label>
                                        </div>
                                        <div className="color-selctor">
                                            <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                                            <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "green" }}></label>
                                        </div>
                                        <div className="color-selctor">
                                            <input type="radio" name='color' className='hidden' color='red' id='color-red' />
                                            <label htmlFor="color" className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "blue" }}></label>
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

export default VendorSidebar;