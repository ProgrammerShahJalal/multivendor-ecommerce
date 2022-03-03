import React, { useState } from 'react'
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import Banners from '../Pages/Banner/Banner';
import { Faq } from '../FAQ/FAQ';
import HomeProducts from '../HomeProducts/HomeProducts';
import BannerPro from '../Pages/BannerPro/BannerPro';
import SpecialDeal from '../SpecialDeal/SpecialDeal';
import ScrollToTop from "react-scroll-to-top";
import BannerGadget from '../Pages/BannerGadget/BannerGadget';
import Brands from '../Pages/Brands/Brands';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Notify from '../Notify/Notify';
import PaginatedBlogsHome from '../Pages/PaginatedBlogsItems/PaginatedBlogsHome';
import Products from '../Products/Products';

// import Reviews from '../Pages/Reviews/Reviews';
import Alan from './Alan-AI/Alan';



export default function Home() {

    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 3000);
    if (loading) {
        return <img
            src='http://rafcart.rslahmed.com/assets/images/preloader.gif' className="mx-auto select-none" alt=""></img>
    }

    return (
        <div>

            <Banners />
            <Notify />
            <TopBanner />
            <SpecialDeal />
            <BannerGadget />
            {/* <HomeProducts /> */}
            <Products />
            <BottomBanner />
            {/* <Reviews /> */}
            <Brands />
            <BannerPro />
            <PaginatedBlogsHome />
            <Faq />
            <Alan />
            <ScrollToTop style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', left: 15, backgroundColor: '#7209b7' }} smooth color='#ffffff' top={20} height="28" viewBox="0 0 256 256" />
            <MessengerCustomerChat
                pageId="104774475481224"
                appId=" 1107053396762800"
            />
        </div>
    )
}
