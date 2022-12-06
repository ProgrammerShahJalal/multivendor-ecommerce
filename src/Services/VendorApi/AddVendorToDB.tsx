
// ADD VENDOR TO DATABASE
export const AddVendorToDB = (data, navigate) => {
    const date = new Date().toLocaleString()
    let slug
    if (data.storeSlug.includes(" ")) {
        slug = data.storeSlug.split(" ").join("-")
    } else {
        slug = data.storeSlug
    }
    const vendorDetails = {
        storeName: data.storeName,
        storeSlug: slug,
        storeEmail: data.storeEmail,
        phoneNumber: data.phoneNumber,
        storeLogo: data.storeLogo,
        storeBanner: data.storeBanner,
        storeDescription: data.storeDescription,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        country: data.country,
        paypalNumber: data.paypalNumber,
        supportEmail: data.supportEmail,
        supportPhoneNumber: data.supportPhoneNumber,
        isProfileCompleted: true, date, status: "active"
    }

    console.log(vendorDetails, 'vendorDetails 2');

    fetch('https://unitymart-admin.onrender.com/add-vendor', {
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