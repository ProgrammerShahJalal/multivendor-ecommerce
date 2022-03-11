import React, { PureComponent } from 'react'
import AllProducts from '../AllProducts/AllProducts';
import KidsCollection from '../KidsCollection/KidsCollection'
import MensCollection from '../MensCollection/MensCollection';
import WomensCollection from '../WomensCollection/WomensCollection';

type Props = {}

export default class HomeProducts extends PureComponent<Props> {
  render() {
    return (
      <div className='max-w-md md:max-w-7xl mx-auto'>
<<<<<<< HEAD
        <h2 className="my-7 text-3xl text-center font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          <span className="text-5xl pr-3" >All</span>
          <span className=" text-indigo-600 text-5xl">Products</span>
        </h2>
        <MensCollection />
        <WomensCollection />
        <KidsCollection />
=======
        {/* <MensCollection /> */}
        <AllProducts />
        {/* <KidsCollection /> */}
>>>>>>> 1d01f03323faf7b2e3635053e97819012aebcfa5
      </div>
    )
  }
}