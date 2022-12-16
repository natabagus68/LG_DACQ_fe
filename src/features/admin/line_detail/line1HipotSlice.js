import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    manualNgOn: false
};

export const line1HipotSlice = createSlice({
    name: 'line1Hipot',
    initialState,
    reducers: {
        line1HipotSetManualNg: (state, { payload }) => {
            state.manualNgOn = payload;
        }
    }
});

export const { line1HipotSetManualNg } = line1HipotSlice.actions;
export default line1HipotSlice.reducer;
