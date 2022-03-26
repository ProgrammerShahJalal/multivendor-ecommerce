import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export type attributeType = {
    _id: number,
    attribute_Title: string,
    slug: string,
    vendor: string,
    options: {
        label: string,
        value: string
    }
}

export default function Popup({ attr, setIfShouldUpdate }: any) {
    const [isTrue, setIsTrue] = useState<boolean>(false);
    const [willValueUpdate, setWillValueUpdate] = useState<boolean>(false);
    const [label, setLabel] = useState<string>('');
    const [attributes, setAttributes] = useState<attributeType[]>([]);
    const toggle = () => setIsTrue(!isTrue);

    console.log(attr, 'attr attr');


    const addAttributeValues = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (label === '') {
            return
        }
        const value = label?.split(' ').join('-')

        let update = { options: { label, value }, id: attr._id }

        fetch('https://young-springs-82149.herokuapp.com/dashboard/attributes', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                setLabel('')
                setIfShouldUpdate(true)
            })

    }
    console.log(attr, 'updated attr');

    //  LOAD CATEGORIES
    useEffect(() => {
        if (willValueUpdate) {
            fetch('https://young-springs-82149.herokuapp.com/dashboard/attributes')
                .then(res => res.json())
                .then(data => setAttributes(data))
            setWillValueUpdate(false)
        }

    }, [willValueUpdate])

    useEffect(() => {
        fetch('https://young-springs-82149.herokuapp.com/dashboard/attributes')
            .then(res => res.json())
            .then(data => setAttributes(data))
    }, [])

    const handleDeleteValue = (id, value) => {

        fetch(`https://young-springs-82149.herokuapp.com/dashboard/attribute/fieldDelete/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ value: value.value })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Value deleted')
                }
                setIfShouldUpdate(true)
            })
    }

    return (
        <>
            <button className="text-white font-bold py-1 px-3 rounded text-xs bg-indigo-600 hover:bg-green-dark mr-3 cursor-pointer" onClick={() => toggle()}>Add Value</button>
            {/* Modal */}

            <div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${isTrue ? '' : 'hidden'}`} id="modal">
                <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                    <div className="inline-block align-center bg-white dark:bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

                        <form className='p-3 ' onSubmit={addAttributeValues}>
                            <label className="text-sm font-medium text-gray-700 my-6"> {attr.label} </label>

                            <div className='flex flex-row gap-6'>
                                <div className='w-96'>
                                    <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="label" type="text" placeholder="Value" defaultValue={label} onBlur={(e) => setLabel(e.target.value)} />
                                </div>
                                <div className="text-right ">
                                    <button type="submit" className="inline-flex justify-center py-3 px-5 border border-transparent drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add</button>
                                </div>
                            </div>
                        </form>
                        <table className="text-left w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Values</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-right	">Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    attr.options ? Object.entries(attr.options).map(([key, value]: any) => {
                                        console.log(key, 'key, value', value);

                                        return <tr key={value.value} className="hover:bg-grey-lighter">
                                            <td className="py-4 px-6 border-b border-grey-light">{value.label}</td>
                                            <td className="py-4 px-6 border-b border-grey-light text-right	">

                                                <button onClick={() => handleDeleteValue(attr._id, value)} className="text-white font-bold py-1 px-3 rounded text-xs bg-red-600 hover:bg-blue-dark">Delete</button>
                                            </td>
                                        </tr>


                                    }) : <h2 className='text-center'>No value found</h2>
                                }






                            </tbody>
                        </table>
                        <div className="bg-gray-200 px-4 py-3 text-right">

                            <button type="button" onClick={() => toggle()} className="py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white rounded mr-2"><i className="fas fa-plus"></i> Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}