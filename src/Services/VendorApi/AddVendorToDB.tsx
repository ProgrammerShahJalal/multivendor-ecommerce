
// ADD VENDOR TO DATABASE
export const AddVendorToDB = (data, navigate) => {
    fetch('http://localhost:5000/add-vendor', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                navigate('/dashboard')
            }

        })

}