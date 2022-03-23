export const GetUserDetails = (email, setData, setIsLoading) => {
    setIsLoading(true)
    fetch(`https://young-springs-82149.herokuapp.com/users/${email}`)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("userDetails", JSON.stringify(data));
            setData(data)
        })
        .finally(() => setIsLoading(false))

}