import { useEffect, useState } from "react";
import BlogDetails from "./BlogDetails/BlogDetails"
import RelatedBlog from "./RelatedBlog";

/* This example requires Tailwind CSS v2.0+ */
export default function DetailBlogPage() {

    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://morning-inlet-49130.herokuapp.com/blogs")
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setBlogs(data);
            })
    }, [])

    if (isLoading) {
        return <div className="text-center text-white my-32">
            <button type="button" className="bg-indigo-500 rounded-lg" disabled>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                </svg>
                Blog details is loading...
            </button>
        </div>
    }

    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-3/4">
                    <BlogDetails />
                </div>
                <div className="lg:w-1/4">
                    <h2 className="text-xl font-bold">Related Blogs</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {
                            blogs.slice(6, 10).map(blog => <RelatedBlog key={blog._id} blog={blog}></RelatedBlog>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
