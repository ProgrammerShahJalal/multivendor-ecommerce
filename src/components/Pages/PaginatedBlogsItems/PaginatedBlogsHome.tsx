import React from 'react';
import PaginatedBlogsItems from './PaginatedBlogsItems';

const PaginatedBlogsHome = () => {
    return (
        <div>
            <PaginatedBlogsItems itemsPerPage={4} />
        </div>
    );
};

export default PaginatedBlogsHome;