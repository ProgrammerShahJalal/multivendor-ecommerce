import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

export default function AddBlogForm() {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        axios.post('https://morning-inlet-49130.herokuapp.com/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added a New Blog Successfully!');
                    reset();
                }
            })
    }
    return (

        <div className="container px-12 py-5">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Add Blog</h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-white">
                            This information will be displayed publicly so be careful what you share.
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white dark:bg-slate-700 space-y-6 sm:p-6">
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="author-name" className="block text-sm font-medium text-gray-700 dark:text-white">
                                            Author name
                                        </label>
                                        <input
                                            type="text"
                                            id="author-name"
                                            autoComplete="given-name"
                                            {...register("author", { required: true })}
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-white">
                                            Blog title
                                        </label>
                                        <input
                                            {...register("title", { required: true })}
                                            type="text"
                                            id="blog-title"
                                            autoComplete="given-title"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="image-link" className="block text-sm font-medium text-gray-700 dark:text-white">
                                            Image link
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                {...register("img", { required: true })}
                                                type="text"
                                                id="image-link"
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                placeholder=" https://i.ibb.co/Bq377Hs/clothing.jpg"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-white">
                                            Category
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                {...register("category", { required: true })}
                                                type="text"
                                                id="category"
                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input
                                        {...register("date", { required: true })}
                                        type="date"
                                        id="date"
                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-white">
                                        Description
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            {...register("description", { required: true })}
                                            id="description"
                                            rows={3}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="write your blog description"
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-white">
                                        Brief description for your blog. URLs are hyperlinked.
                                    </p>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 dark:bg-slate-700 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
