import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
import { removeItem } from '../../../redux/wishlistSlice';
import { ShareButton } from 'react-custom-share';


const WishList = () => {
    const dispatch: any = useDispatch()
    const { wishlist } = useSelector((state: any) => state.wishlist);
    // console.log(wishlist);

    const shareFBButtonProps = {
        url: "https://unitymart-c522a.web.app",
        network: "Facebook",
        text: "Share unity mart to your facebook. Let your friends know about us",
        longtext:
            " "
    };
    const shareLNButtonProps = {
        url: "https://unitymart-c522a.web.app",
        network: "Linkedin",
        text: "Share unity mart to your facebook. Let your friends know about us",
        longtext:
            " "
    };
    const sharePNButtonProps = {
        url: "https://unitymart-c522a.web.app",
        network: "Pinterest",
        text: "Share unity mart to your facebook. Let your friends know about us",
        longtext:
            " "
    };

    return (
        <div className="container mx-auto">
            <h1 className='text-4xl justify-center font-bold text-gray-500 uppercase py-4 text-center'>Wish List</h1>
            <div>
                <p className='text-2xl justify-center font-medium uppercase pb-4 text-center'>Share on <ShareButton {...shareFBButtonProps}><i className="fa-brands fa-facebook text-blue-500 px-2"></i></ShareButton>
                    <ShareButton {...shareLNButtonProps}><i className="fa-brands fa-linkedin text-blue-500"></i></ShareButton>
                    <ShareButton {...sharePNButtonProps}><i className="fa-brands fa-pinterest text-red-600 px-2"></i></ShareButton></p>
                <div className='mt-2 flex gap-2'>

                </div>
            </div>

            <div className="container px-7">
                <div className='grid md:grid-cols-5 gap-2 bg-gray-200 py-4 text-xl font-bold uppercase text-center'>
                    <h3>ThubNail</h3>
                    <h3>Title</h3>
                    <h3>Price</h3>
                    <h3>Add To Cart</h3>
                    <h3>Remove</h3>
                </div>
                <div className='mx-auto'>
                    {
                        wishlist?.map((product) => {
                            const detailProduct = {
                                _id: product._id,
                                title: product.title,
                                image: product.image,
                                category: product.category,
                                price: product.price,
                                attributes: [],
                                cartQuantity: 1,
                                vendor: {
                                    email: product?.publisherDetails?.publisher || null
                                }
                            }
                            return <div className='grid md:grid-cols-5 sm:grid-cols-1 gap-2 items-center justify-center '>
                                <img src={product.image} className='w-full p-6 rounded' alt="" />
                                <h3 className='font-bold text-xl  text-center'>{product.title}</h3>
                                <h4 className='text-2xl text-gray-800 dark:text-white font-bold text-center'>${product.price}</h4>
                                <button onClick={() => dispatch(addToCart(detailProduct))} type='button' className="w-40 mx-auto text-white bg-indigo-600 rounded-full hover:bg-pink-600 py-2">Add To Cart</button>

                                <button onClick={() => dispatch(removeItem(product))} className='text-3xl text-rose-600 hover:text-gray-600'><i className="fa-solid fa-trash"></i></button>
                            </div>
                        })
                    }
                </div>

            </div>

        </div>
    );
};

export default WishList;

