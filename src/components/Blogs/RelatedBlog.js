import React from 'react';
import { Link } from 'react-router-dom';


const RelatedBlog = ({ blog }) => {
    const { title, img, _id, date, author } = blog;
    return (
        <div>
            <Link to={`/blogs/details/${_id}`}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="flex gap-2">
                        <div className="md:shrink-0 w-28 text-center">
                            <img className="object-cover" src={img} alt="Man looking at item at a store" />
                        </div>
                        <div className='text-start'>
                            <Link to={`/blogs/details/${_id}`} className="text-sm
 block mt-1 leading-tight font-medium text-black hover:underline truncate w-36">{title}</Link> <p>{date}</p>
                            <p>{author}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RelatedBlog;