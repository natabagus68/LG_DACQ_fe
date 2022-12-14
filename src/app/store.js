import { configureStore } from '@reduxjs/toolkit';
import adminLayoutReducer from '../features/admin/adminLayout/adminLayoutSlice';
import line1AsisReducer from '../features/admin/line_detail/line1AsisSlice';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
    reducer: {
        adminLayout: adminLayoutReducer,
        line1Asis: line1AsisReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});
