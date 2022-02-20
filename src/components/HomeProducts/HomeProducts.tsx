import React, { PureComponent } from 'react'
import KidsCollection from '../KidsCollection/KidsCollection'
import MensCollection from '../MensCollection/MensCollection';
import WomensCollection from '../WomensCollection/WomensCollection';

type Props = {}

export default class HomeProducts extends PureComponent<Props> {
  render() {
    return (
      <div className='max-w-md md:max-w-7xl mx-auto'>
        <MensCollection />
        <WomensCollection />
        <KidsCollection />
      </div>
    )
  }
}