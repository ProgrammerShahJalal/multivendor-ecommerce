import React from 'react';
import ProductSearchBar from '../ProductSearchBar/ProductSearchBar';

const SearchField = () => {
    return (
        <div className="container mx-auto">
            <h2 className='text-xl font font-extrabold tracking-tight sm:text-6xl text-center my-5 text-gray-400 dark:text-white'>Search Your Favourite Products Hear</h2>
            <ProductSearchBar />
        </div>
    );
};

export default SearchField;