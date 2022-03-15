import React from 'react';
import ProductSearchBar from '../ProductSearchBar/ProductSearchBar';

const SearchField = () => {
    return (
        <div className="container mx-auto">
            <h2 className='text-3xl font font-extrabold text-center mt-3 text-gray-500 dark:text-white'>Search Your Favorite Products Here</h2>
            <ProductSearchBar />
            <div className='flex justify-center items-center'>
                <img className='w-64' src="https://i.ibb.co/Xptk1ZR/search.png" alt="" />
            </div>
        </div>
    );
};

export default SearchField;