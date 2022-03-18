import React, { PureComponent, FC } from 'react'
import KidsCollection from '../KidsCollection/KidsCollection'
import MensCollection from '../MensCollection/MensCollection';
import WomensCollection from '../WomensCollection/WomensCollection';

// type Props = {
//   translate: (key: string) => string
// }

interface HomeProductsProps {
  translate: (key: string) => string
}
const HomeProducts: FC<HomeProductsProps> = ({ translate }) => {

  return (
    <div className='max-w-md md:max-w-7xl mx-auto'>
      <h2 className="my-7 text-3xl text-center font-extrabold text-gray-900 dark:text-white sm:text-4xl">
        <span className="text-5xl pr-3" >{translate('all')}</span>
        <span className=" text-indigo-600 text-5xl">{translate('products')}</span>
      </h2>
      <MensCollection />
      <WomensCollection />
      <KidsCollection />
    </div>
  )
}
export default HomeProducts;