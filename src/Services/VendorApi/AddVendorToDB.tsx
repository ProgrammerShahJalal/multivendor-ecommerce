
// ADD VENDOR TO DATABASE
export const AddVendorToDB = (data, navigate) => {
    const date = new Date().toLocaleString()
    const vendorDetails = { ...data, isProfileCompleted: true, date, status: "Active" }
    fetch('https://young-springs-82149.herokuapp.com/add-vendor', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(vendorDetails)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                navigate('/dashboard')
            }

        })

}