import React from 'react'
import './Home.css';
import Promo from '../Promo/Promo';
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Stats from '../Stats/Stats';
import Reviews from '../Pages/Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import Banners from '../Pages/Banner/Banner';
import Brands from '../Pages/Brands/Brands';

export default function Home() {
    return (
        <div>
            <Banners />
            <TopBanner />
            <HomeProducts />
            <BottomBanner />
            <Promo />
            <Stats />
            <Reviews />
            <Brands />
            <Blogs />
        </div>
    )
}