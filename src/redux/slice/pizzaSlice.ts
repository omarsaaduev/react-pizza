import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


type FetchPizzasArgs = {
    categoryId: number;
    sortType: string
}
export const fetchPizzas = createAsyncThunk('pizza/fetchPizzaStatus',async (props: FetchPizzasArgs) => {
    const {categoryId, sortType} = props
    const {data} = await axios.get<PizzaItem[]>(`https://6568bb189927836bd97556f7.mockapi.io/items?category=${categoryId > 0 ? categoryId : ''}&sortBy=${sortType}&order=desc`)
    return data as  PizzaItem[]
})

type PizzaItem = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
}

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface PizzaSliceState {
    items: PizzaItem[];
    status: Status
}

const initialState:PizzaSliceState = {
    items: [],
    status: Status.LOADING,
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems (state, action) {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING
        });
        builder.addCase(fetchPizzas.fulfilled, (state,action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        });
    }

})

export const {setItems} = pizzaSlice.actions
export default pizzaSlice.reducer