
// ADD VENDOR TO DATABASE
export const AddVendorToDB = (data, navigate) => {
    fetch('https://guarded-ocean-73313.herokuapp.com/add-vendor', {
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