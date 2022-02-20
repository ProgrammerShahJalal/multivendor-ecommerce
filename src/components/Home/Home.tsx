import React from 'react'
import './Home.css';
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import Reviews from '../Pages/Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import Banners from '../Pages/Banner/Banner';
import { Faq } from '../FAQ/FAQ';
import HomeProducts from '../HomeProducts/HomeProducts';
import Brands from '../Pages/Brands/Brands';
import BannerPro from '../Pages/BannerPro/BannerPro';
import SpecialDeal from '../SpecialDeal/SpecialDeal';
import BannerGadget from '../Pages/BannerGadget/BannerGadget';

export default function Home() {
    return (
        <div>
            <Banners />
            <TopBanner />
            <SpecialDeal />
            <BannerGadget />
            <HomeProducts />
            <BottomBanner />
            <div className='md:block lg:block hidden'>
                <Reviews />
            </div>
            <Brands />
            <BannerPro />
            <Blogs />
            <Faq />
        </div>
    )
}