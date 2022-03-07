type IProduct = {
    _id: string,
    title: string,
    brand: string,
    reg_price: string,
    sale_price?: string,
    stock?: string,
    cartQuantity?: number
    images: [
        {
            id: string,
            src: string
        },
        {
            id: string,
            src: string
        }
    ],
    categories: [
        {
            label: string,
            value: string
        }
    ],
    product_des?: string,
    offerDate?: string,
    attributes?: [
        {
            label: string,
            selected: [
                {
                    label: string,
                    value: string
                }
            ]
        }
    ]
}
