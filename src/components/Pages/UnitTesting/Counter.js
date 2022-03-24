import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div className='w-96 px-3  mx-auto py-5 text-center'>
                <h1 className='font-bold text-xl dark:text-white'>Counter Game</h1>
                <div id="counter-value">{counter}</div>
                <button className='text-white mr-3 rounded-xl px-7  py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500' onClick={() => setCounter(counter + 1)} id='increment-btn'>Increment</button>

                <button className='text-white rounded-xl px-7 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500' onClick={() => setCounter(counter - 1)} id='decrement-btn'>Decrement</button>
            </div>
            <img className='my-4 w-3/4 mx-auto px-2' src="https://i.ibb.co/GPgwPKw/full-jest-enzyme.png" alt="" />
        </>

    );
};

export default Counter;