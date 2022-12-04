import React, { useEffect, useState } from 'react';

const BlogsFirstLook = () => {
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
        return <div className='text-center'>
            <button type="button" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing...
            </button>
        </div>
    }
    return (
        <div className='text-center'>
            <h2 className='text-xl font-semibold'>Our total blogs {blogs.length}</h2>
            <img className='w-2/4 mx-auto px-5 py-3' src="https://i.ibb.co/SvmDD3x/blogdashboard.png" alt="" />
        </div>
    );
};

export default BlogsFirstLook;