import React from 'react';
import { Link } from 'react-router-dom';
import VendorSidebar from '../VendorSidebar/VendorSidebar';


const VendorShopPage = () => {
    return (
        <div>
           
            <div>
                <div>
                    <img className='w-full h-80' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPogp2EySmA852FvfpuScP011dldVhz4FLyw&usqp=CAU" alt="" />
                    
                </div>
                
                <div className='bg-slate-800 h-36 text-left relative'>
                    <div className='absolute right-4 top-0'style={{marginTop:'-50px'}}>
                        <button className='text-white text-lg uppercase bg-indigo-500 px-5 py-1 hover:bg-black'><i className="fa-solid fa-question"></i> Inquiry</button>

                    </div>
                    <div className='absolute z-10 ml-10 '>
                        <Link to="/"><img  style={{marginTop:'-60px'}}  src="https://cjxfits.biz/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png" alt="" /></Link>
                        </div>

                        <div className='absolute mt-20 ml-14 '>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        </div>
                    <div className='absolute z-10 pl-48 pt-10'>
                    <h2 className='text-white font-bold text-2xl'>Sahara Banu</h2>
                    <h2 className='text-white  '><Link to="email"><i className="fa-solid fa-envelope pr-3"></i>saharabanu@gmail.com</Link></h2>
                </div>
                    

                </div>
                
            </div>
            {/* banner end  */}
            {/* card start  */}
                <div className='min-h-screen lg:flex md:flex-1  '>
                    {/* sidebar start */}
                    <div className='bg-slate-200 py-14 md:h-2/4'>
                            <h2 className='uppercase font-bold text-lg text-left px-11 py-3'>Search</h2>
                            <input type="text" className=' bg-slate-100 text-slate-400 py-3 px-4 border border-slate-30 hover:border-indigo-300' placeholder='Search Products'/>
                           <VendorSidebar/>
                    </div>
                    {/* sidebar end  */}

                    <div className='grid lg:grid-cols-3 gap-4 w-full px-10 py-20'>
                        {/* card 1 Start  */}
                       <div className='bg-white text-gray-700 shadow-lg rounded-md h-3/5 border overflow-hidden'>
                       <div>
                           <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="clothes" />
                          </div>
                           
                           <div className='p-5  flex flex-col gap-3 bg-gray-100'>
                                     <div className='flex items items-center gap-2'>
                                         <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Stock ready</span>
                                         <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Vendore Store</span>
                                     </div>
                                     <div>
                                         <h2 className='text-left font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap' title='Best Clothes Ever'>Best Clothes </h2>
                                     </div>
                                     <div className='text-left'>
                                         <span className='text-xl  font-bold'>$ 300.00</span>
                                         <div className='flex items-center gap-2 mt-1'>
                                            <span className='test-sm line-through opacity-50'>
                                                $ 500.00
                                            </span>
                                            <span className='bg-green-400 px-1 py-0.5 rounded-md text-xs text-white'>
                                                save 20%
                                            </span>
                                         </div>
                                            <span className='flex items-center mt-1 text-amber-400'>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                            <span className='text-sm ml-2 text-gray-500'>
                                                20k reviews
                                            </span>

                                            </span>
                                           <div className='mt-5 flex gap-2'> 
                                           <Link to="/">
                                                <button className='flex-grow flex justify-center items-center bg-yellow-500 hover:bg-yellow-500 transition rounded-md px-3 py-2'>
                                                 Add To Cart
                                                </button></Link>
                                                <Link to="/wishlist">
                                                <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                                <i className="fa-regular fa-heart opacity-50 pr-2"></i> Wishlist
                                                </button></Link>
                                                
                                           </div>
                                           

                                     </div>
                           </div>

                       </div>
                       {/* card 1 end  */}
                       <div className=' shadow-lg rounded-md h-3/5 border '>
                       <div>
                           <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="clothes" />
                          </div>
                           
                           <div className='p-5  flex flex-col gap-3 bg-gray-100'>
                                     <div className='flex items items-center gap-2'>
                                         <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Stock ready</span>
                                         <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Vendore Store</span>
                                     </div>
                                     <div>
                                         <h2 className='text-left font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap' title='Best Clothes Ever'>Best Clothes </h2>
                                     </div>
                                     <div className='text-left'>
                                         <span className='text-xl  font-bold'>$ 300.00</span>
                                         <div className='flex items-center gap-2 mt-1'>
                                            <span className='test-sm line-through opacity-50'>
                                                $ 500.00
                                            </span>
                                            <span className='bg-green-400 px-1 py-0.5 rounded-md text-xs text-white'>
                                                save 20%
                                            </span>
                                         </div>
                                            <span className='flex items-center mt-1 text-amber-400'>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                            <span className='text-sm ml-2 text-gray-500'>
                                                20k reviews
                                            </span>

                                            </span>
                                           <div className='mt-5 flex gap-2'> 
                                                
                                                <Link to="/">
                                                <button className='flex-grow flex justify-center items-center bg-yellow-500 hover:bg-yellow-500 transition rounded-md px-3 py-2'>
                                                 Add To Cart
                                                </button></Link>
                                                <Link to="/wishlist">
                                                <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                                <i className="fa-regular fa-heart opacity-50 pr-2"></i> Wishlist
                                                </button></Link>
                                                
                                           </div>
                                           

                                     </div>
                           </div>

                       </div>
                       <div className='bg-white text-gray-700 shadow-lg rounded-md h-3/5 border overflow-hidden'>
                       <div>
                           <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="clothes" />
                          </div>
                           
                           <div className='p-5  flex flex-col gap-3 bg-gray-100'>
                                     <div className='flex items items-center gap-2'>
                                         <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Stock ready</span>
                                         <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>Vendore Store</span>
                                     </div>
                                     <div>
                                         <h2 className='text-left font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap' title='Best Clothes Ever'>Best Clothes </h2>
                                     </div>
                                     <div className='text-left'>
                                         <span className='text-xl  font-bold'>$ 300.00</span>
                                         <div className='flex items-center gap-2 mt-1'>
                                            <span className='test-sm line-through opacity-50'>
                                                $ 500.00
                                            </span>
                                            <span className='bg-green-400 px-1 py-0.5 rounded-md text-xs text-white'>
                                                save 20%
                                            </span>
                                         </div>
                                            <span className='flex items-center mt-1 text-amber-400'>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                            <span className='text-sm ml-2 text-gray-500'>
                                                20k reviews
                                            </span>

                                            </span>
                                           <div className='mt-5 flex gap-2'> 
                                           <Link to="/">
                                                <button className='flex-grow flex justify-center items-center bg-yellow-500 hover:bg-yellow-500 transition rounded-md px-3 py-2'>
                                                 Add To Cart
                                                </button></Link>
                                                <Link to="/wishlist">
                                                <button className='flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/90 transition rounded-md px-6 py-2'>
                                                <i className="fa-regular fa-heart opacity-50 pr-2"></i> Wishlist
                                                </button></Link>
                                                
                                           </div>
                                           

                                     </div>
                           </div>

                       </div>
                       

                    </div>
                </div>
        </div>
    );
};

export default VendorShopPage;