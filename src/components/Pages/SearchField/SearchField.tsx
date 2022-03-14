import React from 'react';
import ProductSearchBar from '../ProductSearchBar/ProductSearchBar';

const SearchField = () => {
    return (
        <div className="container mx-auto">
            <h2 className='text-3xl font font-extrabold text-center mt-3 text-gray-500 dark:text-white'>Search Your Favourite Products Here</h2>
            <ProductSearchBar />
        </div>
    );
};

export default SearchField;