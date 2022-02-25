import React from 'react'
import './Home.css';
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import Blogs from '../Blogs/Blogs';
import Banners from '../Pages/Banner/Banner';
import { Faq } from '../FAQ/FAQ';
import HomeProducts from '../HomeProducts/HomeProducts';
import BannerPro from '../Pages/BannerPro/BannerPro';
import SpecialDeal from '../SpecialDeal/SpecialDeal';
import ScrollToTop from "react-scroll-to-top";
import BannerGadget from '../Pages/BannerGadget/BannerGadget';
import Brands from '../Pages/Brands/Brands';
import MessengerCustomerChat from 'react-messenger-customer-chat';



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
            <ScrollToTop style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', left: 10 }} smooth color='#6f00ff' top={20} height="28" viewBox="0 0 256 256" />
            <MessengerCustomerChat
                pageId="104774475481224"
                appId=" 1107053396762800"
            />
        </div>
        //add-comment-for-merging
    )
}