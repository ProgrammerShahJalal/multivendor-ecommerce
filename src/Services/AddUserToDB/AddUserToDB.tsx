// ADD USER TO DATABASE
export const addUserToDB = (details) => {
    console.log(details, 'details');

    const date = new Date()
    const user = { name: details.displayName, email: details.email, photo: details.photoURL, phone: details.phoneNumber, role: 'user', date: date.toLocaleString() }

    fetch('http://localhost:5000/addUser', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()

}