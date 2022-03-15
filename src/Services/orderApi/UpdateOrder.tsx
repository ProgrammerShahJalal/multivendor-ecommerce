import { toast } from 'react-toastify';
// UPDATE ORDER STATUS//
export const UpdateOrder = (id, status, deliveryDate, setData, setIsLoading, navigate, details) => {

    setIsLoading(true)
    fetch(`https://guarded-ocean-73313.herokuapp.com/dashboard/orders/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ status: status, deliveryDate: deliveryDate?.toDateString() })
    }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                setIsLoading(false)
                toast.success(`Status changed ${status}`, {
                    position: 'bottom-left'
                })
                navigate('/dashboard/orders')

            }

        })




}