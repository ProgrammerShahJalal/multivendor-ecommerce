import React from 'react'
import './Home.css';
import Promo from '../Promo/Promo';
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import Reviews from '../Pages/Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import Banners from '../Pages/Banner/Banner';
import { Faq } from '../FAQ/FAQ';
import HomeProducts from '../HomeProducts/HomeProducts';
import Brands from '../Pages/Brands/Brands';
import BannerPro from '../Pages/BannerPro/BannerPro';

export default function Home() {
    return (
        <div>
            <Banners />
            <TopBanner />
            <HomeProducts />
            <BottomBanner />
            <Promo />
            <Reviews />
            <Brands />
            <BannerPro />
            <Blogs />
            <Faq />
        </div>
    )
}