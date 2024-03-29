import { createSlice } from '@reduxjs/toolkit'

const initialval = {
    products: [],
    wishList: [],

}

export const productSlice = createSlice({
    name: "products",
    initialState: initialval,
    reducers: {
        addToCart(state, action) {
            const item = state.products.find((item) => item?.id === action.payload.id)

            if (item) {
                item.quantity += action.payload.quantity
            }
            else {
                state.products.push(action.payload)
            }
        },
        increaseQty(state, action) {
            const item = state.products.find((item) => item?.id === action.payload)
            if (item) {
                item.quantity++
            }
        },
        decreaseQty(state, action) {
            const item = state.products.find((item) => item?.id === action.payload)
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        removeItem(state, action) {
            state.products = state.products.filter((item) => item?.id !== action.payload)
        },
        resetCart(state) {
            state.products = []
        },
        addToWishList(state, action) {
            const item = state.wishList.find((item) => item?.id === action.payload.id)
            if (item) {
                item.msg = "Item has Already Been added"
            }
            else {
                state.wishList.push(action.payload)
            }
        },
        removeFromWishList(state, action) {
            state.wishList = state.wishList.filter((item) => item?.id !== action.payload)
        }

    }

})

export const { addToCart, increaseQty, decreaseQty, removeItem, resetCart, addToWishList, removeFromWishList } = productSlice.actions
export default productSlice.reducer
