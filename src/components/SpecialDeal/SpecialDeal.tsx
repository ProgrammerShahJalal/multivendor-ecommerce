import { useEffect, useState, FC } from "react";
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
    _id: string
    img: string
    hoverImg: string
    title: string
    price: string
    salePrice: string
    rating: number
    processor: string
    offerTill: string

}

interface SpecialDealProps {
    translate: (key: string) => string
}

const SpecialDeal: FC<SpecialDealProps> = ({ translate }) => {

    const [deals, setDeals] = useState<any>([]);
    const [specials, setSpecials] = useState<any[]>([]);


    useEffect(() => {
        if (deals.length === 0) {
            fetch('https://guarded-ocean-73313.herokuapp.com/products')
                .then(res => res.json())
                .then(data => setDeals(data?.slice(0, 5)))
        }

    }, [deals])

    /* ----------special product fetch----------- */
    useEffect(() => {
        if (specials.length === 0) {
            fetch('https://guarded-ocean-73313.herokuapp.com/products')
                .then(res => res.json())
                .then(data => {
                    const filter = data.filter(p => p.offerDate)
                    const filter2 = filter.sort((a, b) => (a > b ? -1 : 1))
                    setSpecials(filter2?.slice(0, 6))
                })
        }

    }, [specials.length])
    console.log(specials);




    return (
        <div className="bg-gray-100 dark:bg-gray-800 pt-4">
            <div data-aos="fade-up"
                data-aos-duration="3000">
                <h2 className="text-3xl text-center font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    <span className="text-5xl pr-3" >{translate('special')}</span>
                    <span className=" text-indigo-600 text-5xl">{translate('deal')}</span>
                </h2>
            </div>
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
                                    <button className="text-gray-800 px-2 py-1 rounded-2xl bg-slate-100">Read More</button>
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
                                    <Link to={`/product/${deal._id}`}> <div className="w-64 flex justify-center items-center gap-2 cursor-pointer">
                                        <img className="w-20 bg-white" src={deal.images[0]?.src} alt="" />
                                        <h3 className="text-black dark:text-white">{deal.title}</h3>
                                        <p className="text-black dark:text-white">${deal.sale_price ? deal.sale_price : deal.reg_price}</p>
                                    </div></Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    {
                        specials.map((special) => (
                            <div className="text-center group bg-white dark:bg-slate-600 p-3">
                                <div className="hover:w-auto hover:h-auto">
                                    <img style={{ width: '250px', height: '300px' }} className="mx-auto group-hover:hidden block img" src={special.images[0]?.src} alt="" />
                                    <img style={{ width: '250px', height: '300px' }} className="mx-auto group-hover:block hidden hoverImg" src={special?.images[1]?.src} alt="" />
                                </div>

                                <h2 className="font-bold text-black dark:text-white">{special.title}</h2>
                                <p className="text-slate-400">{special.categories[0].label}</p>
                                <div className="flex justify-center items-center gap-3">
                                    <p className="text-slate-400 line-through decoration-pink-500">${special.reg_price}</p>
                                    <p className="font-bold text-indigo-500">${special.sale_price}</p>
                                </div>
                                <div className="bg-violet-200 rounded-lg py-1">
                                    <CowndownTimer offerTill={special.offerDate} />
                                </div>
                                <Link to={`/product/${special._id}`}>
                                    <button className='rounded-md hover:text-white hover:bg-indigo-500 border border-indigo-500 bg-transparent text-indigo-500 transition px-4 py-2 mt-2'>Details <i className="fa-light fa-file-circle-info"></i></button>
                                </Link>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div >
    )
}
export default SpecialDeal;