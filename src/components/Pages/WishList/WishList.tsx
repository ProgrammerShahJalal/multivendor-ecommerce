import React from 'react';

const WishList = () => {
    return (
        <div className="container mx-auto">
            <h1 className='text-4xl justify-center font-bold text-gray-500 uppercase py-4'>Wish List</h1>
            <div>
                <p className='text-2xl justify-center font-medium uppercase pb-4'>Share on<i className="fa-brands fa-facebook text-blue-400 px-2"></i><i className="fa-brands fa-twitter-square text-blue-400"></i></p>
            </div>

            <div className="container px-7">
                <div className='grid md:grid-cols-5 gap-2 bg-gray-200 py-4 text-xl font-bold uppercase'>
                    <h3>ThubNail</h3>
                    <h3>Title</h3>
                    <h3>Price</h3>
                    <h3>Add To Cart</h3>
                    <h3>Delete</h3>
                </div>
                <div className='grid md:grid-cols-5 sm:grid-cols-1 gap-2 items-center justify-center  sm:text-green-600'>
                    <img src='https://template.annimexweb.com/diva/assets/images/product-images/product-image3-1.jpg' className='w-full p-7 rounded' alt='' />
                    <h3 className='font-bold text-xl text-pink-600'>Flying Ninja</h3>
                    <h4 className='text-2xl text-gray-800 font-bold'>$500</h4>
                    <button type='button' className="w-40 mx-auto text-white bg-purple-600 rounded-full hover:bg-pink-600 py-2">Add To Cart</button>

                    <button className='text-3xl text-rose-600 hover:text-gray-600'><i className="fa-solid fa-trash"></i></button>
                </div>
                <div className='grid  md:grid-cols-5 sm:grid-cols-1 gap-2 items-center justify-center  sm:text-green-600'>
                    <img src='https://template.annimexweb.com/diva/assets/images/product-images/product-image3-1.jpg' className='w-full p-7 rounded' alt='' />
                    <h3 className='font-bold text-xl text-pink-600'>Flying Ninja</h3>
                    <h4 className='text-2xl text-gray-800 font-bold'>$500</h4>
                    <button type='button' className="w-40 mx-auto text-white bg-purple-600 rounded-full hover:bg-pink-600 py-2">Add To Cart</button>

                    <button className='text-3xl text-rose-600 hover:text-gray-600'><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>

        </div>
    );
};

export default WishList;