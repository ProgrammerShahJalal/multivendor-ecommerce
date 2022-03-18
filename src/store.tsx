import { configureStore } from '@reduxjs/toolkit'
import cartSlice, { getTotal } from './redux/cartSlice'
import wishlistSlice from './redux/wishlistSlice'


const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: wishlistSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export default store

store.dispatch(getTotal())