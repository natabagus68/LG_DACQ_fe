import { createSlice } from "@reduxjs/toolkit";

const setting = JSON.parse(localStorage.getItem("setting") || "{}");
if (!setting.interval) {
    const lastSetting = JSON.parse(localStorage.getItem("setting") || "{}");
    localStorage.setItem(
        "setting",
        JSON.stringify({ ...lastSetting, interval: 1000 })
    );
}

const initialState = {
    interval: setting.interval || 1000,
};

export const settingSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {
        setInterval: (state, { payload }) => {
            const lastSetting = JSON.parse(
                localStorage.getItem("setting") || "{}"
            );
            localStorage.setItem(
                "setting",
                JSON.stringify({ ...lastSetting, interval: payload })
            );
            state.interval = payload;
        },
    },
});

export const { setInterval } = settingSlice.actions;
export default settingSlice.reducer;
