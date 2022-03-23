import React from 'react';
import Counter from './Counter';

const UnitTesting = () => {
    return (
        <>
            <div className='w-96 px-5 mx-auto'>
                <h2 className=" py-3 text-3xl text-center font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    <span className="text-5xl pr-3" >Unit</span>
                    <span className=" text-indigo-600 text-5xl">Testing</span>
                </h2>
                <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_aj6xq4lp.json" background="transparent" speed="1" style={{ width: '600px', height: '600px' }} loop autoplay></lottie-player>
            </div>
            <Counter />
        </>

    );
};

export default UnitTesting;