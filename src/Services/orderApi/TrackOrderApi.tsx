export const TrackOrderApi = (id, email, setData, setIsLoading) => {
    // const [data, setData] = useState<any[]>([])
    // const [isLoading, setIsLoading] = useState<boolean>(false)//
    console.log(`https://young-springs-82149.herokuapp.com/dashboard/track-order?createdid=${id}&&email=${email}`);

    setIsLoading(true)
    fetch(`https://young-springs-82149.herokuapp.com/dashboard/track-order?createdid=${id}&&email=${email}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
        .finally(() => setIsLoading(false))

    return { setData }
}