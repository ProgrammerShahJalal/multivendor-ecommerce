import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../../../hooks/UseAuth';
import { DeleteProductApi } from '../../../../../Services/DashboardProducts/DeleteProductApi';
import ProductImportModal from '../../ProductImportExportModal/ProductImportExportModal';
type IProduct = {
    _id: string,
    title: string,
    offerDate: string
    product_des: string
    reg_price: string
    sale_price: string
    stock: string
    attributes: [{
        label: string
        value: string
    }]
    brand: string
    categories: [{
        label: string,
        selected: [{
            label: string,
            value: string
        }]
    }]
    images: [
        {
            id: string
            src: string
        }
    ]
}
const Products = () => {
    const [products, setProducts] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false);
    const { userDetails } = UseAuth()
    useEffect(() => {
        if (userDetails.email && userDetails.role === 'vendor') {
            setIsLoading(true)
            fetch(`https://young-springs-82149.herokuapp.com/products/${userDetails.email}`)
                .then(res => res.json())
                .then(data => setProducts(data))
                .finally(() => setIsLoading(false))
        } else if (loading) {
            setIsLoading(true)
            fetch('https://young-springs-82149.herokuapp.com/products')
                .then(res => res.json())
                .then(data => setProducts(data))
                .finally(() => setIsLoading(false))
        } else {
            setIsLoading(true)
            fetch('https://young-springs-82149.herokuapp.com/products')
                .then(res => res.json())
                .then(data => setProducts(data))
                .finally(() => setIsLoading(false))
        }

    }, [userDetails.email, userDetails.role, loading])
    console.log(loading, 'loading');


    const deleteProduct = (id) => {
        DeleteProductApi(id, setIsLoading, products, setProducts)
    }


    return (

        <div className='container mx-auto px-4 sm:px-8'>
            <div className='py-4'>

                <div>
                    <h2 className="text-2xl font-semibold leading-tight text-left">Products</h2>
                </div>
                <div className="my-2 flex sm:flex-row flex-col justify-between">

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
                    <div>
                        <button className='inline-flex justify-center py-2 px-4 border border-transparent drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={() => setShowModal(!showModal)}>Import</button>
                        {showModal ? <ProductImportModal setProducts={setProducts} products={products} showModal={showModal} setShowModal={setShowModal} setLoading={setLoading} /> : ""}
                    </div>
                </div>

                {/* order part start */}
                {isLoading ? <span className='flex justify-center'><CircularProgress color="inherit" /></span> : <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                {/* heading start  */}
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Image
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Product Name
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Stock
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Categories
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Vendor
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                                {/* heading end  */}
                            </thead>
                            <tbody>
                                {/* first order start */}
                                {
                                    products.map(product => {
                                        console.log(product, 'product');

                                        return <tr key={product._id}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">

                                                        <img className="w-full h-full rounded-full" src={product?.images[0]?.src ?? 'https://healthpointplus.com/wp-content/uploads/woocommerce-placeholder-300x300.png'} alt="" />
                                                    </div>

                                                </div>
                                            </td>
                                            <td className="px-1 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">{product.title}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">${product.sale_price | product.reg_price}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">
                                                    {product.stock}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm text-left">
                                                <span
                                                    className="relative inline-block px-3 py-1  font-semibold text-green-900 leading-tight">
                                                    {/* {product.categories.map(({ label }) => label)} */}
                                                    {/* {product?.categories[0]?.label} */}
                                                    {/* <span aria-hidden
                                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span className="relative text-left">Delivered</span> */}
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                Admin
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm flex">
                                                <Link to={`/dashboard/edit-product/${product._id}`}>
                                                    <button className="cursor-pointer text-white rounded whitespace-no-wrap mr-2 text-left bg-indigo-500 p-2 mb-1 w-10">
                                                        Edit
                                                    </button>
                                                </Link>
                                                <p onClick={() => deleteProduct(product._id)} className="cursor-pointer bg-red-500 text-white rounded whitespace-no-wrap mr-2 p-2 mb-1 w-16">
                                                    Delete
                                                </p>
                                            </td>
                                        </tr>
                                    })
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
                </div>}
                {/* order part end  */}

            </div>

        </div>

    );
};

export default Products;