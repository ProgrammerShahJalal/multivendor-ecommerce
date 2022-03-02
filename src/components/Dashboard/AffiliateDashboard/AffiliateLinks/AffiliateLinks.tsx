import React, { useEffect, useState } from 'react'
import UseAuth from '../../../../hooks/UseAuth'
import { affiliateLinks } from '../AffiliateDashboard/Affliate'


export default function AffiliateLinks() {
    const { user } = UseAuth()
    const [url, setUrl] = useState<any>()
    const [links, setLinks] = useState<affiliateLinks[]>()
    const [loadings, setLoadings] = useState(false)

    useEffect(() => {

        fetch(`http://localhost:5000/shortUrls`)
            .then(res => res.json())
            .then(data => {
                const userAffiliate = data.filter(link => link.affiliateUser === user.email)
                setLinks(userAffiliate)
            })

    }, [user.email])


    useEffect(() => {
        if (loadings) {
            setLoadings(true)
            fetch(`http://localhost:5000/shortUrls`)
                .then(res => res.json())
                .then(data => {
                    const userAffiliate = data.filter(link => link.affiliateUser === user.email)
                    setLinks(userAffiliate)
                })
                .finally(() => setLoadings(false))
        }

    }, [loadings, user.email])

    const handleSubmit = (e) => {
        e.preventDefault()
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const formData = new FormData();
        formData.append('url', url);
        formData.append('date', date);
        formData.append('affiliateUser', user.email);

        fetch('http://localhost:5000/shortUrls', {
            method: 'post',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Link Added')
                    setLoadings(true)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    // DELETE 
    const deleteUrl = (shortUrl) => {
        fetch(`http://localhost:5000/delete/shortUrl/${shortUrl}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Link Deleted')
                    setLoadings(true)
                    // const remainingOrders = orders.filter(order => order._id !== id)
                    // setOrders(remainingOrders)
                }

            })
            .finally(() => setLoadings(false))

    }

    function copyText(entryText) {
        navigator.clipboard.writeText(entryText);
    }


    return (
        <div>  <h1 className='font-semibold text-gray-800'>Create Affiliate Link </h1>
            <form onSubmit={handleSubmit} className="my-4 d-flex">
                {/* <!-- <label for="fullURL" class="sr-only d-flex-none">URL</label> --> */}
                {/* <input placeholder="URL" className="form-control  w-100" required type="url" onBlur={(e) => setUrl(e.target.value)} name="fulURL" id='fullURL' /> */}
                <div className="flex items-center mr-6 my-2 w-100">
                    <input onBlur={(e) => setUrl(e.target.value)} name="fulURL" id='fullURL' type="search" className="bg-purple-white shadow rounded border-0 p-3  w-full" placeholder="Example: https://unitymart-c522a.web.app/product/title" />
                    <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent drop-shadow-md text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create</button>
                </div>

            </form>
            <section className="antialiased  text-gray-600 ">
                <div className="flex flex-col justify-center h-full">

                    <div className="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">Affiliate links</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Date</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Full Link</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Affiliate Link</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Clicks</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Earned</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Action</div>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        {
                                            loadings ? 'Loading' :
                                                !links?.length ? 'No URLs Found' : links?.map(link => {
                                                    return <tr>
                                                        <td className="p-2 whitespace-nowrap">
                                                            {link.date}
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left">{link.full}</div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left"><a href={`http://localhost:5000/${link.short}`}>{link.short}</a> <i className="fa-solid fa-copy cursor-pointer"
                                                                onClick={() => copyText(`http://localhost:5000/${link.short}`)} title="Copy"></i></div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left">{link.clicks}</div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left font-medium text-green-500">${link.earned}</div>
                                                        </td>
                                                        <td>
                                                            <button className="inline-flex justify-center py-1 px-6 border border-transparent drop-shadow-md text-xs font-medium rounded-md text-white bg-red-600 " onClick={() => deleteUrl(link.short)}>Delete</button>
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
            </section>

        </div>
    )
}