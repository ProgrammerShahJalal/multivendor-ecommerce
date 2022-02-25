import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './AddProduct.css'
import Select from 'react-select';
import Modal from '../Media/Modal';
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type attributeValues = {
    label: string, options: [{ label: string, value: string }]
}
type attributes = {
    label: string, value: string
}
const AddProduct: React.FunctionComponent = (props) => {

    const [categories, setCategories] = useState<string[]>([])
    const [attributes, setAttributes] = useState<attributes[]>([])
    const [newAttributes, setNewAttributes] = useState<any>([])

    const [attributeLabel, setAttributeLabel] = useState<any>([])
    const [attributeValues, setAttributeValues] = useState<attributeValues[]>([])

    // DESCRIPTION
    const [onEditorStateChange, setOnEditorStateChange] = useState<any>()
    const [content, setContent] = useState<any>()

    // MODAL
    const [showModal, setShowModal] = useState<boolean>(false);
    // OFFER DATE
    const [date, setDate] = useState<any>('')

    // PRODUCT VALUE
    const [productValue, setProductValue] = useState<any>()


    // SELECTED IMAGES FROM MODAL
    const [selectedImages, setSelectedImages] = useState<any[]>([])


    // GET ATTRIBUTES LABELS AND VALUES
    useEffect(() => {
        fetch('https://guarded-ocean-73313.herokuapp.com/dashboard/attributes')
            .then(res => res.json())
            .then(data => {
                const newArray = data.map(({ label, slug }: any) => ({ label, value: slug }));
                setAttributeLabel(newArray);
                const values = data.map(({ label, options }: any) => ({ label, options: options }));
                setAttributeValues(values)
                // setAttributeLabel(data)
            })
    }, [])



    // GET DYNAMIC ATTRIBUTES VALUE
    const previousValue = (label: string, e: any) => {
        console.log(e.selected);

        let itemIndex: any;
        if (newAttributes.length > 0) {
            itemIndex = newAttributes.findIndex((attr: any) => attr.label === label)
        }

        const newValue = {
            label: label,
            selected: e
        }
        setNewAttributes((oldArray: any): any => {
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
        setIsLoading(true)
        fetch('https://guarded-ocean-73313.herokuapp.com/dashboard/categories')
            .then(res => res.json())
            .then(data => {
                const options = data.map(({ options }: any) => options)
                setNewCat(options)

            }).finally(() => setIsLoading(false))
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
    const handleProductSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(categories);


        if (categories.length === 0) {
            return alert('please add category')
        }
        if (selectedImages.length === 0) {
            return alert('please add an image')
        }

        const newProduct = { ...productValue, images: selectedImages, categories, product_des: content, newAttributes }


        fetch('https://guarded-ocean-73313.herokuapp.com/dashboard/addProduct', {
            headers: { "Content-Type": "application/json" },
            method: 'POST',
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });


    }

    // UPLOAD IMAGES FROM MODAL

    const handleUploadImages = (event: React.SyntheticEvent) => {

        event.preventDefault();

        // const formData = new FormData();
        // const files = images.target.files;
        // for (let i = 0; i < files.length; i += 1) {
        //     formData.append('images[]', files[i]);
        // }

        // fetch('https://guarded-ocean-73313.herokuapp.com/addProduct', {
        //     method: 'post',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             alert('img Added')
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
        event.preventDefault();

    }

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


    console.log(content, 'content');

    return (
        <div>
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleProductSubmit}>
                    <div className="grid grid-cols-3 gap-4">

                        <div className="col-span-2">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    {/* TITLE */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3"> Title </label>
                                        <input className="shadow appearance-none border-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='title' id="name" onBlur={handleGetProductValues} type="text" placeholder="Title" />
                                    </div>
                                    {/* SHORT DETAILS */}
                                    <div className="flex flex-row gap-6">
                                        <div className="basis-1/2">
                                            <label className="block text-sm font-medium text-gray-700 mb-3"> Brand </label>
                                            <input className="shadow appearance-none border-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='brand' onBlur={handleGetProductValues} id="brand" type="text" placeholder="Brand " required />

                                        </div>

                                        <div className="basis-1/2">

                                            <label className="block text-sm font-medium text-gray-700 mb-3"> Categories </label>
                                            <Select isLoading={isLoading} onChange={(e: any) => setCategories(e)} className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" options={newCat} isMulti />

                                        </div>

                                    </div>
                                    <div className="flex flex-row gap-6">
                                        <div className="basis-1/4">
                                            <label className="block text-sm font-medium text-gray-700 mb-3"> Regular Price </label>
                                            <input className="shadow appearance-none border-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="reg_price" onBlur={handleGetProductValues} type="text" placeholder="Regular Price " required />

                                        </div>
                                        <div className="basis-1/4">
                                            <label className="block text-sm font-medium text-gray-700 mb-3"> Sale Price </label>
                                            <input className="shadow appearance-none border-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="sale_price" onBlur={handleGetProductValues} type="text" placeholder="Sale Price" />

                                        </div>
                                        <div className="basis-1/4">
                                            <label className="block text-sm font-medium text-gray-700 mb-3"> Offer last date and time </label>
                                            <DateTimePicker className='shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={setDate} value={date} />
                                        </div>
                                        <div className="basis-1/4">
                                            <label className="block text-sm font-medium text-gray-700 mb-3"> Stock </label>
                                            <input className="shadow appearance-none border-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="stock" onBlur={handleGetProductValues} type="text" placeholder="Quantity Available" required />

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

                                                    <Select options={attr.options}
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
                                        {/* <textarea className="shadow form-textarea mt-1 block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onBlur={handleGetProductValues} name='product_des' rows={5} placeholder="Description"></textarea> */}
                                    </div>



                                </div>

                            </div>
                        </div>
                        <div className="shadow sm:rounded-md sm:overflow-hidden bg-white px-4 py-5 bg-white space-y-6 sm:p-6">
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

                                <Modal eventBubbling={eventBubbling} selectedItems={selectedImages} handleUploadImages={handleUploadImages} showModal={showModal} setShowModal={setShowModal} />

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
                                                        {/* <button
                                                            onClick={() =>
                                                                setSelectedImages(selectedImages.filter((e) => e !== image))
                                                            }
                                                        >
                                                            x
                                                        </button> */}
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

                                <Select onChange={(e: any) => setAttributes(e)} className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" options={attributeLabel} isMulti />

                            </div>

                            <div className=" py-3 text-right ">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Publish</button>
                            </div>
                        </div>


                    </div>
                </form>
            </div>

        </div>

    )
};

export default AddProduct;
