import React from 'react';
import ProductSearchBar from '../ProductSearchBar/ProductSearchBar';

const SearchField = () => {
    return (
        <div className="container px-5 items-center justify-center block mx-auto">
            <h2 className='text-3xl font font-extrabold text-center mt-3 text-gray-500 dark:text-white'>Search Your Favorite Products Here</h2>
            <div className='mx-auto justify-center items-center flex'>
            <ProductSearchBar />
            </div>
            
        </div>
    );
};

export default SearchField;