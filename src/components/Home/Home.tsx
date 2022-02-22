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
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
    return (
        <div>
            <Banners />
            <TopBanner />
            <SpecialDeal />
            <HomeProducts />
            <BottomBanner />
            <Reviews />
            <Brands />
            <BannerPro />
            <Blogs />
            <Faq />
            <ScrollToTop smooth color='#6f00ff' top={20} height="28" viewBox="0 0 256 256" />
        </div>
    )
}