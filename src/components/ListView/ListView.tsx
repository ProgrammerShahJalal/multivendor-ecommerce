import React from 'react';
import Kids from './Kids';
import Men from './Men';
import Womens from './Women';

const ListView = () => {
    return (
        <div className='max-w-md md:max-w-7xl mx-auto'>
            <Men/>
            <Womens/>
            <Kids/>
        </div>
    );
};

export default ListView;