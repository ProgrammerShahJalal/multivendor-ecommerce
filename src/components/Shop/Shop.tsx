import React, { PureComponent } from 'react'
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
