import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';



const StoreListCards = () => {
    const [vendors, setVendors] = useState<any>([]);

    useEffect(() => {

        fetch('https://young-springs-82149.herokuapp.com/user/vendors')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVendors(data)
            })

    }, [])
    return (
        <>
            <Helmet>
                <title>Vendors of Unity Mart</title>
                <meta
                    name="description"
                    content="Shop from Unity Mart."
                />
                <link rel="canonical" href="/vendors" />
            </Helmet>
            <div className='container mx-auto my-10'>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        vendors?.map((vendor: any) => <div key={vendor?._id} className="card shadow-lg">
                            <div style={{ height: '150px', width: '350px' }} className="card-image border-b-2 border-blue-600">
                                <img className='h-full w-60 object-contain' src={vendor?.storeBanner} alt="" />
                            </div>
                            <div style={{ marginTop: '-40px' }} className='w-20 h-20 ml-5 relative z-50 '>
                                <img className="w-full h-full object-contain border-indigo-600 border-4 rounded-full " src={vendor?.storeLogo} alt="vendor logo" />
                            </div>
                            <div className="content text-left pl-5">
                                <h2 className='text-xl font-bold '>{vendor?.storeName}</h2>
                                <h5 className='text-md text-dark ' >{vendor?.storeDescription}</h5>
                                <p className='py-2 font-bold text-sm text-gray-500'><i className="fa-solid fa-envelope text-gray-500 text-lg"></i> {vendor?.storeEmail}</p>
                                <p className='font-bold text-sm text-gray-500 '><i className="fa-solid fa-phone text-gray-500  text-lg"></i> {vendor?.phoneNumber}</p>
                            </div>
                            <div className="button-div  flex items-end justify-end p-5 ">
                                <Link to={`/vendorShop/${vendor.storeSlug}`}>
                                    <button className='bg-indigo-600 font-bold rounded text-white uppercase px-3 py-2 ml-5 hover:bg-sky-900'>Visit</button>
                                </Link>


                            </div>
                        </div>
                        )
                    }
                </div>

            </div>
        </>
    );
}
export default StoreListCards
