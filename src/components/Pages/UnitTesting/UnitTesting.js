import React from 'react';
import Counter from './Counter';

const UnitTesting = () => {
    return (
        <>
            <div className='w-96 px-5 mx-auto'>
                <h2 className=" py-3 text-3xl text-center font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                    <span className="lg:text-5xl md:text-3xl sm:text-lg pr-3" >Unit</span>
                    <span className=" text-indigo-600 dark:text-white lg:text-5xl md:text-3xl sm:text-lg">Testing</span>
                </h2>
                <div className='lg:w-96 md:w-72 sm:w-28'>
                    <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_aj6xq4lp.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
            </div>
            <Counter />
        </>

    );
};

export default UnitTesting;