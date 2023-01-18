import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedLogImage: null,
    manualNgOn: false,
};

export const line1DTVInspectionSlice = createSlice({
    name: "line1DTVInspection",
    initialState,
    reducers: {
        line1DTVInspectionSetSelectedLogImage: (state, { payload }) => {
            state.selectedLogImage = payload;
        },
        line1DTVInspectionSetManualNg: (state, { payload }) => {
            state.manualNgOn = payload;
        },
    },
});

export const {
    line1DTVInspectionSetSelectedLogImage,
    line1DTVInspectionSetManualNg,
} = line1DTVInspectionSlice.actions;
export default line1DTVInspectionSlice.reducer;
