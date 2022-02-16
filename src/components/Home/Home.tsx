import React from 'react'
import './Home.css';
import Promo from '../Promo/Promo';
import TopBanner from '../TopBanner/TopBanner';
import BottomBanner from '../BottomBanner/BottomBanner';
import HomeProducts from '../../components/HomeProducts/HomeProducts';
import Stats from '../Stats/Stats';
import Reviews from '../Pages/Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import Banners from '../Pages/Banner/Banner';
import Brands from '../Pages/Brands/Brands';
<<<<<<< HEAD
import Sidebar from '../Sidebar/Sidebar';

=======
import { Faq } from '../FAQ/FAQ';
>>>>>>> af691417a6e7e69fb7717589590a1f59672e548c

export default function Home() {
    return (
        <div>
            <Banners />
            <TopBanner />
            <HomeProducts/>
            <BottomBanner />
            <Promo />
            <Stats />
            <Sidebar />
            <Reviews />
            <Brands />
            <Blogs />
            <Faq/>
        </div>
    )
}