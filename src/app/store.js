import { configureStore } from '@reduxjs/toolkit';
import adminLayoutReducer from '../features/admin/adminLayout/adminLayoutSlice';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
    reducer: {
        adminLayout: adminLayoutReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});
