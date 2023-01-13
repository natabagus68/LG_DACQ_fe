import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    manualNgOn: false
};

export const line1ShipmodeSlice = createSlice({
    name: 'line1Shipmode',
    initialState,
    reducers: {
        line1ShipmodeSetManualNg: (state, { payload }) => {
            state.manualNgOn = payload;
        }
    }
});

export const { line1ShipmodeSetManualNg } = line1ShipmodeSlice.actions;
export default line1ShipmodeSlice.reducer;
