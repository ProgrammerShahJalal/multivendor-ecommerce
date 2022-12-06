// DELETE ORDER
export const DeleteOrder = (id, setIsLoading, navigate) => {
    if (window.confirm('Are you sure you want to delete?')) {
        setIsLoading(true)
        fetch(`https://unitymart-admin.onrender.com/dashboard/orders/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Order Deleted')
                    navigate('/dashboard/orders')
                    // const remainingOrders = userOrders.filter(order => order._id !== id)
                    // setUserOrders(remainingOrders)//
                }

            })
            .finally(() => setIsLoading(false))
    }
}