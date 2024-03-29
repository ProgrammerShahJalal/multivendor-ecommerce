export const addAttributesValue = (id: number, attributeValue: string, setIfShouldUpdate: any) => {
    // toggle()
    // console.log(attributeValue, 'attributeValue attributeValue attributeValue');
    if (attributeValue === '') {
        return
    }

    const update = { attributeValue, id }
    fetch('https://unitymart-admin.onrender.com/dashboard/attributes', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(update)
    })
        .then(res => res.json())
        .then(data => {
            // setCategoryValue('')
            setIfShouldUpdate(true)
        })

}