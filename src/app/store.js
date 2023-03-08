import { configureStore } from "@reduxjs/toolkit";
import adminLayoutReducer from "../features/admin/adminLayout/adminLayoutSlice";
import line1AsisReducer from "../features/admin/line_detail/line1AsisSlice";
import line1HipotReducer from "../features/admin/line_detail/line1HipotSlice";
import line1OptionAutoReducer from "../features/admin/line_detail/line1OptionAutoSlice";
import line1OptionManualReducer from "../features/admin/line_detail/line1OptionManualSlice";
import line1WhiteBalanceReducer from "../features/admin/line_detail/line1WhiteBalanceSlice";
import line1ShipmodeReducer from "../features/admin/line_detail/line1ShipmodeSlice";
import line1DtvInspectionReducer from "../features/admin/line_detail/line1DtvInspectionSlice";
import settingReducer from "../features/admin/setting/setting-slice";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
    reducer: {
        adminLayout: adminLayoutReducer,
        line1Asis: line1AsisReducer,
        line1Hipot: line1HipotReducer,
        line1OptionAuto: line1OptionAutoReducer,
        line1OptionManual: line1OptionManualReducer,
        line1WhiteBalance: line1WhiteBalanceReducer,
        line1Shipmode: line1ShipmodeReducer,
        line1DtvInspection: line1DtvInspectionReducer,
        setting: settingReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck : false,
        }).concat(apiSlice.middleware),
});
