import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CowndownTimer from "../CowntownTimer/CowndownTimer";
import { HashLink } from 'react-router-hash-link';


interface DealState {
    deals: {
        img: string
        title: string
        price: string
        rating: number
    }[],
}
interface SpecialState {
    specials: {
        _id: string
        img: string
        hoverImg: string
        title: string
        price: string
        salePrice: string
        rating: number
        processor: string
        offerTill: string
    }[],
}


export default function SpecialDeal() {

    const [deals, setDeals] = useState<DealState["deals"]>
        ([]);
    const [specials, setSpecials] = useState<SpecialState["specials"]>
        ([]);


    useEffect(() => {
        if (deals) {
            fetch('https://morning-inlet-49130.herokuapp.com/features')
                .then(res => res.json())
                .then(data => setDeals(data))
        }
    }, [deals])

    /* ----------special product fetch----------- */
    useEffect(() => {
        if (specials) {
            fetch('https://morning-inlet-49130.herokuapp.com/specials')
                .then(res => res.json())
                .then(data => setSpecials(data))
        }
    }, [specials])

    return (
        <div className="bg-gray-50">
            <h2 className="text-3xl text-center font-extrabold text-gray-900 sm:text-4xl">
                <span className="text-5xl pr-3" >Special</span>
                <span className=" text-indigo-600 text-5xl">Deal</span>
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <div className="mt-8 grid gap-4 lg:mt-0 grid-cols-1 justify-center items-center justify-self-center">
                    <div className="hover:brightness-125 rounded-md shadow h-96 cursor-pointer bg-center bg-cover pt-3 pl-2" style={{
                        backgroundImage: `url("https://i.ibb.co/dPjwmKP/electro-banner1-32.jpg")`
                    }}>
                        <Link
                            to="/"
                            className=" inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white"
                        >
                            <div className="w-60">
                                <h2 className="text-md italic font-light">High Tech Products</h2>
                                <h2 className="font-bold text-3xl tracking-wide leading-relaxed">Google Smart Home 2022</h2>
                                <HashLink smooth to="/#blog">
                                    <button className="text-black px-2 py-1 rounded-2xl bg-slate-100">Read More</button>
                                </HashLink>
                            </div>
                        </Link>
                    </div>
                    <div className="rounded-md shadow">
                        <h2
                            className="inline-flex items-center justify-center px-4 py-3 border border-transparent text-lg font-semibold rounded-md bg-blue-500 text-white w-72 tracking-normal"
                        >
                            FEATURED PRODUCTS
                        </h2>
                        <div className="grid grid-cols-1 gap-1">
                            {
                                deals.map((deal) => (
                                    <div className="w-64 flex justify-center items-center gap-2 cursor-pointer">
                                        <img className="w-20" src={deal.img} alt="" />
                                        <h3>{deal.title}</h3>
                                        <p>{deal.price}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    {
                        specials.map((special) => (
                            <div className="text-center group">
                                <div className="hover:w-auto hover:h-auto">
                                    <img style={{ width: '250px', height: '300px' }} className="mx-auto group-hover:hidden block img" src={special.hoverImg} alt="" />
                                    <img style={{ width: '250px', height: '300px' }} className="mx-auto group-hover:block hidden hoverImg" src={special.img} alt="" />
                                </div>
                                <h2 className="font-bold">{special.title}</h2>
                                <p className="text-slate-400">{special.processor}</p>
                                <div className="flex justify-center items-center gap-3">
                                    <p className="text-slate-400 line-through decoration-pink-500">${special.price}</p>
                                    <p className="font-bold text-indigo-500">${special.salePrice}</p>
                                </div>
                                <div className="bg-violet-200 rounded-lg py-1">
                                    <CowndownTimer offerTill={special.offerTill} />
                                </div>
                                <Link to={`/specials/details/${special._id}`}>
                                    <button className='rounded-md hover:text-white hover:bg-indigo-500 border border-indigo-500 bg-transparent text-indigo-500 transition px-4 py-2 mt-2'>Details <i className="fa-light fa-file-circle-info"></i></button>
                                </Link>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}