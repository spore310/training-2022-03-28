import { configureStore } from "@reduxjs/toolkit";
import searchResult from "./mySlices/searchResult";
import wishList from './mySlices/wishList';
export default configureStore({
    reducer:{
        wishlist: wishList,
        searchResult: searchResult
    },
});
