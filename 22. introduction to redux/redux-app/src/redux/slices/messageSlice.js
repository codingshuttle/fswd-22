import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'messageSlice',
    initialState: {
        message: '',
        counter: 0
    },
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        resetMessage: (state, action) => {
            state.message = ''
        }
    }
})

export default messageSlice.reducer;

export const { setMessage, resetMessage } = messageSlice.actions