import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div className='w-96 px-3  mx-auto py-5 text-center'>
                <h1 className='font-bold text-xl dark:text-white'>Counter Game</h1>
                <div className='dark:text-white' id="counter-value">{counter}</div>
                <button className='text-white mr-3 rounded-xl px-7  py-3 bg-indigo-600 hover:bg-green-600' onClick={() => setCounter(counter + 1)} id='increment-btn'>Increment</button>

                <button className='text-white rounded-xl px-7 py-3 bg-green-600 hover:bg-indigo-600' onClick={() => setCounter(counter - 1)} id='decrement-btn'>Decrement</button>
            </div>
            <img className='my-4 w-3/4 mx-auto px-2' src="https://i.ibb.co/GPgwPKw/full-jest-enzyme.png" alt="" />
        </>

    );
};

export default Counter;