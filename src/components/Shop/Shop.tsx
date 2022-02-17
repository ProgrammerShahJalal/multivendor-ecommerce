import React, { PureComponent } from 'react'
// import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';
import Products from './Products/Products';

type Props = {}

export default class Shop extends PureComponent<Props> {
    render() {
        return (
            <div>
                <Promo />
                <Products></Products>
            </div >
        )
    }
}