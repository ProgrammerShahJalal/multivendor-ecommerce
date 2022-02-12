import React, { PureComponent } from 'react'
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';

type Props = {}

export default class Shop extends PureComponent<Props> {
    render() {
        return (
            <div>
                <Navigation />
                <Promo />
            </div>
        )
    }
}