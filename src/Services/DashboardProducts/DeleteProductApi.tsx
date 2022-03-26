// DELETE ORDER
export const DeleteProductApi = (id, setIsLoading, products, setProducts) => {
    if (window.confirm('Are you sure you want to delete?')) {
        setIsLoading(true)
        fetch(`https://young-springs-82149.herokuapp.com/dashboard/product/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    alert('Product Deleted')
                    const remainingProducts = products.filter(product => product._id !== id)
                    setProducts(remainingProducts)
                }

            })
            .finally(() => setIsLoading(false))
    }
}