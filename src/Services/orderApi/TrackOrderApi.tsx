export const TrackOrderApi = (id, email, setData, setIsLoading) => {
    // const [data, setData] = useState<any[]>([])
    // const [isLoading, setIsLoading] = useState<boolean>(false)//
    console.log(`http://localhost:5000/dashboard/track-order?createdid=${id}&&email=${email}`);

    setIsLoading(true)
    fetch(`http://localhost:5000/dashboard/track-order?createdid=${id}&&email=${email}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
        .finally(() => setIsLoading(false))

    return { setData }
}