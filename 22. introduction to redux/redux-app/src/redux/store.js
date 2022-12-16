import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";
import notesSlice from "./slices/notesSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
    reducer: {
        // messageReducer,
        // notesReducer: notesSlice
        productReducer,
        cartReducer
    }
})