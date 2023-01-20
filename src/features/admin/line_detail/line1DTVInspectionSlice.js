import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedLogImage: null,
    manualNgOn: false,
};

export const line1DtvInspectionSlice = createSlice({
    name: "line1DtvInspection",
    initialState,
    reducers: {
        line1DtvInspectionSetSelectedLogImage: (state, { payload }) => {
            state.selectedLogImage = payload;
        },
        line1DtvInspectionSetManualNg: (state, { payload }) => {
            state.manualNgOn = payload;
        },
    },
});

export const {
    line1DtvInspectionSetSelectedLogImage,
    line1DtvInspectionSetManualNg,
} = line1DtvInspectionSlice.actions;
export default line1DtvInspectionSlice.reducer;
