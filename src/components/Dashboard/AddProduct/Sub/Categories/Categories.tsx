import React, { useEffect, useState } from 'react'

interface categories {
    _id: number
    slug: string,
    vendor: string,
    options: {
        label: string,
        value: string
    }
}

export default function Categories() {
    const [isEdit, setIsEdit] = useState(false);
    const [ifShouldUpdate, setIfShouldUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let [categoryValue, setCategoryValue] = useState<string>('')
    const [category, setCategory] = useState<string>('');
    const [categories, setCategories] = useState<categories[]>([
        {
            _id: 0,
            slug: '',
            vendor: '',
            options: {
                label: '',
                value: ''
            }
        }
    ]);
    const toggle = () => setIsEdit(!isEdit);

    const handleAddCategory = (e: any) => {
        e.preventDefault()
        const slug = category?.split(' ').join('-')
        const isMatching = categories.find(category => category.slug === slug)
        if (isMatching) {
            return alert('added alreadi')
        }
        setIfShouldUpdate(true)

        const newCategory = { vendor: 'admin', options: { label: category } }

        fetch('https://young-springs-82149.herokuapp.com/dashboard/addCategory', {
            headers: { "Content-Type": "application/json" },
            method: 'POST',
            body: JSON.stringify(newCategory)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setIfShouldUpdate(true)
                    alert('Product Added')

                }
            })
            .catch(error => {
                console.error('Error:', error);
            });


    }
    const [categoryId, setCategoryId] = useState<number>(0)
    const getCategoryId = (id: number) => {
        toggle()
        setCategoryId(id)
    }
    const updateCategoryId = (id: number) => {
        toggle()
        console.log(categoryValue);
        if (categoryValue === '') {
            return
        }

        const update = { categoryValue, id }
        fetch('https://young-springs-82149.herokuapp.com/dashboard/categories', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                setCategoryValue('')
                setIfShouldUpdate(true)
            })

    }
    console.log(categoryValue, 'categoryValue');



    const handleDelete = (id: number) => {

        if (window.confirm('Are you sure you want to delete?')) {
            setIsLoading(true)
            fetch(`https://young-springs-82149.herokuapp.com/dashboard/categories/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Category Deleted')
                    }

                })
                .finally(() => { setIfShouldUpdate(true); setIsLoading(false) })
        }
    }

    //  LOAD CATEGORIES
    useEffect(() => {
        if (ifShouldUpdate) {
            fetch('https://young-springs-82149.herokuapp.com/dashboard/categories')
                .then(res => res.json())
                .then(data => setCategories(data))
            setIfShouldUpdate(false)
        }

    }, [ifShouldUpdate])

    useEffect(() => {
        fetch('https://young-springs-82149.herokuapp.com/dashboard/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);





    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className=' px-4 py-5 bg-white dark:bg-slate-800 space-y-6 sm:p-6 shadow sm:rounded-md sm:overflow-hidden'>
                <form onSubmit={handleAddCategory}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3" htmlFor="category"> Category Name </label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="category" onBlur={(e) => setCategory(e.target.value)} type="text" placeholder="Category Name" />
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
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Categories</th>
                                    <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-right	">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories.map(category => {

                                        return <tr key={category._id} className="hover:bg-grey-lighter">
                                            {isEdit && category._id === categoryId ? <td><input onChange={(e) => setCategoryValue(e?.target.value)} className="shadow appearance-none border rounded w-full mt-2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" defaultValue={category.options.label} placeholder="Category Name" /> </td> : <td className="py-4 px-6 border-b border-grey-light">{category.options.label}</td>}

                                            <td className="py-4 px-6 border-b border-grey-light text-right	">
                                                {!isEdit ? <span className="text-white font-bold py-1 px-3 rounded text-xs bg-indigo-600 hover:bg-green-dark mr-3 cursor-pointer" onClick={() => getCategoryId(category._id)}>Edit</span> :
                                                    <span className="text-white font-bold py-1 px-3 rounded text-xs bg-indigo-600 hover:bg-green-dark mr-3 cursor-pointer" onClick={() => updateCategoryId(category._id)}>Save</span>}
                                                <button onClick={() => handleDelete(category._id)} className="text-white font-bold py-1 px-3 rounded text-xs bg-red-600 hover:bg-blue-dark">Delete</button>
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