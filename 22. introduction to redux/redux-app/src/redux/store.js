import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";
import notesSlice from "./slices/notesSlice";

export default configureStore({
    reducer: {
        messageReducer,
        notesReducer: notesSlice
    }
})