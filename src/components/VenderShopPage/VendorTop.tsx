import React from 'react'
import { Link } from 'react-router-dom'

const VendorTop = () => {
    return (
        <div>
            <div>
                <div>
                    <img className='w-full h-80' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPogp2EySmA852FvfpuScP011dldVhz4FLyw&usqp=CAU" alt="" />

                </div>

                <div className='bg-slate-400 h-36 text-left relative'>
                    <div className='absolute right-4 top-0' style={{ marginTop: '-50px' }}>
                        <button className='text-white text-lg uppercase bg-indigo-500 px-5 py-1 hover:bg-black'><i className="fa-solid fa-question"></i> Inquiry</button>

                    </div>
                    <div className='absolute z-10 ml-10 '>
                        <Link to="/"><img style={{ marginTop: '-60px' }} src="https://cjxfits.biz/wp-content/plugins/wc-frontend-manager/assets/images/wcfmmp-blue.png" alt="" /></Link>
                    </div>

                    <div className='absolute mt-20 ml-14 text-orange-500'>
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
        </div>
    )
}

export default VendorTop