import React, { useState } from "react";
import JsonData from "../../../public/database/mensCollection.json";
import ReactPaginate from "react-paginate";


const Pagination = () => {
    return (
        function App() {
            const [products, setProducts] = useState(JsonData.slice(0, 50));
            const [pageNumber, setPageNumber] = useState(0);

            const ProductsPerPage = 10;
            const pagesVisited = pageNumber * ProductsPerPage;

            const displayProducts = products
                .slice(pagesVisited, pagesVisited + ProductsPerPage)
                .map((product) => {
                    return (
                        <div className="user">
                            {/* <h3>{user.firstName}</h3>
                            <h3>{user.lastName}</h3>
                            <h3>{user.email}</h3> */}
                        </div>
                    );
                });

            const pageCount = Math.ceil(products.length / ProductsPerPage);

            // const changePage = ({ selected }) => {
            //     setPageNumber(selected);
            // };

            return (
                <div className="App">
                    {displayProducts}
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        // onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            );
        }
    )
}

export default Pagination;