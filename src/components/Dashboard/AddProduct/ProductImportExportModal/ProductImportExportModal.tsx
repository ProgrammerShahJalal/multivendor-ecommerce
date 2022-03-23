import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseAuth from "../../../../hooks/UseAuth";




import { ProductImportDelete } from "../../../../Services/ProductImportDelete/ProductImportDelete";

export default function ProductImportModal({ showModal, setShowModal, setProducts, products, setLoading }: any) {
    const [file, setFile] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [fileName, setFileName] = useState("");
    const [data, setData] = useState<any>([])
    // const [images, setImages] = useState<any>()
    const { userDetails } = UseAuth()
    // function imgExists(id: string) {
    //     return selectedItems.some((img: any) => img.id === id);
    // }

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e: any) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("vendor", userDetails.role);
        formData.append("store", userDetails.store);
        formData.append("publisher", userDetails.email);
        console.log(file);
        setIsLoading(true)
        fetch('https://calm-lake-43480.herokuapp.com/upload-excel', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setIsLoading(false)
                    setLoading(true)
                    setData(data)

                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    };
    const deleteProduct = (id) => {
        ProductImportDelete(id, setIsLoading, products, setProducts, data, setData)
    }

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
                                <div className=''>
                                    <div>
                                        <h1 className='text-2xl	font-bold mb-2'>Product Import</h1>
                                        <div className='image-upload mb-5'>

                                            <label className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md flex-col items-center bg-white dark:bg-slate-800'>
                                                <div>
                                                    <i className="fa-solid fa-arrow-up-from-dotted-line text-4xl"></i>
                                                </div>
                                                <br />
                                                <div className="flex justify-center flex-col align-center ">
                                                    {/* <span>You can upload only simple products</span> <br /> */}
                                                    {/* <input type="file" id="file" onChange={saveFile} /> */}
                                                    <div className="flex text-sm text-gray-600">
                                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                            <span>Upload a file</span>
                                                            <input onChange={saveFile} id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    {/* <input
                                                        type="file"
                                                        name="images"
                                                        onChange={(e) => setImages(e.target.files)}
                                                        multiple
                                                        accept="image/png , image/jpeg, image/webp"
                                                    /> */}
                                                </div>
                                            </label>
                                            <div className=" py-3 text-right ">
                                                {isLoading ? <button type="button" className="inline-flex items-center justify-center py-2 px-4 border border-transparent drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled>
                                                    <i className="fa-solid fa-spinner motion-reduce:hidden animate-spin text-white mr-2"></i>
                                                    Processing...
                                                </button> :
                                                    <button onClick={(e) => uploadFile(e)} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" form="form2">Upload</button>}
                                            </div>


                                        </div>

                                    </div>
                                    <div className=" grid grid-cols-1 gap-2 mx-auto gallery-images overscroll-x-none"  >
                                        {isLoading ? <span className='flex justify-center'><CircularProgress color="inherit" /></span> : <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 scroll" >
                                            <div className="inline-block min-w-full shadow rounded-lg overscroll-x-none " style={{ overflow: "scroll", height: "250px" }}>
                                                <table className="min-w-full leading-normal">
                                                    <thead>
                                                        {/* heading start  */}
                                                        <tr>
                                                            <th
                                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                                Image
                                                            </th>
                                                            <th
                                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                                Product Name
                                                            </th>
                                                            <th
                                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                                Price
                                                            </th>
                                                            <th
                                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                                Stock
                                                            </th>
                                                            <th
                                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                                Categories
                                                            </th>
                                                            <th
                                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                                Vendor
                                                            </th>
                                                            <th
                                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                                Action
                                                            </th>
                                                        </tr>
                                                        {/* heading end  */}
                                                    </thead>
                                                    <tbody className="scroll">
                                                        {/* first order start */}
                                                        {
                                                            data.map(product => {
                                                                console.log(product, 'product');

                                                                return <tr key={product._id}>
                                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                                        <div className="flex items-center">
                                                                            <div className="flex-shrink-0 w-10 h-10">

                                                                                <img className="w-full h-full rounded-full" src={product?.images[0]?.src ?? 'https://healthpointplus.com/wp-content/uploads/woocommerce-placeholder-300x300.png'} alt="" />
                                                                            </div>

                                                                        </div>
                                                                    </td>
                                                                    <td className="px-1 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                                        <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">{product.title}</p>
                                                                    </td>
                                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                                        <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">${product.sale_price | product.reg_price}</p>
                                                                    </td>
                                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                                        <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">
                                                                            {product.stock}
                                                                        </p>
                                                                    </td>
                                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm text-left">
                                                                        <span
                                                                            className="relative inline-block px-3 py-1  font-semibold text-green-900 leading-tight">
                                                                            {/* {product.categories.map(({ label }) => label)} */}
                                                                            {/* {product?.categories[0]?.label} */}
                                                                            {/* <span aria-hidden
                                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span className="relative text-left">Delivered</span> */}
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                                                        Admin
                                                                    </td>
                                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm flex">
                                                                        <Link to={`/dashboard/edit-product/${product._id}`}>
                                                                            <button className="cursor-pointer text-white rounded whitespace-no-wrap mr-2 text-left bg-indigo-500 p-2 mb-1 w-10">
                                                                                Edit
                                                                            </button>
                                                                        </Link>
                                                                        <p onClick={() => deleteProduct(product._id)} className="cursor-pointer bg-red-500 text-white rounded whitespace-no-wrap mr-2 p-2 mb-1 w-16">
                                                                            Delete
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            })
                                                        }
                                                        {/* first order end  */}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>}
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

                                    <a href={require("../../../../Files/new2.xlsx")} download="new2"> <button
                                        className="bg-indigo-600 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"

                                    >
                                        Download A Format
                                    </button></a>



                                    <button
                                        className="bg-indigo-600 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Ok
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