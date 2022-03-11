import { configureStore } from '@reduxjs/toolkit'
import cartSlice, { getTotal } from './redux/cartSlice'


const store = configureStore({
    reducer: {
        cart: cartSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export default store

store.dispatch(getTotal())