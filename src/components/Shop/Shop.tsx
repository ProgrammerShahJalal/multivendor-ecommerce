import React, { useState } from 'react'
import Products from './Products/Products';
import ScrollToTop from "react-scroll-to-top";
import Pagination from '@material-ui/lab/Pagination';


export default function Shop() {
    const [loading, setLoading] = useState(true);
    setTimeout(() => setLoading(false), 3000);
    if (loading) {
        return <img
            src='http://rafcart.rslahmed.com/assets/images/preloader.gif' className="mx-auto" alt=""></img>
    }
    return (
        <div>
            <ScrollToTop style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#7209b7' }} smooth color='#ffffff' top={20} />
            <Products></Products>
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <Pagination count={10} color="primary" />
            </div>
        </div>
    )
}

