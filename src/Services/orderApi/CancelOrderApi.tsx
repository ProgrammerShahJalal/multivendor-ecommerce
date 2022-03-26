import { toast } from 'react-toastify';
// UPDATE ORDER STATUS//
export const CancelOrder = (id, setIsLoading, navigate) => {

    setIsLoading(true)
    fetch(`https://young-springs-82149.herokuapp.com/dashboard/orders/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ status: "Cancel" })
    }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                setIsLoading(false)
                toast.success(`Order Cancelled`, {
                    position: 'bottom-left'
                })
                navigate('/profile/orders')

            }

        })




}