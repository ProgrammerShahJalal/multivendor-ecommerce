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

    const { title, hoverImg, details, salePrice, processor, vendorName, category, display, RAM, brands } = dealDetails[0] || {};

    const purchase = () => {
        const order = {
            cus_name: user?.displayName,
            cus_email: user?.email,
            product_name: title,
            product_profile: details,
            product_image: hoverImg,
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
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <div>
                    <img src={hoverImg} alt="" />
                </div>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <table className="border-collapse border border-slate-400 ...">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 ...">State</th>
                                <th className="border border-slate-300 ...">City</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 ...">Indiana</td>
                                <td className="border border-slate-300 ...">Indianapolis</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 ...">Ohio</td>
                                <td className="border border-slate-300 ...">Columbus</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 ...">Michigan</td>
                                <td className="border border-slate-300 ...">Detroit</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default DealDetails;