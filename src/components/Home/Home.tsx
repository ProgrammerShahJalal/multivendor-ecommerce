import React from 'react'
import './Home.css';
import Promo from '../Promo/Promo';
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import HomeProducts from '../../components/HomeProducts/HomeProducts';
import Stats from '../Stats/Stats';
import { Blog } from '../Blogs/Blogs';

export default function Home() {
    return (
        <div>
            <TopBanner />
            <HomeProducts/>
            <BottomBanner />
            <Promo />
            <Stats />
            <Blog />
        </div>
    )
}