import React from 'react'
import './Home.css';
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import Blogs from '../Blogs/Blogs';
import Banners from '../Pages/Banner/Banner';
import { Faq } from '../FAQ/FAQ';
import HomeProducts from '../HomeProducts/HomeProducts';
import BannerPro from '../Pages/BannerPro/BannerPro';
import ScrollToTop from "react-scroll-to-top";
import BannerGadget from '../Pages/BannerGadget/BannerGadget';
import Brands from '../Pages/Brands/Brands';
import SpecialDeal from '../SpecialDeal/SpecialDeal';



export default function Home() {
    return (
        <div>
            <Banners />
            <TopBanner />
            <SpecialDeal />
            <BannerGadget />
            <HomeProducts />
            <BottomBanner />
            {/* <Reviews /> */}
            <Brands />
            <BannerPro />
            <Blogs />
            <Faq />
            <ScrollToTop style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} smooth color='#6f00ff' top={20} height="28" viewBox="0 0 256 256" />
        </div>
    )
}