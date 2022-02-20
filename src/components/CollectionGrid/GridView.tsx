import React from 'react';
import Kids from './Kids/Kids';
import Men from './Men/Men';
import Women from './Women/Women';

const Products = () => {
    return (
        <div className='max-w-md md:max-w-7xl mx-auto'>
            <Men/>
            <Women/>
            <Kids/>
        </div>
    );
};

export default Products;