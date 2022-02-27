import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';


const DealDetails = () => {
    let { id } = useParams();
    const { user } = UseAuth();

    const [dealDetails, setDealDetails] = useState([])
    useEffect(() => {
        fetch('https://morning-inlet-49130.herokuapp.com/specials')
            .then(res => res.json())
            .then((data) => {
                const onlyDeal = data.filter(detail => detail._id === id)
                setDealDetails(onlyDeal);
            })
    }, [id])

    const { title, img, details, salePrice, processor } = dealDetails[0] || {};

    const purchase = () => {
        const order = {
            cus_name: user?.displayName,
            cus_email: user?.email,
            product_name: title,
            product_profile: details,
            product_image: img,
            total_amount: salePrice
        }
        fetch(`https://morning-inlet-49130.herokuapp.com/init`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data);
            })
    }

    return (
        <div className='max-w-md overflow-hidden md:max-w-2xl mx-auto my-5'>
            <div className="md:shrink-0 rounded-xl shadow-lg p-5 bg-white">
                <img className="h-auto w-full object-cover md:h-full md:w-full rounded-md" src={img} alt='' />
                <h2 className='text-2xl font font-bold tracking-tight text-gray-900 sm:text-2xl text-center my-5'>{title}</h2>
                <div className='flex justify-around items-center'>
                    <p className="font-bold mt-2 text-cyan-900">Price: {salePrice}</p>
                    <p className="font-bold mt-2 text-purple-900">Processor: {processor}</p>
                </div>
                <div>
                    <p className='text-justify'>
                        {details}
                    </p>
                    <button onClick={purchase} className='bg-indigo-500 text-white rounded-2xl px-4 py-2 mt-2'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default DealDetails;