import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';


const initialState = {
    cart: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems') || '{}') : [],
    cartTotal: 0,
    cartTotalQuantity: 0
}
// type IState = {
//     cart: IProduct[]
//     cartTotal: number
//     cartTotalQuantity: number
// }
interface ProductState {

    title: string
    img: string
    hoverImg: string
    price: number
    salePrice: number
    size: string
    vendorName: string
    rating: number
    _id: string

}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state: any, { payload }: { payload: ProductState }) => {
            const itemIndex = state.cart.findIndex(item => item._id === payload._id)
            if (itemIndex >= 0) {
                state.cart[itemIndex].cartQuantity += 1
                toast.info(`${payload.title} quantity increased`, {
                    position: 'bottom-left'
                })
            } else {
                const newCart = { ...payload, cartQuantity: 1 }
                state.cart.push(newCart)
                toast.success(`${payload.title}  added to cart`, {
                    position: 'bottom-left'
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cart));

        },
        increment: (state: any, { payload }) => {
            const itemIndex = state.cart.findIndex(item => item._id === payload._id)
            state.cart[itemIndex].cartQuantity += 1
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
            toast.info(`${payload.title} quantity increased`, {
                position: 'bottom-left'
            })

        },
        decrement: (state: any, { payload }) => {
            const itemIndex = state.cart.findIndex(item => item._id === payload._id)
            state.cart[itemIndex].cartQuantity -= 1
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
            toast.info("Decreased product quantity", {
                position: "bottom-left",
            });


        },
        getTotal: (state: any) => {
            let { total, quantity } = state.cart.reduce((cartTotal, cart) => {

                const { sale_price, reg_price, cartQuantity } = cart
                const itemTotal = sale_price ? sale_price * cartQuantity : reg_price * cartQuantity
                console.log(itemTotal, 'redux itemTotal total');
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
            state.cartTotal = total
            state.cartTotalQuantity = quantity
        },
        removeItem: (state: any, { payload }) => {

            const newItems = state.cart.filter(item => item._id !== payload._id)
            state.cart = newItems
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
            toast.error(`${payload.title}  removed from cart`, {
                position: 'bottom-left'
            })
        },
        clearCart(state) {
            state.cart = []
            state.cartTotal = 0
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, decrement, increment, getTotal, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer