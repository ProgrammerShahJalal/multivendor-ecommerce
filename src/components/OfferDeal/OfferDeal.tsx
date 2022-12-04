
import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import CowndownTimer from "../CowntownTimer/CowndownTimer";
import PromoLottie1 from "../Lottie/PromoLottie1";
import PromoLottie2 from "../Lottie/PromoLottie2";
import PromoLottie3 from "../Lottie/PromoLottie3";

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


export default function OfferDeal() {

    const [specials, setSpecials] = useState<SpecialState["specials"]>
        ([]);

    /* ----------special product fetch----------- */
    useLayoutEffect(() => {
        function updateScreen(time) {
            // Make visual updates here.
            if (specials.length === 0) {
                fetch('https://unitymart-server.onrender.com/specials')
                    .then(res => res.json())
                    .then(data => setSpecials(data))
            }
        }
        requestAnimationFrame(updateScreen);
    }, [specials])


    return (
        <div className="bg-gray-50 dark:bg-gray-800 dark:text-white">
            <h2 className="text-3xl text-center font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                <span className="text-5xl pr-3" >Special</span>
                <span className=" text-indigo-600 text-5xl">Offer</span>
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <div className="mt-8 grid gap-4 lg:mt-0 grid-cols-1 justify-center items-center justify-self-center">
                    <div>
                        <div
                            className=" inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white"
                        >
                            <PromoLottie1 />
                        </div>
                    </div>
                    <div>
                        <div
                            className=" inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white"
                        >
                            <PromoLottie2 />
                        </div>
                    </div>
                    <div>
                        <div
                            className=" inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white"
                        >
                            <PromoLottie3 />
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