import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// interface ProductState {
//     products: {
//         id:string
//         title: string
//         details:string
//         leftItems:string
//         offerTill:string
//         img: string
//         hoverImg:string
//         size: string
//         vendorName: string
//         category:string
//         rating: number
//         price: number
//         salePrice: number
//     }[]
// }

const SingleProduct = () => {
    const {kidsId} = useParams();
    const [product, setProduct]= useState({})
    
    return (
       <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-2">
          <div  className="h-64 md:h-80 md:mb-10 rounded-lg bg-gray-100  flex items-center justify-center" >
              <img className='w-full h-full' src="" alt="logo" />
          </div>
        
      </div>
      <div className="md:flex-1 px-10 text-left">
          <h2 className='text-lg'>Home/T-shirt</h2>
          <h3 className='text-4xl font-bold py-3'>Men' t-shirts</h3>
          <p className='py-5'>Machine Washable. Officially Licensed from Minecraft Merchandise</p>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-2xl text-blue-500 font-semibold">Product sale Price $ <span className='fw-blod text-3xl'>34</span></p>
            <p className="text-sm text-gray-400 line-through">Product Price $45</p>
        </div>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-pink-500 ">Product LeftItems 50</p>
            <p className="text-xl text-pink-500 ">Product OfferTill 22 March</p>
        </div>
        {/* <div className="flex items-center">
            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            <div className="text-xs text-gray-500 ml-3">(1)</div>
                        </div> */}
        <div className="flex items-baseline mb-1 space-x-2">
        <select className='my-3 text-lg block  py-2 border' >
              <option>Select Size</option>
              <option>XL</option>
              <option>XXL</option>
              <option>L</option>
              <option>M</option>
              <option>S</option>

          </select>
        <select className='my-3 text-lg block  py-2 border' >
              <option>Color</option>
              <option>black</option>
              <option>white</option>
              <option>L</option>
              <option>red</option>
              <option>green</option>

          </select>
           
        </div>
        
          
          <input type="number" className='w-14 h-12 pl-3 py-1 mr-5 text-lg border' value="1"/>
          <button type="button" className=" px-6 py-3 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
            Add to Cart
          </button>
          <div className="flex items-baseline mb-1 space-x-2 py-5">
          <button type="button" className="bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-5 text-white rounded-xl">
            Buy Now
          </button>
          <button type="button" className="text-xl px-3 hover:text-red-600">
          <i className="fa-solid fa-heart"></i> Wishlist
          </button>
          <button type="button" className=" text-xl px-3 hover:text-red-600">
          <i className="fa-solid fa-code-compare"></i> Compare
          </button>
          
          </div>

          
          

          <div className='border w-full mb-5'></div>
          <h4 className='text-2xl mb-5'> category: <span className='text-sm'>Arong</span></h4>
          <h4><span className='text-2xl'>Share :</span> <i className="fab fa-facebook px-2 text-xl"></i> <i className="fab fa-linkedin px-2 text-xl"></i> <i className="fab fa-twitter px-2 text-xl"></i> <i className="fab fa-instagram text-xl"></i></h4>
          

       
      </div>
       </div>
       </div>

       <div>
           
           <div className="container px-10 pb-16  items-center justify-center">
           <div className='bg-slate-300 mb-5'>
           <h2 className='text-2xl text-center py-3'>Related Products</h2>
           </div>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 gap-6">
        
<div className="bg-white shadow-inner overflow-hidden single-card group">
                <div className="relative">
                <div style={{height:'250px'}} className='z-100 overflow-hidden'>
                                <img src="https://target.scene7.com/is/image/Target/GUEST_baad086d-2747-458e-94c6-3420c895415c?qlt=85&fmt=&hei=325&wid=325" className='w-full img z-0 transition object-cover' alt="" />
                                <img src="https://i.ibb.co/RPK9GVL/item-2.jpg" className='w-full hoverImg transition object-cover' alt="" />
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
                <div style={{height:'200px'}} className="pt-4 gb-3 px-4">
                        <a href="/">
                            <h4 className="font-medium text-xl mb-2 text-grey-800  transition">Minecraft Boys' Pajama Set</h4>
                            <h5 className="font-bold text-sm mb-2 text-grey-800 transition">from Minecraft Store</h5>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-indigo-500 font-semibold">salePrice:$22</p>
                            <p className="text-sm text-gray-400 line-through">Price:$26</p>
                        </div>
                        {/* <div className="flex items-center">
                        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            <div className="text-xs text-gray-500 ml-3">(1)</div>
                        </div> */}
                    </div>
                    <button className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>Add to Cart</button>
 </div>
<div className="bg-white shadow-inner overflow-hidden single-card group">
                <div className="relative">
                <div style={{height:'250px'}} className='z-100 overflow-hidden'>
                                <img src="https://target.scene7.com/is/image/Target/GUEST_baad086d-2747-458e-94c6-3420c895415c?qlt=85&fmt=&hei=325&wid=325" className='w-full img z-0 transition object-cover' alt="" />
                                <img src="https://i.ibb.co/RPK9GVL/item-2.jpg" className='w-full hoverImg transition object-cover' alt="" />
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
                <div style={{height:'200px'}} className="pt-4 gb-3 px-4">
                        <a href="/">
                            <h4 className="font-medium text-xl mb-2 text-grey-800  transition">Minecraft Boys' Pajama Set</h4>
                            <h5 className="font-bold text-sm mb-2 text-grey-800 transition">from Minecraft Store</h5>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-indigo-500 font-semibold">salePrice:$22</p>
                            <p className="text-sm text-gray-400 line-through">Price:$26</p>
                        </div>
                        {/* <div className="flex items-center">
                        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            <div className="text-xs text-gray-500 ml-3">(1)</div>
                        </div> */}
                    </div>
                    <button className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>Add to Cart</button>
 </div>
<div className="bg-white shadow-inner overflow-hidden single-card group">
                <div className="relative">
                <div style={{height:'250px'}} className='z-100 overflow-hidden'>
                                <img src="https://target.scene7.com/is/image/Target/GUEST_baad086d-2747-458e-94c6-3420c895415c?qlt=85&fmt=&hei=325&wid=325" className='w-full img z-0 transition object-cover' alt="" />
                                <img src="https://i.ibb.co/RPK9GVL/item-2.jpg" className='w-full hoverImg transition object-cover' alt="" />
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
                <div style={{height:'200px'}} className="pt-4 gb-3 px-4">
                        <a href="/">
                            <h4 className="font-medium text-xl mb-2 text-grey-800  transition">Minecraft Boys' Pajama Set</h4>
                            <h5 className="font-bold text-sm mb-2 text-grey-800 transition">from Minecraft Store</h5>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-indigo-500 font-semibold">salePrice:$22</p>
                            <p className="text-sm text-gray-400 line-through">Price:$26</p>
                        </div>
                        {/* <div className="flex items-center">
                        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            <div className="text-xs text-gray-500 ml-3">(1)</div>
                        </div> */}
                    </div>
                    <button className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>Add to Cart</button>
 </div>
<div className="bg-white shadow-inner overflow-hidden single-card group">
                <div className="relative">
                <div style={{height:'250px'}} className='z-100 overflow-hidden'>
                                <img src="https://target.scene7.com/is/image/Target/GUEST_baad086d-2747-458e-94c6-3420c895415c?qlt=85&fmt=&hei=325&wid=325" className='w-full img z-0 transition object-cover' alt="" />
                                <img src="https://i.ibb.co/RPK9GVL/item-2.jpg" className='w-full hoverImg transition object-cover' alt="" />
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
                <div style={{height:'200px'}} className="pt-4 gb-3 px-4">
                        <a href="/">
                            <h4 className="font-medium text-xl mb-2 text-grey-800  transition">Minecraft Boys' Pajama Set</h4>
                            <h5 className="font-bold text-sm mb-2 text-grey-800 transition">from Minecraft Store</h5>
                        </a>
                        <div className="flex items-baseline mb-1 space-x-2">
                            <p className="text-xl text-indigo-500 font-semibold">salePrice:$22</p>
                            <p className="text-sm text-gray-400 line-through">Price:$26</p>
                        </div>
                        {/* <div className="flex items-center">
                        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            <div className="text-xs text-gray-500 ml-3">(1)</div>
                        </div> */}
                    </div>
                    <button className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>Add to Cart</button>
 </div>
        
            </div>
        </div>
       </div>

       </div>
    ) 
};

export default SingleProduct;