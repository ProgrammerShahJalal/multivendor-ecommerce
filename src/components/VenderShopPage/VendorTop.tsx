import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Inquery from './Inquery';

const VendorTop = () => {
    const { storeSlug } = useParams();


    const [productsDetails, setProductsDetails] = useState<any>([])
    useEffect(() => {
        fetch(`https://guarded-ocean-73313.herokuapp.com/user/vendor/${storeSlug}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setProductsDetails(data);

            })

    }, [storeSlug])

    console.log(productsDetails);

    let { storeBanner, firstName, lastName, storeEmail, storeLogo } = productsDetails[0] || {};
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
                        <Link to="/"><img style={{ marginTop: '-60px' }} className="w-20 h-20" src={storeLogo} alt="" /></Link>
                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1'>
                        <div className='absolute mt-20 ml-14 text-orange-500'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className='text-center z-10 pt-7 pb-3'>
                            <h2 className='text-white font-bold text-2xl'>{firstName} {lastName}</h2>
                            <h2 className='text-white  '><Link to="email"><i className="fa-solid fa-envelope pr-3"></i>{storeEmail}</Link></h2>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default VendorTop