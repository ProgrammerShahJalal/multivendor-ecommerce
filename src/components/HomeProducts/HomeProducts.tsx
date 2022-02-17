import React, { PureComponent } from 'react'
import KidsCollection from '../KidsCollection/KidsCollection'
import MensCollection from '../MensCollection/MensCollection'
import WomensCollection from '../WomensCollection/WomensCollection'

type Props = {}

export default class HomeProducts extends PureComponent<Props> {
  render() {
    return (
      <div>
          <MensCollection/>
          <WomensCollection/>
          <KidsCollection/>
      </div>
    )
  }
}