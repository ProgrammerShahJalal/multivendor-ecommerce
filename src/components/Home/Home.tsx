import React, { useState } from 'react';
import { useContext } from 'react';
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import Banners from '../Pages/Banner/Banner';
import BannerPro from '../Pages/BannerPro/BannerPro';
import ScrollToTop from "react-scroll-to-top";
import BannerGadget from '../Pages/BannerGadget/BannerGadget';
import Brands from '../Pages/Brands/Brands';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Notify from '../Notify/Notify';
import PaginatedBlogsHome from '../Pages/PaginatedBlogsItems/PaginatedBlogsHome';
import Reviews from '../Pages/Reviews/Reviews';
import SpecialDeal from './../SpecialDeal/SpecialDeal';
import { LangContext } from '../Pages/MultiLanguage/languagecontext/lang';
import AllProducts from '../AllProducts/AllProducts';
import Alan from './Alan-AI/Alan';
import { Helmet } from 'react-helmet-async';


export default function Home() {
    const { dispatch: { translate } } = useContext(LangContext);

    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 3000);
    if (loading) {
        return <div>
            <img
                src='https://i.ibb.co/xm46jwY/preloader.gif' className="mx-auto select-none dark:hidden block" alt=""></img>
            <img
                src='https://i.ibb.co/L9DK6z6/preloader.gif' className="mx-auto select-none dark:block hidden" alt=""></img>
        </div>
    }

    return (
        <>
            <Helmet>
                <title>Unity Mart :: A Multi-Vendor e-commerce Website</title>
                <meta
                    name="description"
                    content="Shop from Unity Mart."
                />
                <link rel="canonical" href="/home" />
            </Helmet>
            <div>
                <Banners />
                <Notify />
                <TopBanner />
                <SpecialDeal translate={translate} />
                <BannerGadget />
                <div className="max-w-md md:max-w-7xl mx-auto">
                    <AllProducts translate={translate} />
                </div>
                <BannerPro />
                <BottomBanner />
                <Reviews />
                <Alan />
                <Brands />
                <PaginatedBlogsHome />
                <ScrollToTop style={{ display: 'flex', bottom: 180, alignItems: 'center', justifyContent: 'center', left: 15, backgroundColor: '#7209b7' }} smooth color='#ffffff' top={20} height="28" viewBox="0 0 256 256" />
                <div style={{
                    position: "absolute",
                    left: "18pt !important"
                }}>
                    <MessengerCustomerChat
                        pageId="104774475481224"
                        appId=" 1107053396762800"
                        theme_color="#5856d6"
                    />
                </div>
            </div>
        </>
    )
}
