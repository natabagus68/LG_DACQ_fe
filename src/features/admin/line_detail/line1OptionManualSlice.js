import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    manualNgOn: false,
};

export const line1OptionManualSlice = createSlice({
    name: "line1OptionManual",
    initialState,
    reducers: {
        line1OptionManualSetManualNg: (state, { payload }) => {
            state.manualNgOn = payload;
        },
    },
});

export const { line1OptionManualSetManualNg } = line1OptionManualSlice.actions;
export default line1OptionManualSlice.reducer;
