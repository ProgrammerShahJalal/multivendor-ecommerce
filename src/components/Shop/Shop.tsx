import React, { useState } from 'react'
import Products from './Products/Products';
import ScrollToTop from "react-scroll-to-top";
import Pagination from '@material-ui/lab/Pagination';
import ProductSearchBar from '../Pages/ProductSearchBar/ProductSearchBar';
import { Helmet } from 'react-helmet-async';


export default function Shop() {

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
                <title>Shop :: Unity Mart</title>
                <meta
                    name="description"
                    content="Shop our latest products and enjoy."
                />
                <link rel="canonical" href="/shop" />
            </Helmet>
            <div>
                <ScrollToTop style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', left: 15, backgroundColor: '#7209b7' }} smooth color='#ffffff' top={20} />
                <ProductSearchBar />
                <Products />
                <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                    <Pagination count={10} color="primary" />
                </div>
            </div>
        </>
    )
}

