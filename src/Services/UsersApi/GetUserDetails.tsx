export const GetUserDetails = (email, setData, setIsLoading) => {

    setIsLoading(true)
    fetch(`http://localhost:5000/users/${email}`)
        .then(res => res.json())
        .then(data => setData(data))
        .finally(() => setIsLoading(false))

}