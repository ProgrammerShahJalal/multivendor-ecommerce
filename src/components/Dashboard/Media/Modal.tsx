import React, { useEffect, useState } from "react";
import UseAuth from "../../../hooks/UseAuth";
import "./media.css"
export default function Modal({ eventBubbling, showModal, setShowModal, selectedItems }: any) {

    const [data, setData] = useState<any>()
    const [images, setImages] = useState<any>()
    const [isTrue, setIsTrue] = useState<boolean>(true)
    const { userDetails } = UseAuth()

    // function imgExists(id: string) {
    //     return selectedItems.some((img: any) => img.id === id);
    // }

    const handleUploadImages = (event: React.SyntheticEvent) => {
        console.log('form 2', images);

        // event.preventDefault()
        // event.stopPropagation()
        const formData = new FormData();
        const files = images

        for (let i = 0; i < files.length; i += 1) {
            formData.append('images[]', files[i]);
        }

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

    return (
        <>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5 "
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-4xl ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-slate-800 outline-none focus:outline-none px-5 py-4">
                                {/*header*/}
                                <div className='scroll'>
                                    <div>
                                        <h1 className='text-2xl	font-bold mb-2'>Media Gallery</h1>
                                        <div className='image-upload mb-5'>

                                            <label className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md flex-col items-center bg-white dark:bg-slate-800'>
                                                <div>
                                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <br />
                                                <div>
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
                                                <button onClick={(e) => handleUploadImages(e)} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" form="form2">Upload</button>
                                            </div>


                                        </div>

                                    </div>
                                    <div className=" grid grid-cols-5 gap-2 mx-auto gallery-images scroll-modal"  >
                                        {
                                            data?.map((order: any, idx: number) =>
                                                Object.entries(order).map(
                                                    ([key, value]: any) => {
                                                        if (key === 'urls') {
                                                            return value.map((url: any, idx: number) => {

                                                                return (
                                                                    <div key={url.asset_id} className={`w-full rounded  ${selectedItems.some((img: any) => img.id === url.asset_id) ? 'border-4 border-indigo-600' : ''}`}>
                                                                        <img style={{ height: '150px' }} onClick={eventBubbling} id={url.asset_id} src={url.secure_url} width={150} height={'150px'} alt="" />
                                                                    </div>
                                                                );
                                                            })

                                                        }
                                                    }
                                                )
                                            )}
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-indigo-600 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}