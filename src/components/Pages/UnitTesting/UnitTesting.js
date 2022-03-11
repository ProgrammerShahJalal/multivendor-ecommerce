import React from 'react';
import Counter from './Counter';

const UnitTesting = () => {
    return (
        <>
            <div className='w-96 px-5 mx-auto'>
                <h2 className=" py-3 text-3xl text-center font-extrabold text-gray-900 sm:text-4xl">
                    <span className="text-5xl pr-3" >Unit</span>
                    <span className=" text-indigo-600 text-5xl">Testing</span>
                </h2>
                <img className='w-80 my-6' src="https://i.ibb.co/KVmKdgK/test.png" alt="" />
            </div>
            <Counter />
        </>

    );
};

export default UnitTesting;