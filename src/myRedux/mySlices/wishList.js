import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
    name:'wishlist',
    initialState:{
        value:[]
    },
    reducers:{
        addList: (state, action) =>{
            let newEntry = {...action.payload};
            state.value = [...state.value, newEntry];
            console.log('new item added');
            console.log(state.value)
        },
        removeList:(state,action) =>{
            let newArray = state.value.filter(entry=> entry.id !== action.payload)
            state.value = [...newArray];
        }
    }
});
export const {addList,removeList} = wishListSlice.actions;
export default wishListSlice.reducer;