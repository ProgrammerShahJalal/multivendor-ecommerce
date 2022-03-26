import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


const initialState = {
    wishlist: localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem('wishlistItems') || '{}') : [],
    wishlistTotal: 0,
    wishlistTotalQuantity: 0
}
// type IState = {
//     cart: IProduct[]
//     cartTotal: number
//     cartTotalQuantity: number
// }
// interface ProductState {

//     title: string
//     img: string
//     hoverImg: string
//     price: number
//     salePrice: number
//     size: string
//     vendorName: string
//     rating: number
//     _id: string
//     vendor: {
//         email: string}
// }

type wishlist = {
    wishlist: any
    wishlistTotal: number
    wishlistTotalQuantity: number
}
export const wishList = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state: wishlist, { payload }: { payload: any }) => {

            const itemIndex = state.wishlist.findIndex(item => item._id === payload._id)

            if (itemIndex >= 0) {
                alert('Already In Wishlist')
                // state.wishlist[itemIndex].cartQuantity += 1
                // toast.info(`${payload.title} quantity increased`, {
                //     position: 'bottom-left'
                // })
            } else {
                const newCart = { ...payload }
                state.wishlist.push(newCart)
                toast.success(`${payload.title}  added to cart`, {
                    position: 'bottom-left'
                })
            }

            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));

        },
        getTotal: (state: any) => {
            let { total, quantity } = state.wishlist.reduce((cartTotal, cart) => {

                const { price, cartQuantity } = cart
                const itemTotal = price * cartQuantity
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                return cartTotal;
            },
                {
                    total: 0,
                    quantity: 0
                }
            );
            total = parseFloat(total.toFixed(2))
            state.wishlistTotal = total
            state.wishlistTotalQuantity = quantity
        },
        removeItem: (state: any, { payload }) => {
            const newItems = state.wishlist.filter(item => item._id !== payload._id)
            state.wishlist = newItems
            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
            toast.error(`${payload.title}  removed from wishlist`, {
                position: 'bottom-left'
            })
        },
        clearWishlist(state) {
            state.wishlist = []
            state.wishlistTotal = 0
            localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToWishlist, getTotal, removeItem, clearWishlist } = wishList.actions

export default wishList.reducer