import { useEffect, useState } from "react";
import LottieBlog from "../Lottie/LottieBlog";
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
        return <img className="mx-auto" src="https://i.ibb.co/dr9rxd7/preloader.gif" alt="preLoader" />
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-start lg:justify-between">
                <div className="lg:w-3/4">
                    <BlogDetails />
                </div>
                <div className="lg:w-1/4">
                    <LottieBlog />
                    <h2 className="text-xl font-bold">Related Blogs</h2>
                    <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            blogs.slice(5, 10).map(blog => <RelatedBlog key={blog._id} blog={blog}></RelatedBlog>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
