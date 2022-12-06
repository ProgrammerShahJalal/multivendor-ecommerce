// ADD USER TO DATABASE
export const addUserToDB = (details, userRole) => {
    console.log(details, 'details details details');

    const date = new Date()
    const user = { name: details.displayName, email: details.email, photo: details.photoURL, phone: details.phoneNumber, role: userRole, date: date.toLocaleString(), status: "Active" }
    // localStorage.setItem("userDetails", JSON.stringify(user))
    fetch('https://unitymart-admin.onrender.com/addUser', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => console.log(data, 'data asdasd'))

}