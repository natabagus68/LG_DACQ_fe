import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedLogImage: null,
    manualNgOn: false
};

export const line1AsisSlice = createSlice({
    name: 'line1Asis',
    initialState,
    reducers: {
        line1AsisSetSelectedLogImage: (state, { payload }) => {
            state.selectedLogImage = payload;
        },
        line1AsisSetManualNg: (state, { payload }) => {
            state.manualNgOn = payload;
        }
    }
});

export const { line1AsisSetSelectedLogImage, line1AsisSetManualNg } = line1AsisSlice.actions;
export default line1AsisSlice.reducer;
