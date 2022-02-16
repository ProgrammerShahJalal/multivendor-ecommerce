import React from 'react';
import { Link } from 'react-router-dom';


const Blog = ({ blog }) => {
    const { title, img, description, _id, author, category, date } = blog;
    return (
        <div>
            <Link to={`/blogs/details/${_id}`}>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img className="h-48 w-full object-cover md:h-full md:w-48" src={img} alt="Man looking at item at a store" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Category: {category}</div>
                            <Link to={`/blogs/details/${_id}`} class="block mt-1 text-lg leading-tight font-medium text-black hover:underline truncate w-64">{title}</Link>
                            <p className="mt-2 text-slate-500 truncate w-96 h-12">{description}</p>
                            <div className="flex gap-4">
                                <h3 className='text-sm'>Posted by {author}</h3>
                                <h3 className='text-sm'>Date: {date}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Blog;