import React, { useEffect, useRef, useState } from 'react';
import '../../AddProduct.css'
import Select from 'react-select';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import Stack from '@mui/material/Stack';

import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import UseAuth from '../../../../../hooks/UseAuth';
import Modal from '../../../Media/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';


type attributeValues = {
    label: string, selected: [{ label: string, value: string }], options: [{ label: string, value: string }]
}

type attributes = {
    label: string, value: string
}
const EditProduct: React.FunctionComponent = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [categories, setCategories] = useState<string[]>([])
    const [attributes, setAttributes] = useState<attributes[]>([])
    const [selectedAttributes, setSelectedAttributes] = useState<any>([])

    const titleRef = useRef<any>()
    const brandRef = useRef<any>()
    const regPriceRef = useRef<any>()
    const salePriceRef = useRef<any>()
    const stockRef = useRef<any>()

    const [attributeLabel, setAttributeLabel] = useState<any>([])
    const [defaultAttributeLabel, setDefaultAttributeLabel] = useState<any>([])
    const [attributeValues, setAttributeValues] = useState<attributeValues[]>([])

    // DESCRIPTION
    const [onEditorStateChange, setOnEditorStateChange] = useState<any>()
    const [content, setContent] = useState<any>()

    // MODAL
    const [showModal, setShowModal] = useState<boolean>(false);
    // OFFER DATE
    const [date, setDate] = useState<Date | null>(new Date())

    // PRODUCT VALUE
    const [productValue, setProductValue] = useState<any>()
    // const [userDetails, setUserDetails] = useState<any>()


    // SELECTED IMAGES FROM MODAL
    const [selectedImages, setSelectedImages] = useState<any[]>([])
    const [productData, setProductData] = useState<any>([])

    const { userDetails } = UseAuth()

    console.log(attributes, ' attributes');

    useEffect(() => {
        setIsLoading(true)
        if (productData.length === 0) {
            fetch(`https://young-springs-82149.herokuapp.com/product/${id}`)
                .then(res => res.json())
                .then(data => {
                    const newArray = data[0]?.attributes ?? data[0]?.attributes.map(({ label, slug }: any) => ({ label, value: slug }));
                    setDefaultAttributeLabel(newArray);
                    const values = data[0]?.attributes ?? data[0]?.attributes.map(({ label, options }: any) => ({ label, options: options }));
                    setAttributes(data[0]?.attributes) // set All the attributes to show on attributes field
                    setCategories(data[0]?.categories) // set All the attributes to show on attributes field
                    setSelectedAttributes(data[0]?.attributes) // to store the previous data into the state
                    setAttributeValues(values) // attributes values
                    setSelectedImages(data[0].images) // previous selected images
                    setContent(data[0].product_des) // previous selected images
                    setProductData(data) // single product data
                })
                .finally(() => setIsLoading(false))
        }
    }, [id, productData.length])




    // GET ATTRIBUTES LABELS AND VALUES
    useEffect(() => {
        setIsLoading(true)

        fetch('https://young-springs-82149.herokuapp.com/dashboard/attributes')
            .then(res => res.json())
            .then(data => {
                const newArray = data.map(({ label, slug }: any) => ({ label, value: slug }));
                setAttributeLabel(newArray);
                const values = data.map(({ label, options }: any) => ({ label, options: options }));
                setAttributeValues(values)
                // setAttributeLabel(data)
            }).finally(() => setIsLoading(false))

    }, [])

    console.log(selectedImages, 'selectedImages');



    // GET DYNAMIC ATTRIBUTES VALUE
    const previousValue = (label: string, e: any) => {
        console.log(e.selected);

        let itemIndex: any;
        if (selectedAttributes.length > 0) {
            itemIndex = selectedAttributes.findIndex((attr: any) => attr.label === label)
        }

        const newValue = {
            label: label,
            selected: e
        }
        setSelectedAttributes((oldArray: any): any => {
            if (itemIndex >= 0) {
                // item exists at newAttributes[itemIndex]
                let updatedArr = [...oldArray];

                updatedArr[itemIndex] = {
                    ...updatedArr[itemIndex],
                    selected: [...e]
                }
                return updatedArr


            } else {
                return [...oldArray, newValue]
            }
        });
    }

    // let newCat: any = []
    const [newCat, setNewCat] = useState()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!newCat) {
            setIsLoading(true)
            fetch('https://young-springs-82149.herokuapp.com/dashboard/categories')
                .then(res => res.json())
                .then(data => {
                    const options = data.map(({ options }: any) => options)
                    setNewCat(options)

                }).finally(() => setIsLoading(false))
        }
    }, [newCat])


    // GET ALL THE VALUES FROM FIELDS
    const handleGetProductValues = (e: any) => {

        const field = e.target.name
        const value = e.target.value
        const newProductData = {
            ...productValue,
            offerDate: date
        }
        newProductData[field] = value

        setProductValue(newProductData)

    }

    // PRODUCT UPLOAD FUNCTION
    const handleProductSubmit = async (e: React.FormEvent<HTMLFormElement>, id) => {
        e.preventDefault()
        console.log('  event.preventDefault(2);');
        if (categories.length === 0) {
            return alert('please add category')
        }
        if (selectedImages.length === 0) {
            return alert('please add an image')
        }

        const newProduct = {
            title: titleRef.current.value,
            brand: brandRef.current.value,
            reg_price: regPriceRef.current.value,
            sale_price: salePriceRef.current.value,
            stock: stockRef.current.value,
            offerDate: date,
            images: selectedImages,
            categories,
            product_des: content,
            newAttributes: selectedAttributes,
        }

        console.log(newProduct, 'newProduct');

        setIsLoading(true)
        fetch(`https://young-springs-82149.herokuapp.com/dashboard/updateProduct/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount) {
                    alert('Product Updated')
                    navigate('/dashboard/products')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            }).finally(() => setIsLoading(false));


    }
    // console.log(newAttributes, 'newAttributes');
    // UPLOAD IMAGES FROM MODAL

    // const handleUploadImages = (event: any) => {
    //     console.log('  event.preventDefault();');

    //     event.preventDefault();

    //     // const formData = new FormData();
    //     // const files = images.target.files;
    //     // for (let i = 0; i < files.length; i += 1) {
    //     //     formData.append('images[]', files[i]);
    //     // }

    //     // fetch('https://young-springs-82149.herokuapp.com/addProduct', {
    //     //     method: 'post',
    //     //     body: formData
    //     // })
    //     //     .then(response => response.json())
    //     //     .then(data => {
    //     //         if (data.insertedId) {
    //     //             alert('img Added')
    //     //         }
    //     //     })
    //     //     .catch(error => {
    //     //         console.error('Error:', error);
    //     //     });


    // }

    // GET SELECTED IMAGE
    const eventBubbling = (e: any) => {
        const isExist = selectedImages.findIndex((img: any) => img.id === e.target.id)

        if (isExist === -1) {
            setSelectedImages((prevItem: any) => [...prevItem, { id: e.target.id, src: e.target.src }])

        } else {
            const arr = selectedImages.filter((item) => {
                return item.id !== e.target.id
            })
            setSelectedImages(arr)

        }

    }



    return (
        <>
            {productData.length === 0 ? <CircularProgress color="inherit" /> :
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={(e) => handleProductSubmit(e, productData[0]._id)}>
                        <div className="grid grid-cols-3 gap-4">

                            <div className="col-span-2">
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="px-4 py-5 bg-white dark:bg-slate-800 space-y-6 sm:p-6">
                                        {/* TITLE */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3"> Title </label>
                                            <input defaultValue={productData[0].title} className="shadow appearance-none border-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='title' id="name" ref={titleRef} type="text" placeholder="Title" />
                                        </div>
                                        {/* SHORT DETAILS */}
                                        <div className="flex flex-row gap-6">
                                            <div className="basis-1/2">
                                                <label className="block text-sm font-medium text-gray-700 mb-3"> Brand </label>
                                                <input ref={brandRef} defaultValue={productData[0]?.brand} className="shadow appearance-none border-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='brand' onBlur={handleGetProductValues} id="brand" type="text" placeholder="Brand " />

                                            </div>

                                            <div className="basis-1/2">

                                                <label className="block text-sm font-medium text-gray-700 mb-3"> Categories </label>
                                                <Select defaultValue={productData[0]?.categories} isLoading={isLoading} onChange={(e: any) => setCategories(e)} className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" options={newCat} isMulti />

                                            </div>

                                        </div>
                                        <div className="flex flex-row gap-6">
                                            <div className="basis-1/4">
                                                <label className="block text-sm font-medium text-gray-700 mb-3"> Regular Price </label>
                                                <input ref={regPriceRef} defaultValue={productData[0].reg_price} className="shadow appearance-none border-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="reg_price" onBlur={handleGetProductValues} type="number" placeholder="Regular Price " required />

                                            </div>
                                            <div className="basis-1/4">
                                                <label className="block text-sm font-medium text-gray-700 mb-3"> Sale Price </label>
                                                <input ref={salePriceRef} defaultValue={productData[0].sale_price} className="shadow appearance-none border-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="sale_price" onBlur={handleGetProductValues} type="number" placeholder="Sale Price" />

                                            </div>
                                            <div className="basis-1/4">
                                                <label className="block text-sm font-medium text-gray-700 mb-3"> Offer last date and time </label>
                                                {/* <DateTimePicker className='shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={setDate} value={date} /> */}
                                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                    <Stack spacing={3}>
                                                        <MobileDateTimePicker
                                                            minDate={new Date()}
                                                            value={productData[0].offerDate || date}
                                                            onChange={(newValue) => {
                                                                setDate(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />

                                                    </Stack>
                                                </LocalizationProvider>
                                            </div>
                                            <div className="basis-1/4">
                                                <label className="block text-sm font-medium text-gray-700 mb-3"> Stock </label>
                                                <input ref={stockRef} defaultValue={productData[0].stock} className="shadow appearance-none border-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="stock" onBlur={handleGetProductValues} type="text" placeholder="Quantity Available" required />

                                            </div>


                                        </div>

                                        <div className='flex flex-row gap-6'>


                                            {attributeValues.map((attr: attributeValues) => {

                                                const item = attributes.filter((list) => {
                                                    return list.label === attr.label;
                                                })[0];
                                                if (item) {

                                                    return <div key={attr.label} className="basis-1/4">
                                                        <label className="block text-sm font-medium text-gray-700 mb-3"> {attr.label} </label>

                                                        <Select options={attr?.options}
                                                            defaultValue={attr.selected}
                                                            onChange={(e: any) => previousValue(attr.label, e)}
                                                            className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" isMulti />
                                                    </div>
                                                }
                                            })}

                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3"> Description </label>
                                            <Editor
                                                editorState={onEditorStateChange}
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"

                                                onEditorStateChange={newState => {
                                                    setOnEditorStateChange(newState)
                                                    setContent(draftToHtml(convertToRaw(newState.getCurrentContent())))
                                                }}
                                            />

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="shadow sm:rounded-md sm:overflow-hidden bg-white dark:bg-slate-800 px-4 py-5 bg-white dark:bg-slate-800 space-y-6 sm:p-6">
                                <section className='image-upload'>
                                    <label className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md flex-col items-center ' onClick={() => setShowModal(true)}>
                                        <div>
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <br />
                                        <div>
                                            <span>+ Add Images up to 10 images</span>
                                        </div>
                                    </label>

                                    <label className='text-center'>Please first upload images from media</label>
                                    <Modal eventBubbling={eventBubbling} selectedItems={selectedImages} showModal={showModal} setShowModal={setShowModal} />

                                    <br />

                                    {/* {selectedImage.length > 0 &&
                                    (selectedImage.length > 10 ? (
                                        <p className="error">
                                            You can't upload more than 10 images! <br />
                                            <span>
                                                please delete <b> {selectedImage.length - 10} </b> of them{" "}
                                            </span>
                                        </p>
                                    ) : (
                                        ''
                                    ))} */}

                                    <div className=" grid grid-cols-5 gap-4 mx-auto gap-6">
                                        {selectedImages &&
                                            selectedImages.map((image: { id: number, src: string }, index: number) => {
                                                return (

                                                    <div key={image.id} className="  w-full">
                                                        <div className='flex justify-between'>
                                                            <button
                                                                className='bg-red-400 text-white rounded px-1'
                                                                onClick={() =>
                                                                    setSelectedImages(selectedImages.filter((e) => e.id !== image.id))
                                                                }
                                                            >
                                                                x
                                                            </button>
                                                            <p>{index + 1}</p>
                                                        </div>
                                                        <img className='shadow sm:rounded-md product-thumb' src={image.src} height="200" alt="upload" />


                                                    </div>


                                                );
                                            })}
                                    </div>
                                </section>
                                <div className="basis-1/4">

                                    <label className="block text-sm font-medium text-gray-700 mb-3"> Attributes </label>

                                    <Select defaultValue={defaultAttributeLabel} onChange={(e: any) => setAttributes(e)} className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" options={attributeLabel} isMulti />

                                </div>

                                <div className=" py-3 text-right ">
                                    {isLoading ? <button type="button" className="inline-flex items-center justify-center py-2 px-4 border border-transparent drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled>
                                        <i className="fa-solid fa-spinner motion-reduce:hidden animate-spin text-white mr-2"></i>
                                        Processing...
                                    </button> : <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Publish</button>}
                                </div>
                            </div>


                        </div>
                    </form>
                </div>

            }
        </>
    )
};

export default EditProduct;
