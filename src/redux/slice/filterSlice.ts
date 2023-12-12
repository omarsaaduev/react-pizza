import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Sort = {
    name: string
    sortProperty: 'rating' | 'price' | 'title'
}

interface FilterSliceState {
    categoryId: number;
    sort: Sort
}
const initialState: FilterSliceState = {
    categoryId: 0,
    sort: {name: 'популярности', sortProperty: 'rating' }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId (state, action: PayloadAction<number>) {
            state.categoryId = action.payload  
        },
        setSort (state, action: PayloadAction<Sort>) {
            state.sort = action.payload
        }
    }
})

export const {setCategoryId, setSort} = filterSlice.actions
export default filterSlice.reducer