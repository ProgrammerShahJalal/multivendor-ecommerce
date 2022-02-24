import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';


const BlogDetails = () => {
    let { id } = useParams();
    const { user } = UseAuth();

    const [blogDetails, setBlogDetails] = useState([])
    useEffect(() => {
        fetch('https://morning-inlet-49130.herokuapp.com/blogs')
            .then(res => res.json())
            .then((data) => {
                const foundBlog = data.filter(detail => detail._id === id)
                setBlogDetails(foundBlog);
            })
    }, [id])

    const { title, img, description, date, author, price } = blogDetails[0] || {};

    const purchase = () => {
        const order = {
            cus_name: user?.displayName,
            cus_email: user?.email,
            product_name: title,
            product_profile: description,
            product_image: img,
            total_amount: price
        }
        fetch(`http://localhost:5000/init`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data);
            })
    }

    return (
        <div className='max-w-md overflow-hidden md:max-w-2xl mx-auto my-5'>
            <div className="md:shrink-0 rounded-xl shadow-lg p-5 bg-white">
                <img className="h-auto w-full object-cover md:h-full md:w-full rounded-md" src={img} alt='' />
                <h2 onClick={purchase} className='text-2xl font font-bold tracking-tight text-gray-900 sm:text-2xl text-center my-5'>{title}</h2>
                <div className='flex justify-around items-center'>
                    <p className="font-bold mt-2 text-cyan-900">Posted by: {author}</p>
                    <p className="font-bold mt-2 text-purple-900">Date: {date}</p>
                </div>
                <div>
                    <p className='text-justify'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;