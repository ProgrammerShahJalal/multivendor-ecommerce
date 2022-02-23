import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RelatedProducts from '../RelatedProducts/RelatedProducts';


const SingleProduct = () => {
    const {kidsId} = useParams(); 
    
    
   
    
//    kids 
    const [productsDetails, setProductsDetails] = useState<any>([])
    useEffect(() => {
        fetch("https://morning-inlet-49130.herokuapp.com/kids")
            .then(res => res.json())
            .then((data) => {console.log(data)
                const foundProduct = data.filter((product:any):any => product._id === kidsId)
                
                setProductsDetails(foundProduct);

            })
            
    }, [kidsId])
    console.log(productsDetails);

    let { title,details,vendorName,category,salePrice,price,size,color,rating,leftItems,offerTill,img } = productsDetails[0] || {};

  

   

   

    
    
    return (
       <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-2">
          <div  className="h-64 md:h-80 md:mb-10 rounded-lg bg-gray-100  flex items-center justify-center" >
              <img className='w-full h-full' src={img} alt="logo" />
          </div>
        
      </div>
      <div className="md:flex-1 px-10 text-left">
          <h2 className='text-lg'>Home/{vendorName}</h2>
          <h3 className='text-4xl font-bold py-3'>{title}</h3>
          <p className='py-5'>{details}</p>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-2xl text-blue-500 font-semibold"> Sale Price  <span className='fw-blod text-3xl'>{salePrice}</span></p>
            <p className="text-sm text-gray-400 line-through"> Price  {price}</p>
        </div>
          
            <p className="text-xl text-pink-500 ">Our LeftItems: {leftItems}</p>
            <br />
            
            <p className="text-xl text-pink-500 ">Our last Offer:  {offerTill}</p>
        
        {/* <div className="flex items-center">
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                            <div className="text-xs text-gray-500 ml-3">(1)</div>
                        </div> */}
        <div className="flex items-baseline mb-1 space-x-2">
            
         <select className='my-3 text-lg block  py-2 border' >
              <option>Select Size</option>
              <option>{size}</option>
              {/* <option>XXL</option>
              <option>L</option>
              <option>M</option>
              <option>S</option> */}

          </select>
        <select className='my-3 text-lg block  py-2 border' >
            
               <option>Color</option>
              <option>{color}</option>
              {/* <option>white</option>
              <option>L</option>
              <option>red</option>
              <option>green</option> */} 

          </select> 
           
        </div>
        
          
          <input type="number" className='w-14 h-12 pl-3 py-1 mr-5 text-lg border' value="1"/>
          <button type="button" className=" px-6 py-3 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
            Add to Cart
          </button>
          <div className="flex items-baseline mb-1 space-x-2 py-5">
          <button type="button" className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4 text-white rounded-xl">
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
          <h4 className='text-2xl mb-5'> category: <span className='text-sm'>{category}</span></h4>
          <h4><span className='text-2xl'>Share :</span> <Link to="/"><i className="fab fa-facebook px-2 text-xl"></i></Link> <Link to="/"><i className="fab fa-linkedin px-2 text-xl"></i></Link> <Link to="/"><i className="fab fa-twitter px-2 text-xl"></i></Link><Link to="/"> <i className="fab fa-instagram text-xl"></i></Link></h4>
          

       
      </div>
       </div>
       </div>

       
           <div className='bg-slate-300 mb-10 mt-10'>
           <h2 className='text-2xl text-center py-3'>Related Products</h2>
           </div>
           <RelatedProducts/>
           
           </div>
        
            

       
    ) 
};

export default SingleProduct;