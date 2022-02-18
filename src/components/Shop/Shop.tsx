import React, { PureComponent } from 'react'
// import Navigation from '../Navigation/Navigation';
import Products from './Products/Products';

type Props = {}

export default class Shop extends PureComponent<Props> {
    render() {
        return (
            <div>
                <Products></Products>
            </div >
        )
    }
}
