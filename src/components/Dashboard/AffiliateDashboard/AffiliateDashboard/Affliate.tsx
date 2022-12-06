import { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    AreaChart,
    Area
} from "recharts";
import UseAuth from "../../../../hooks/UseAuth";
// import './affiliate.css';

export type affiliateLinks = {
    _id: string,
    short: string,
    full: string,
    clicks: string,
    earned: string,
    date: string,
    affiliateUser: string
}

const Affiliate = () => {

    const { user } = UseAuth()
    console.log(user.email);
    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://unitymart-admin.onrender.com/ref/updates')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(link => link.affiliateUser === user.email)
                setData(filter)
            })
    }, [user.email])

    const [links, setLinks] = useState<affiliateLinks[]>([])
    const [loadings, setLoadings] = useState(false)


    useEffect(() => {

        fetch(`https://unitymart-admin.onrender.com/shortUrls`)
            .then(res => res.json())
            .then(data => {
                const userAffiliate = data.filter(link => link.affiliateUser === user.email)
                const topToLow = userAffiliate.sort((a, b) => b.earned - a.earned)
                setLinks(topToLow)
            })

    }, [user.email])


    useEffect(() => {
        if (loadings) {
            setLoadings(true)
            fetch(`https://unitymart-admin.onrender.com/shortUrls`)
                .then(res => res.json())
                .then(data => {
                    const userAffiliate = data.filter(link => link.affiliateUser === user.email)
                    const topToLow = userAffiliate.sort((a, b) => b.earned - a.earned)
                    setLinks(topToLow)
                })
                .finally(() => setLoadings(false))
        }

    }, [loadings, user.email])




    const formatter = (value) => `$${value}`;

    return (
        <div className="container mx-auto">

            <h2 className="text-center">Daily clicks and earning</h2>
            <div className='flex w-100 bg-white dark:bg-slate-800 justify-center items-center drop-shadow-md rounded py-5'>
                <ResponsiveContainer width="50%" height={250} >
                    <AreaChart

                        width={500}
                        height={350}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="clicks" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="50%" height={250}>
                    <AreaChart
                        width={500}
                        height={350}
                        data={data}
                        syncId="anyId"
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis tickCount={6} tickFormatter={formatter} />
                        <Tooltip />
                        <Area type="monotone" dataKey="earned" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </ResponsiveContainer>

            </div>


            <section className="antialiased  text-gray-600 ">
                <div className="flex flex-col justify-center h-full">

                    <div className="w-full  mx-auto bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800 dark:text-white">Top Profitable links</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Date</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Full Link</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Short Link</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Clicks</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Earned</div>
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
                                                            <div className="text-left">{link.short}</div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left">{link.clicks}</div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left font-medium text-green-500">${link.earned}</div>
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
    );
};

export default Affiliate;