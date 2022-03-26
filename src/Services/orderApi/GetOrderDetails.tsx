import { useEffect } from "react"

export const GetOrderDetails = (id, data, setData, setIsLoading) => {
    // const [data, setData] = useState<any[]>([])
    // const [isLoading, setIsLoading] = useState<boolean>(false)//
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://young-springs-82149.herokuapp.com/dashboard/orders?id=${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .finally(() => setIsLoading(false))
    }, [id, setData, setIsLoading])
    return { data, setData }
}