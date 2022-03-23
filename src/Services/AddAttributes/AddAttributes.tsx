import { attributeType } from "../../components/Dashboard/AddProduct/Sub/Attributes/Popup";


export const addAttributeValue = (attribute: string, setIfShouldUpdate: any, attributes: attributeType[]) => {
    console.log(attribute, 'attribute title');

    const slug = attribute?.split(' ').join('-')
    const isMatching = attributes.find(category => category.slug === slug)
    if (isMatching) {
        return alert('added alreadi')
    }

    const newAttribute = { label: attribute, vendor: 'admin' }

    fetch('https://young-springs-82149.herokuapp.com/dashboard/add-attributes', {
        headers: { "Content-Type": "application/json" },
        method: 'POST',
        body: JSON.stringify(newAttribute)
    })
        .then(response => response.json())
        .then(data => {
            if (data.insertedId) {
                setIfShouldUpdate(true)
                alert('attribute Added')

            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}