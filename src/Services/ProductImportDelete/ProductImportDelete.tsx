// DELETE ORDER
export const ProductImportDelete = (id, setIsLoading, products, setProducts, importData, setData) => {
    if (window.confirm('Are you sure you want to delete?')) {
        setIsLoading(true)
        fetch(`https://guarded-ocean-73313.herokuapp.com/dashboard/product/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    alert('Product Deleted')
                    const remainingProducts = products.filter(product => product._id !== id)
                    const remainingImportProducts = importData.filter(product => product._id !== id)
                    setProducts(remainingProducts)
                    setData(remainingImportProducts)
                }

            })
            .finally(() => setIsLoading(false))
    }
}