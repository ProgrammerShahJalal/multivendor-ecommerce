import React from 'react';
const ProductsGrid = () => {

return (
    <div className="container px-10 pb-16">
    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Top new Arrival</h2>
    <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 gap-6">
        <div className="bg-white shadow overflow-hidden group">
            <div className="relative">
                <img src="https://i.ibb.co/thhtvTd/item-3.jpg" className='w-full' alt="" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                    <i className="fa-regular fa-magnifying-glass"></i>
                    </a>
                    <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                    <i className="fa-regular fa-heart"></i>
                    </a>
                </div>
                
            </div>
            <div className="pt-4 gb-3 px-4">
                    <a href="/">
                        <h4 className="uppercase font-medium text-xl mb-2 text-grey-800 hover:text-red-600 transition">Nike Shoes</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-red-600 font-semibold">$120</p>
                        <p className="text-sm text-gray-400 line-through">$120</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <button className='block w-full py-1 text-center text-white bg-red-600 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600 transition'>Add to Cart</button>
        </div>
        <div className="bg-white shadow overflow-hidden group">
            <div className="relative">
                <img src="https://i.ibb.co/thhtvTd/item-3.jpg" className='w-full' alt="" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                    <i className="fa-regular fa-magnifying-glass"></i>
                    </a>
                    <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                    <i className="fa-regular fa-heart"></i>
                    </a>
                </div>
                
            </div>
            <div className="pt-4 gb-3 px-4">
                    <a href="/">
                        <h4 className="uppercase font-medium text-xl mb-2 text-grey-800 hover:text-red-600 transition">Nike Shoes</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-red-600 font-semibold">$120</p>
                        <p className="text-sm text-gray-400 line-through">$120</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <button className='block w-full py-1 text-center text-white bg-red-600 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600 transition'>Add to Cart</button>
        </div>
        <div className="bg-white shadow overflow-hidden group">
            <div className="relative">
                <img src="https://i.ibb.co/thhtvTd/item-3.jpg" className='w-full' alt="" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                    <i className="fa-regular fa-magnifying-glass"></i>
                    </a>
                    <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                    <i className="fa-regular fa-heart"></i>
                    </a>
                </div>
                
            </div>
            <div className="pt-4 gb-3 px-4">
                    <a href="/">
                        <h4 className="uppercase font-medium text-xl mb-2 text-grey-800 hover:text-red-600 transition">Nike Shoes</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-red-600 font-semibold">$120</p>
                        <p className="text-sm text-gray-400 line-through">$120</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <button className='block w-full py-1 text-center text-white bg-red-600 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600 transition'>Add to Cart</button>
        </div>
        <div className="bg-white shadow overflow-hidden group">
            <div className="relative">
                <img src="https://i.ibb.co/thhtvTd/item-3.jpg" className='w-full' alt="" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                    <i className="fa-regular fa-magnifying-glass"></i>
                    </a>
                    <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 transition' href="/">
                    <i className="fa-regular fa-heart"></i>
                    </a>
                </div>
                
            </div>
            <div className="pt-4 gb-3 px-4">
                    <a href="/">
                        <h4 className="uppercase font-medium text-xl mb-2 text-grey-800 hover:text-red-600 transition">Nike Shoes</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-red-600 font-semibold">$120</p>
                        <p className="text-sm text-gray-400 line-through">$120</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>
                <button className='block w-full py-1 text-center text-white bg-red-600 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600 transition'>Add to Cart</button>
        </div>
    </div>
</div>
    );
};

export default ProductsGrid;