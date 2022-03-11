export const TrackOrderApi = (id, email, setData, setIsLoading) => {
    // const [data, setData] = useState<any[]>([])
    // const [isLoading, setIsLoading] = useState<boolean>(false)//

    setIsLoading(true)
    fetch(`https://guarded-ocean-73313.herokuapp.com/dashboard/track-order?createdid=${id}&&email=${email}`)
        .then(res => res.json())
        .then(data => setData(data))
        .finally(() => setIsLoading(false))

    return { setData }
}