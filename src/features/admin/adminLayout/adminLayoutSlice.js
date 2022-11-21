import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navOpen: null,
};

export const adminLayoutSlice = createSlice({
    name: 'adminLayout',
    initialState,
    reducers: {
        toggle: (state) => {
            state.navOpen = !!!state.navOpen;
        }
    }
});

export const { toggle } = adminLayoutSlice.actions;
export default adminLayoutSlice.reducer;
