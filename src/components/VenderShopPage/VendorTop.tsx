import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Inquery from './Inquery';

const VendorTop = () => {
    const { storeSlug } = useParams();
    const [productsDetails, setProductsDetails] = useState<any>([])
    useEffect(() => {
        fetch(`https://young-springs-82149.herokuapp.com/user/vendor/${storeSlug}`)
            .then(res => res.json())
            .then((data) => {
                setProductsDetails(data);

            })

    }, [storeSlug])

    console.log(productsDetails);

    let { storeBanner, storeEmail, storeLogo, storeName, phoneNumber } = productsDetails[0] || {};
    return (
        <div>
            <div className="">
                <div>
                    <img className='w-full h-80' src={storeBanner} alt="" />

                </div>

                <div className='bg-blue-900 h-36 text-left relative'>
                    <div className='absolute right-4 top-0' style={{ marginTop: '-50px' }}>
                        <button className='text-white text-lg uppercase bg-indigo-500 px-5 py-1 hover:bg-black'><Inquery /></button>

                    </div>
                    <div className='absolute z-10 ml-10 '>
                        <Link to="/"><img style={{ marginTop: '-100px' }} className="w-48 h-48 border-4" src={storeLogo} alt="" /></Link>
                    </div>

                    <div className='grid lg:grid-cols-1 grid-cols-1'>
                        {/* <div className='absolute mt-20 ml-14 text-orange-500'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div> */}
                        <div className='text-center z-10 pt-7 pb-3'>
                            <h2 className='text-white font-bold text-5xl'>{storeName}</h2>
                            <h2 className='text-white  '><i className="fa-solid fa-envelope pr-3"></i>{storeEmail}</h2>
                            <h2 className='text-white  '><i className="fa-solid fa-envelope pr-3"></i>{phoneNumber}</h2>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default VendorTop