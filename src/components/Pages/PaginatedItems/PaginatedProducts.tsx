import { Box, CircularProgress, Fade, Modal, Rating } from "@mui/material";
import ProductView from "../../ProductView/ProductView";
import ProductViewSm from "../../ProductView/ProductViewSm";
import {useState} from 'react';


const PaginatedProducts = ({ product, isLoading }: any) => {

    const [selectedProduct, setSelectedProduct] = useState<any>()
    const [open, setOpen] = useState(false);
    const handleOpen = (products) => {
        setSelectedProduct(products)
        setOpen(true)

    };
    const handleClose = () => setOpen(false);
    return (
        <div className="container px-10 pb-16 pt-5">
            <div className="grid place-content-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 ">
                {
                    isLoading ?
                        <CircularProgress className="mx-auto" color="success" />
                        : product?.map((pd: any) => (
                            <div className="bg-white dark:bg-slate-800 shadow-inner overflow-hidden single-card group">
                                <div className="relative">
                                    <div style={{ height: '250px' }} className='z-100 overflow-hidden'>
                                        <img src={pd.hoverImg} className='w-full img z-0 transition object-cover' alt="" />
                                        <img src={pd.img} className='w-full hoverImg transition object-cover' alt="" />
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                        <button onClick={() => handleOpen(product)} className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition'>
                                            <i className="fa-regular fa-magnifying-glass"></i>
                                        </button>
                                        <a className='text-white text-lg w-9 h-8 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                                            <i className="fa-regular fa-heart"></i>
                                        </a>
                                    </div>

                                </div>
                                <div style={{ height: '200px' }} className="pt-4 gb-3 px-4">
                                    <a href="/">
                                        <h4 className="font-medium text-xl mb-2 text-gray-800 dark:text-white  transition">{pd.title}</h4>
                                        <h5 className="font-bold text-sm mb-2 text-gray-800 dark:text-white transition">from {pd.vendorName}</h5>
                                    </a>
                                    <div className="flex items-baseline mb-1 space-x-2">
                                        <p className="text-xl text-indigo-500 font-semibold">{pd.salePrice}</p>
                                        <p className="text-sm text-gray-400 line-through">{pd.price}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Rating name="half-rating-read" defaultValue={pd.rating} precision={0.5} readOnly />
                                        <div className="text-xs text-gray-500 ml-3">(1)</div>
                                    </div>
                                </div>
                                <button className='block w-full py-1 text-center top-5 text-white bg-indigo-500 border border-indigo-500 rounded-b hover:bg-transparent hover:text-indigo-500 transition'>Add to Cart</button>
                            </div>
                        ))}
            </div>
            <div className='px-3 mx-auto text-center'>
                <Modal
                    open={open}
                >
                    <Fade in={open}>
                        <Box>
                            <div className='md:block mx-auto px-1 lg:block hidden'>
                                <ProductView   selectedProduct={selectedProduct} />
                            </div>
                            <div className='md:hidden lg:hidden block'>
                                <ProductViewSm selectedProduct={selectedProduct} />
                            </div>
                        </Box>
                    </Fade>
                </Modal>
                </div>
        </div>
    );
};

export default PaginatedProducts;