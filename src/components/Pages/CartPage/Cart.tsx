import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decrement, getTotal, increment, removeItem } from '../../../redux/cartSlice'

export default function Cart() {
    const dispatch: any = useDispatch()
    const { cart, cartTotal } = useSelector((state: any) => state.cart)

    // const cartTotalQuantity = useSelector((state: any) => state.cart.cartTotalQuantity)
    // const cartTotal = useSelector((state: any) => state.cart.cartTotal)

    useEffect(() => {
        if (cart.length > 0) {
            dispatch(getTotal())
        }
    }, [cart, dispatch])



    return (
        <div>
            <div className="flex justify-center my-6">
                <div className="flex flex-col w-full p-8 text-gray-800 bg-white  pin-r pin-y md:w-4/5 lg:w-4/5">
                    <div className="flex-1">
                        <table className="w-full text-sm lg:text-base" cellSpacing="0">
                            <thead>
                                <tr className="h-12 uppercase">
                                    <th className="text-left  md:table-cell">Image</th>
                                    <th className="text-left">Product</th>
                                    <th className="text-left">Attributes</th>
                                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                                        <span className="lg:hidden" title="Quantity">Qtd</span>
                                        <span className="hidden lg:inline">Quantity</span>
                                    </th>
                                    <th className="hidden text-right md:table-cell">Unit price</th>
                                    <th className="text-right">Total price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.length === 0 ? "No Products Found" :
                                        cart.map(item => {
                                            console.log(item);

                                            return <tr>
                                                <td className="hidden pb-4 md:table-cell">

                                                    <img src={item.image} className="w-20 rounded" alt="Thumbnail" />

                                                </td>
                                                <td>

                                                    <p className="mb-2 md:ml-4">{item.title}</p>

                                                    <button onClick={() => dispatch(removeItem(item))} type="submit" className="text-red-700 md:ml-4">
                                                        <small>(Remove item)</small>
                                                    </button>


                                                </td>
                                                <td>
                                                    {item.attributes ? item.attributes.map(attr => <span><b>{attr.name}</b>: {attr.value}</span>) : 'N/A'}
                                                </td>
                                                <td className="justify-center md:justify-end md:flex mt-6">
                                                    <div className="w-28 h-10">
                                                        <div className="relative flex flex-row w-full h-8 border">
                                                            <button className='bg-gray-200 px-3' onClick={() => dispatch(decrement(item))}>-</button>
                                                            <input type="text" value={item.cartQuantity}
                                                                className="w-full font-semibold text-center text-gray-700 border-none  outline-none focus:outline-none hover:text-black focus:text-black" />
                                                            <button className='bg-gray-200 px-3' onClick={() => dispatch(increment(item))}>+</button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="hidden text-right md:table-cell">
                                                    <span className="text-sm lg:text-base font-medium">
                                                        ${item.price}
                                                    </span>
                                                </td>
                                                <td className="text-right">
                                                    <span className="text-sm lg:text-base font-medium">
                                                        ${item.price * item.cartQuantity}
                                                    </span>
                                                </td>
                                            </tr>
                                        })
                                }

                            </tbody>
                        </table>
                        <hr className="pb-6 mt-6" />
                        <div className="my-4 mt-6 -mx-2 lg:flex">
                            <div className="lg:px-2 lg:w-1/2">
                                <div className="p-4 bg-gray-100 rounded-full">
                                    <h1 className="ml-2 font-bold uppercase">Coupon Code</h1>
                                </div>
                                <div className="p-4">
                                    <p className="mb-4 italic">If you have a coupon code, please enter it in the box below</p>
                                    <div className="justify-center md:flex">
                                    </div>
                                </div>
                                <div className="p-4 mt-6 bg-gray-100 rounded-full">
                                    <h1 className="ml-2 font-bold uppercase">Instruction for seller</h1>
                                </div>
                                <div className="p-4">
                                    <p className="mb-4 italic">If you have some information for the seller you can leave them in the box below</p>
                                    <textarea className="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
                                </div>
                            </div>
                            <div className="lg:px-2 lg:w-1/2">
                                <div className="p-4 bg-gray-100 rounded-full">
                                    <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                                </div>
                                <div className="p-4">
                                    <p className="mb-6 italic">Shipping and additionnal costs are calculated based on values you have entered</p>
                                    <div className="flex justify-between border-b">
                                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                            Subtotal
                                        </div>
                                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                            ${cartTotal}
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-4 border-b">
                                        <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                                            <form action="" method="POST">
                                                <button type="submit" className="mr-2 mt-1 lg:mt-2">
                                                    <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" className="w-4 text-red-600 hover:text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z" /></svg>
                                                </button>
                                            </form>
                                            Coupon "90off"
                                        </div>
                                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                                            $-0
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-4 border-b">
                                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                            New Subtotal
                                        </div>
                                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                            $0
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-4 border-b">
                                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                            Tax
                                        </div>
                                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                            $0
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-4 border-b">
                                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                            Total
                                        </div>
                                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                            ${cartTotal}
                                        </div>
                                    </div>
                                    {cart.length === 0 ?
                                        <button className="flex justify-center w-full px-10 py-3 mt-6 cursor-default font-medium text-white uppercase bg-gray-300 rounded-full shadow item-center hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                                            <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                                            <span className="ml-2 mt-5px">Proceed to checkout</span>
                                        </button>
                                        : <Link to='/checkout'>
                                            <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                                                <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                                                <span className="ml-2 mt-5px">Proceed to checkout</span>
                                            </button>
                                        </Link>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}