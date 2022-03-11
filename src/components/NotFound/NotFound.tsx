import * as React from 'react';
import { Link } from 'react-router-dom';
import NotFoundLottie from '../Lottie/NotFoundLottie';
import './NotFound.css';

export interface IAppProps {
}

export default class App extends React.PureComponent<IAppProps> {
  public render() {
    return (
      <div className='min-h-screen pb-3 text-center bg-slate-100'>
        <div className='lg:inset-y-0 lg:w-1/2 mx-auto'>
          <NotFoundLottie />
        </div>
        <h2 className='text-3xl  font-bold'>Oops! Page not Found</h2>
        <p className='text-xl'>We can't find the page you're looking for..</p>
        <Link to="/" className=' mt-5 bg-red-600 text-white px-3 py-2 inline-block rounded-full text-base uppercase transition transform hover:bg-orange-900 -translate-y-1 motion-reduce:transition-none motion-reduce:transform-none '>Go back home</Link>
      </div>
    );
  }
}
