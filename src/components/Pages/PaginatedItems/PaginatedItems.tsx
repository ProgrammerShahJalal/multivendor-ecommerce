import React, { useLayoutEffect, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PaginatedProducts from './PaginatedProducts';


const PaginatedItems = ({ itemsPerPage }: any) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const [products, setproducts] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false)


    useLayoutEffect(() => {
        function updateScreen(time) {
            // Make visual updates here.
            setIsLoading(true)
            if (products.length === 0) {
                fetch('https://unitymart-server.onrender.com/products')
                    .then(res => res.json())
                    .then(data => {
                        setproducts(data)
                    }
                    )
                    .finally(() => setIsLoading(false))
            }
        }
        requestAnimationFrame(updateScreen);
    }, [products])


    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, products]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className='container mx-auto pb-7'>
                <PaginatedProducts product={currentItems} isLoading={isLoading} />

                <div className=''>
                    <ReactPaginate className='flex flex-row bg-pink-500 justify-evenly rounded-full w-96 py-5 mx-auto text-white'
                        breakLabel="..."
                        nextLabel="Next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< Previous"
                        // marginPagesDisplayed={3}
                        // renderOnZeroPageCount={null || any}
                        previousClassName="bg-blue-500 px-2 text-white rounded-full"
                        nextClassName="bg-blue-500 px-3 text-white rounded-full"
                        breakLinkClassName="bg-blue-500"
                    />
                </div>
            </div>
        </>
    );
}

export default PaginatedItems;