import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    manualNgOn: false,
};

export const line1WhiteBalanceSlice = createSlice({
    name: "line1WhiteBalance",
    initialState,
    reducers: {
        line1WhiteBalanceSetManualNg: (state, { payload }) => {
            state.manualNgOn = payload;
        },
    },
});

export const { line1WhiteBalanceSetManualNg } = line1WhiteBalanceSlice.actions;
export default line1WhiteBalanceSlice.reducer;
