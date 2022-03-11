import React from 'react';
import PaginatedItems from './PaginatedItems';

const PginatedHome = () => {
    return (
        <div>
            <PaginatedItems itemsPerPage={8} />
        </div>
    );
};

export default PginatedHome;