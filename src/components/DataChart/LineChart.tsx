import { useEffect, useState } from "react";
import {
    XAxis,
    YAxis,
    LineChart,
    CartesianGrid,
    Tooltip,
    Line
} from "recharts";
import UseAuth from "../../hooks/UseAuth";

export type affiliateLinks = {
    _id: string,
    short: string,
    full: string,
    clicks: string,
    earned: string,
    date: string,
    affiliateUser: string
}

const LineCharts = () => {

    const { user } = UseAuth()
    console.log(user.email);
    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://young-springs-82149.herokuapp.com/ref/updates')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(link => link.affiliateUser === 'shah.jalal.ju.bd@gmail.com')
                setData(filter)
            })
    }, [user.email])

    const [links, setLinks] = useState<affiliateLinks[]>([])
    const [loadings, setLoadings] = useState(false)


    useEffect(() => {

        fetch(`https://young-springs-82149.herokuapp.com/shortUrls`)
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
            fetch(`https://young-springs-82149.herokuapp.com/shortUrls`)
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
<LineChart
  width={800}
  height={800}
  data={data}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="date" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="earned" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="clicks" stroke="#387908" yAxisId={1} />
</LineChart>
        </div>
    );
};

export default LineCharts;