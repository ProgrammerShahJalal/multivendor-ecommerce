import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addAttributeValue } from '../../../../../Services/AddAttributes/AddAttributes';

import Popup from './Popup';

interface categories {
    _id: number,
    attribute_Title: string,
    label: string,
    slug: string,
    vendor: string,
    options: {
        label: string,
        value: string
    }
}
export default function Attributes() {
    const [isTrue, setIsTrue] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState(false);
    const [ifShouldUpdate, setIfShouldUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let [attributeValue, setAttributeValue] = useState<string>('')
    const [attribute, setAttribute] = useState<string>('');
    const [attributes, setAttributes] = useState<categories[]>([]);
    const toggle = () => setIsEdit(!isEdit);

    const handleAddAttributes = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addAttributeValue(attribute, setIfShouldUpdate, attributes)

    }

    const [attributeId, setAttributeId] = useState<number>(0)
    const getCategoryId = (id: number) => {
        toggle()
        setAttributeId(id)
    }

    const updateCategoryId = (id: number) => {
        toggle()
        console.log(attributeValue);
        if (attributeValue === '') {
            return
        }

        const update = { categoryValue: attributeValue, id }
        fetch('https://unitymart-admin.onrender.com/dashboard/categories', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                setAttributeValue('')
                setIfShouldUpdate(true)
            })
    }

    //  LOAD ATTRIBUTES
    useEffect(() => {
        if (ifShouldUpdate) {
            fetch('https://unitymart-admin.onrender.com/dashboard/attributes')
                .then(res => res.json())
                .then(data => setAttributes(data))
            setIfShouldUpdate(false)
        }

    }, [ifShouldUpdate])

    useEffect(() => {
        fetch('https://unitymart-admin.onrender.com/dashboard/attributes')
            .then(res => res.json())
            .then(data => setAttributes(data))
    }, [])
    const handleDelete = (id: number) => {

        if (window.confirm('Are you sure you want to delete?')) {
            setIsLoading(true)
            fetch(`https://unitymart-admin.onrender.com/dashboard/attributes/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Attributes Deleted')
                    }

                })
                .finally(() => { setIfShouldUpdate(true); setIsLoading(false) })
        }
    }


    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
            <div className=' px-4 py-5 bg-white dark:bg-slate-800 space-y-6 sm:p-6 shadow sm:rounded-md sm:overflow-hidden'>
                <form onSubmit={handleAddAttributes}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3"> Attribute Name </label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="attribute-title" onBlur={(e) => setAttribute(e.target.value)} type="text" placeholder="Attribute Name" />
                    </div>
                    <div className="py-3 text-right ">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add</button>
                    </div>
                </form>
            </div>

            <div className=' col-span-2 px-4 py-5 bg-white dark:bg-slate-800 space-y-6 sm:p-6 shadow sm:rounded-md sm:overflow-hidden'>
                <div className="mx-auto">
                    <div className="">
                        <table className="text-left w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Attributes</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-right	">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    attributes.map((attr, idx) => {
                                        return <tr key={idx} className="hover:bg-grey-lighter">

                                            <td className="py-4 px-6 border-b border-grey-light">{attr.label}</td>

                                            <td className="py-4 px-6 border-b border-grey-light text-right	">

                                                <Popup attr={attr} setIfShouldUpdate={setIfShouldUpdate} />
                                                <button onClick={() => handleDelete(attr._id)} className="text-white font-bold py-1 px-3 rounded text-xs bg-red-600 hover:bg-blue-dark">Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}