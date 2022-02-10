import * as React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export interface IAppProps {
}

export default class App extends React.PureComponent<IAppProps> {
  public render() {
    return (
        <div className='error-body min-h-screen w-screen text-center'style={{background:"linear-gradient(125deg,#6a89cc,#b8e994)"}}>
        <div className="container mx-auto error-text text-neutral-900">
            <h2 className='text-5xl font-bold'>Oops! Page not Found</h2>
            <h3 className='text-9xl font-extrabold tracking-widest' >404</h3>
            <p className='text-2xl'>We can't find the page you're looking for..</p>
            <Link to="/" className=' mt-5 bg-red-600 text-white px-3 py-2 inline-block rounded-full text-xl uppercase transition transform hover:bg-orange-900 -translate-y-1 motion-reduce:transition-none motion-reduce:transform-none '>Go back home</Link>
            </div> 
     </div>
    );
  }
}
