import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
interface UserState {
    users: {
        _id: string
        name: string
        email: string
        role: string
    }[]
}
const Users = () => {
    const [users, setUsers] = useState<UserState["users"]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [notFound, setNotFound] = useState('')
    useEffect(() => {
        if (users.length === 0) {
            fetch('https://young-springs-82149.herokuapp.com/users')
                .then(res => res.json())
                .then(data => setUsers(data))
        }
    }, [users])


    const handleOnChange = (event: any) => {
        const searchText = event.target.value.toLowerCase();
        const findUser: any = users && users.length > 0 ? users?.filter(p => p?.email.toLowerCase().includes(searchText)) : null;
        if (findUser.length > 0) {
            setUsers(findUser);
            setNotFound('')
        }
        else if (findUser.length === 0) {
            setNotFound('Not found')
            fetch('https://young-springs-82149.herokuapp.com/users')
                .then(res => res.json())
                .then(data => setUsers(data))
        }
        if (searchText === '') {
            fetch('https://young-springs-82149.herokuapp.com/users')
                .then(res => res.json())
                .then(data => setUsers(data))
        }
    }

    const deleteUser = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setIsLoading(true)
            fetch(`https://young-springs-82149.herokuapp.com/dashboard/user-delete/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        alert('Product Deleted')
                        const remainingProducts = users.filter(user => user._id !== id)
                        setUsers(remainingProducts)
                    }

                })
                .finally(() => setIsLoading(false))
        }
    }
    return (
        <div className='container mx-auto px-4 sm:px-8'>
            <div className='py-4'>
                <div>
                    <h2 className="text-2xl font-semibold leading-tight text-left">Users</h2>
                </div>
                <div className="my-2 flex sm:flex-row flex-col">

                    <div className="block relative">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input onChange={handleOnChange} placeholder="Search"
                            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white dark:bg-slate-800 focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>

                </div>
                <div>

                    <div className="text-xl text-center font-md text-red-600">{notFound}</div>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">

                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        User Email
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Role
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Created at
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Edit
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            {users?.length > 0 && users?.map((user: any) =>
                            (<tbody>
                                <tr>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="w-full h-full rounded-full"
                                                    src={user.photo || "https://i.ibb.co/dDS0Jq5/user.png"}
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">
                                                    {user.name}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                        <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">{user.email}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                        <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">{user.role}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                        <p className="text-gray-900 dark:text-white whitespace-no-wrap text-left">
                                            {user.date}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                        <Link to={`/dashboard/users/${user._id}`}><p className="text-white rounded whitespace-no-wrap text-left bg-indigo-600 p-2 w-10">
                                            Edit
                                        </p></Link>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-slate-800 text-sm">
                                        <p onClick={() => deleteUser(user._id)} className="cursor-pointer text-white rounded whitespace-no-wrap text-left bg-red-500 p-2 w-16">
                                            Delete
                                        </p>
                                    </td>
                                </tr>
                            </tbody>)
                            )}

                        </table>

                        {/* <div
                            className="px-5 py-5 bg-white dark:bg-slate-800 border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span className="text-xs xs:text-sm text-gray-900 dark:text-white">
                                Showing 1 to 10 of 50 Entries
                            </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                <button
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div> */}
                    </div>

                </div>

            </div>

        </div>


    );
};

export default Users;