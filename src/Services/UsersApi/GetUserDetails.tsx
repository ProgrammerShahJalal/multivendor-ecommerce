export const GetUserDetails = (email, setData, setIsLoading) => {
    setIsLoading(true)
    fetch(`https://unitymart-admin.onrender.com/users/${email}`)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("userDetails", JSON.stringify(data));
            setData(data)
        })
        .finally(() => setIsLoading(false))

}