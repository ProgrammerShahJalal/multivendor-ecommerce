import React, { PureComponent } from 'react'
// import Navigation from '../Navigation/Navigation';
import Products from './Products/Products';
import ScrollToTop from "react-scroll-to-top";
import Pagination from '@material-ui/lab/Pagination';

type Props = {}

export default class Shop extends PureComponent<Props> {
    render() {
        return (
            <div>
                <ScrollToTop smooth color='#6f00ff' top={20} />
                <Products></Products>
                <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                    <Pagination count={10} color="primary" />
                </div>

            </div >
        )
    }
}
