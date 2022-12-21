import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../common/utils';
import { mockAxiosBaseQuery } from '../../common/utils/mockAxios';


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: config.mockApi
        ? mockAxiosBaseQuery()
        : fetchBaseQuery({
            baseUrl: config.apibaseUrl,
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }),
    tagTypes: ["Auth", "LineLog", "Manual Ng Cause", "Line 1 Asis Manual Ng Cause", "Line 1 Hipot Manual Ng Cause"],
    endpoints: (builder) => ({}),
});

export const { } = apiSlice;
