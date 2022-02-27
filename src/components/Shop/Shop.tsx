import React, { PureComponent } from 'react'
import Products from './Products/Products';
import ScrollToTop from "react-scroll-to-top";
import Pagination from '@material-ui/lab/Pagination';

type Props = {}

export default class Shop extends PureComponent<Props> {
    render() {
        return (
            <div>
                <ScrollToTop style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} smooth color='#6f00ff' top={20} />
                <Products></Products>
                <div style={{ display: 'flex', justifyContent: 'center', padding: 30, backgroundColor: '#7209b7' }}>
                    <Pagination count={10} color="primary" />
                </div>

            </div >
        )
    }
}
