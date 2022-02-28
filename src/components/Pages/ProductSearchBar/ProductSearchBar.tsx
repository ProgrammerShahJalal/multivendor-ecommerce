import React, { useState, useLayoutEffect } from 'react';
import { Rating } from "@mui/material";

interface ProductState {
    products: {
        title: string
        img: string
        hoverImg: string
        price: number
        salePrice: number
        size: string
        vendorName: string
        rating: number
    }[]
}


const ProductSearchBar: React.FunctionComponent = () => {
    const [products, setProducts] = useState<ProductState["products"]>
        ([]);

    useLayoutEffect(() => {


        fetch('https://morning-inlet-49130.herokuapp.com/mens')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    // console.log(products);
    const [productList, setProductList] = useState<any>();
    const [text, setText] = useState<string>('');

    const handleOnChange = (event: any) => {
        // setText(event.target.value);
        const searchText = event.target.value.toLowerCase();
        const findProduct: any = products && products.length > 0 ? products?.filter(p => p?.title.toLowerCase().includes(searchText)) : undefined;
        setProductList(findProduct);
        console.log(findProduct, "Product");
    }

    return (
        <div className="container mx-auto py-5 my-4">
            <div className="text-xl text-center p-4">
                <input
                    className='text-center border w-96 py-2 rounded-full'
                    type='text'
                    placeholder="Search Product"
                    onChange={handleOnChange}
                />
            </div>

            <div className="text-xl text-center">
                {
                    productList && productList?.length === 0 && (
                        <div className="text-xl text-center text-red-800"> No Product Found </div>
                    )
                }

                <div className="grid place-content-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
                    {productList && productList?.length > 0 && productList?.map((product: any) =>

                    (<div className="bg-white shadow-inner overflow-hidden single-card group">
                        <div className="relative">
                            <div style={{ height: '250px' }} className='z-100 overflow-hidden'>
                                <img src={product.hoverImg} className='w-full img z-0 transition object-cover' alt="" />
                                <img src={product.img} className='w-full hoverImg transition object-cover' alt="" />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                                    <i className="fa-regular fa-magnifying-glass"></i>
                                </a>
                                <a className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                                    <i className="fa-regular fa-heart"></i>
                                </a>
                            </div>

                        </div>
                        <div style={{ height: '200px' }} className="pt-4 gb-3 px-4">
                            <a href="/">
                                <h4 className="font-medium text-xl mb-2 text-grey-800  transition">{product.title}</h4>
                                <h5 className="font-bold text-sm mb-2 text-grey-800 transition">from {product.vendorName}</h5>
                            </a>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-indigo-500 font-semibold">{product.salePrice}</p>
                                <p className="text-sm text-gray-400 line-through">{product.price}</p>
                            </div>
                            <div className="flex items-center">
                                <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                                <div className="text-xs text-gray-500 ml-3">(1)</div>
                            </div>
                        </div>
                        <button className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>Add to Cart</button>
                    </div>)
                    )}
                </div>


            </div>
        </div>
    );
};

export default ProductSearchBar;