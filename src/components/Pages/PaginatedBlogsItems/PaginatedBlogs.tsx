import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { LangContext } from '../MultiLanguage/languagecontext/lang';


const PaginatedBlogs = ({ blogs, isLoading }: any) => {
    const { dispatch: { translate } } = useContext(LangContext);

    // console.log(blogs);

    if (isLoading) {
        return <div className='my-5'>
            <div data-aos="fade-up"
                data-aos-duration="3000">
                <h2 className='text-4xl font font-extrabold tracking-tight sm:text-6xl text-center my-5 text-black dark:text-white'>Our Blogs</h2>
            </div>
            <div className='md:grid grid-cols-2  max-w-md overflow-hidden md:max-w-7xl gap-3 mx-auto'>
                <div className=" shadow rounded-md p-4 max-w-7xl w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="bg-slate-200 h-32 w-32"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-10">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow rounded-md p-4 max-w-7xl w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="bg-slate-200 h-32 w-32"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-10">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow rounded-md p-4 max-w-7xl w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="bg-slate-200 h-32 w-32"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-10">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow rounded-md p-4 max-w-7xl w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="bg-slate-200 h-32 w-32"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-10">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow rounded-md p-4 max-w-7xl w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="bg-slate-200 h-32 w-32"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-10">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow rounded-md p-4 max-w-7xl w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="bg-slate-200 h-32 w-32"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-200 rounded"></div>
                            <div className="space-y-10">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    return (<>
        <div className='py-5 w-full scroll-smooth'>
            <h2 className='text-4xl font font-extrabold tracking-tight sm:text-6xl text-center my-5 text-black dark:text-white'> {translate('blog')}</h2>
            <div className='md:grid grid-cols-2 max-w-md overflow-hidden md:max-w-7xl gap-5 mx-auto py-7'>
                {
                    isLoading ? "Loading..." : blogs?.map((blog: any) => (
                        <div>
                            <Link to={`/blogs/details/${blog._id}`}>
                                <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                    <div className="md:flex">
                                        <div className="md:shrink-0">
                                            <img className="h-48 w-full object-cover md:h-full md:w-48" src={blog.img} alt="Man looking at item at a store" />
                                        </div>
                                        <div className="p-8">
                                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Category: {blog.category}</div>
                                            <Link to={`/blogs/details/${blog._id}`} className="block mt-1 text-lg leading-tight font-medium text-gray-800 dark:text-white hover:underline truncate w-96">{blog.title}</Link>
                                            <p className="mt-2 py-3 text-slate-500 w-96 h-18">{blog.description?.slice(0, 80)}...</p>
                                            <div className="flex gap-4">
                                                <h3 className='text-sm text-purple-700 font-semibold'>Posted by {blog.author}</h3>
                                                <h3 className='text-sm text-fuchsia-600 font-semibold'> Date: {blog.date}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </>

    );
};
export default PaginatedBlogs;