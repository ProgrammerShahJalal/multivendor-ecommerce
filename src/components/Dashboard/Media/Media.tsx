import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UseAuth from '../../../hooks/UseAuth'
import './media.css'


export default function Media() {
    const [images, setImages] = useState<any>([])
    const [data, setData] = useState<any>()
    const [isTrue, setIsTrue] = useState<boolean>(true)
    const [selectedItems, setSelectedItems] = useState<any>([])
    const { userDetails } = UseAuth()

    const handleUploadImages = (e: any) => {
        e.preventDefault()
        const formData = new FormData();
        const files = images
        for (let i = 0; i < files.length; i += 1) {
            formData.append('images[]', files[i]);
        }
        formData.append("vendor", userDetails.email)

        fetch('https://young-springs-82149.herokuapp.com/media', {
            method: 'post',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setIsTrue(true)
                    alert('img Added')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });


    }

    useEffect(() => {
        if (userDetails.role === "vendor") {
            fetch(`https://young-springs-82149.herokuapp.com/media/${userDetails.email}`)
                .then(res => res.json())
                .then(async data => {
                    // Show latest
                    const sort = await data.sort(function (a: any, b: any) {
                        return +new Date(b.uploadDate) - +new Date(a.uploadDate);
                    });
                    setData(sort)
                    setIsTrue(false)
                })
        } else if (isTrue) {
            fetch('https://young-springs-82149.herokuapp.com/media')
                .then(res => res.json())
                .then(data => {
                    // Show latest
                    const sort = data.sort(function (a: any, b: any) {
                        return +new Date(b.uploadDate) - +new Date(a.uploadDate);
                    });
                    setData(sort)
                    setIsTrue(false)

                })
        } else {
            fetch('https://young-springs-82149.herokuapp.com/media')
                .then(res => res.json())
                .then(data => {
                    // Show latest
                    const sort = data.sort(function (a: any, b: any) {
                        return +new Date(b.uploadDate) - +new Date(a.uploadDate);
                    });
                    setData(sort)

                })
        }

    }, [isTrue, userDetails.email, userDetails.role])




    const eventBubbling = (e: any) => {
        // const isExist = selectedItems.findIndex((img: any) => img.id === e.target.id)

        // if (isExist === -1) {
        //     setSelectedItems((prevItem: any) => [...prevItem, { id: e.target.id, src: e.target.src }])

        // } else {
        //     const arr = selectedItems.filter((item) => {
        //         return item.id !== e.target.id
        //     })
        //     setSelectedItems(arr)

        // }

    }

    return (
        <div>
            <div className='px-5'>
                <h1 className='lg:text-2xl md:text-lg sm:text-sm font-bold mb-2'>Media Gallery</h1>
                <div className='image-upload mb-5'>
                    <form onSubmit={handleUploadImages}>
                        <label className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md flex-col items-center bg-white dark:bg-slate-800'>
                            <div>
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <br />
                            <div className='lg:text-lg md:text-base sm:text-xs lg:w-96 md:w-72 sm:w-32'>
                                <span>+ Add Images up to 10 images</span>
                                <input
                                    type="file"
                                    name="images"
                                    onChange={(e) => setImages(e.target.files)}
                                    multiple
                                    accept="image/png , image/jpeg, image/webp"
                                />
                            </div>
                        </label>
                        <div className=" py-3 text-right ">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Upload</button>
                        </div>
                    </form>

                </div>
            </div>
            {isTrue ? <span className='flex justify-center'><CircularProgress color="inherit" /></span> :
                <div className="container grid grid-cols-6 gap-4 mx-auto"  >
                    {data?.map((order: any, idx: number) =>
                        Object.entries(order).map(
                            ([key, value]: any) => {
                                if (key === 'urls') {
                                    return value.map((url: any, idx: number) => {

                                        return (
                                            <div key={idx + 1} className={`w-full  `}>
                                                <img className={`media-img shadow rounded ${selectedItems.includes(url.asset_id) ? 'border-4 border-indigo-600' : ''}`} onClick={eventBubbling} key={url.asset_id} id={url.asset_id} src={url.secure_url} alt="" />
                                            </div>
                                        );
                                    })

                                } else {
                                    return null
                                }
                            }
                        )
                    )}
                </div>}
        </div>
    )
}