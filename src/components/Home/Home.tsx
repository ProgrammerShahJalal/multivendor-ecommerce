import React from 'react'
import './Home.css';
import Promo from '../Promo/Promo';
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Blog from '../Blog/Blog';

export default function Home() {
    return (
        <div>
            <TopBanner />
            <HomeProducts />
            <BottomBanner />
            <Promo />
            <Blog />
        </div>
    )
}