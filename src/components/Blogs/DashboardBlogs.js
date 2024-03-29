import React, { useEffect, useState } from 'react';
import Blog from './Blog';


const DashboardBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://unitymart-server.onrender.com/blogs")
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setBlogs(data);
            })
    }, [])
    if (isLoading) {
        return <div className='my-5'>
            <h2 className='text-4xl font font-extrabold tracking-tight sm:text-6xl text-center my-5 text-black dark:text-white'>Our Blogs</h2>
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
            <h2 className='text-4xl font font-extrabold tracking-tight sm:text-6xl text-center my-5 text-black dark:text-white'>Our Blogs</h2>
            <div className='md:grid grid-cols-1 max-w-md overflow-hidden md:max-w-7xl gap-5 mx-auto py-7'>
                {
                    blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    </>

    );
};

export default DashboardBlogs;