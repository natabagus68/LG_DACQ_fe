import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedLogImage: null,
};

export const line1AsisSlice = createSlice({
    name: 'line1Asis',
    initialState,
    reducers: {
        line1AsisSetSelectedLogImage: (state, { payload }) => {
            state.selectedLogImage = payload;
        }
    }
});

export const { line1AsisSetSelectedLogImage } = line1AsisSlice.actions;
export default line1AsisSlice.reducer;
