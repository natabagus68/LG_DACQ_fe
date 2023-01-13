import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    manualNgOn: false,
};

export const line1OptionAutoSlice = createSlice({
    name: "line1OptionAuto",
    initialState,
    reducers: {
        line1OptionAutoSetManualNg: (state, { payload }) => {
            state.manualNgOn = payload;
        },
    },
});

export const { line1OptionAutoSetManualNg } = line1OptionAutoSlice.actions;
export default line1OptionAutoSlice.reducer;
