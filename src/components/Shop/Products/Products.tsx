import React, { useEffect } from 'react';
import GridView from '../../CollectionGrid/GridView';
import { useState } from 'react';
import ListView from '../../ListView/ListView';

interface DataState {
    dataCategory: {
        title: string
        img: string
        hoverImg: string
        price: number
        salePrice: number
        size: string
        vendorName: string
        rating: number
        category: string
    }[]
}


const Products = () => {
    const [gridShow, setGridShow] = useState(true);

    const [dataCategory, setDataCategory] = useState<DataState["dataCategory"]>
        ([]);

    useEffect(() => {
        if (dataCategory) {

            fetch('https://morning-inlet-49130.herokuapp.com/products')
                .then(res => res.json())
                .then(data => setDataCategory(data))
        }
    }, [dataCategory])
    const filterResult = (catItem: string) => {
        const result = dataCategory.filter(curData => {
            return curData.category === catItem
        });
        setDataCategory(result);
    }
    return (
        <div>
            <div>
                {/* sidebar starts */}
                <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 pt-4 pb-16 item-start">
                    {/* Sidebar */}
                    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
                        <div className="divide-y divide-gray-200 space-y-5">
                            {/* Category Filter */}
                            <div>
                                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                                <div className='space-y-2'>
                                    <div className='flex item-center'>
                                        <input type="checkbox" id='cat-1' className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                        <label onClick={() => { filterResult('men') }} htmlFor="cat-1" className='text-gray-600 ml-3 cursor-pointer'>Mens</label>
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
                    <div className="col-span-3 mb-4">
                        <select className='w-44 text-sm text-gray-600 px-4 border-gray-300 shadow-sm rounded focus:ring-red-500'>
                            <option>Default Sorting</option>
                            <option>Price low to high</option>
                            <option>Price high to low</option>
                            <option>Latest product</option>
                        </select>
                        <div className='flex justify-end -mt-8 gap-3 mr-6'>
                            <button className={gridShow === true ? 'bg-indigo-500 rounded-sm text-white p-2' : 'text-indigo-500 border-indigo-500 rounded-sm border p-2'} onClick={() => setGridShow(true)}><i className="fa-thin h-7 w-7 fa-grid text-2xl"></i></button>
                            <br />
                            <button className={gridShow === false ? 'bg-indigo-500 rounded-sm text-white p-2' : 'text-indigo-500 border border-indigo-500 p-2 rounded-sm'} onClick={() => setGridShow(false)}><i className="fa-thin fa-list h-7 w-7 text-2xl"></i></button>
                        </div>
                        <br />
                        {
                            gridShow ? <GridView /> : <ListView />
                        }
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Products;