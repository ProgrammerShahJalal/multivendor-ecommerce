export const GetUserDetails = (email, setData, setIsLoading) => {
    setIsLoading(true)
    fetch(`https://guarded-ocean-73313.herokuapp.com/users/${email}`)
        .then(res => res.json())
        .then(data => setData(data))
        .finally(() => setIsLoading(false))

}