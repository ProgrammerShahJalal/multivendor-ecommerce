import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const BlogDetails = () => {
    let { id } = useParams();
    // console.log(id)
    const [blogDetails, setBlogDetails] = useState([])
    useEffect(() => {
        fetch('https://morning-inlet-49130.herokuapp.com/blogs')
            .then(res => res.json())
            .then((data) => {
                const foundBlog = data.filter(detail => detail._id === id)
                setBlogDetails(foundBlog);
            })
    }, [id])

    const { title, img, description, author } = blogDetails[0] || {};



    return (
        <div className='max-w-md overflow-hidden md:max-w-2xl mx-auto my-5'>
            <div className="md:shrink-0 rounded-xl shadow-lg p-5 bg-white dark:bg-slate-800">
                <img className="h-auto w-full object-cover md:h-full md:w-full rounded-md" src={img} alt='' />
                <h2 className='text-2xl font font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl text-center my-5'>{title}</h2>
                <div className='flex justify-around items-center mb-5'>
                    <p className="font-semi-bold mt-2 text-cyan-900">Posted by: {author}</p>
                    <p className="font-semi-bold mt-2 text-purple-900">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>
                <div>
                    <p className='text-justify select-none'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;