import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CartItem = { 
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  type: string,
  size: number,
  count: number
}

interface CartSliceState {
  totalPrice: number,
  items: CartItem[]
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)
      if(findItem){
        findItem.count++
      } else {
        state.items.push({
            ...action.payload,
            count: 1, 
        });
      }
      state.totalPrice += action.payload.price
    },
    minusItem (state, action: PayloadAction<string>){
        const findItem = state.items.find(obj => obj.id === action.payload)
        if(findItem){
        findItem.count--
        }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice -=action.payload.totalPrice
    },
    clearItems (state) {
        state.items = []
        state.totalPrice = 0
    }
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart
export default cartSlice.reducer;
