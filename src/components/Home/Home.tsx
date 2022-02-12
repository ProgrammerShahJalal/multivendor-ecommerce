import React from 'react'
import HomeProducts from '../HomeProducts/HomeProducts';
import './Home.css';
import Promo from '../Promo/Promo';
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';

export default function Home() {
    return (
        <div>
            <TopBanner/>
            <HomeProducts />
            <BottomBanner/>
            <Promo />
            
        </div>
    )
}