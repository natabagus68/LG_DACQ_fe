import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../common/utils';
import { mockAxiosBaseQuery } from '../../common/utils/mockAxios';
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: config.mockApi ? mockAxiosBaseQuery() :
        fetchBaseQuery({
            baseUrl: config.apibaseUrl,
            headers: {
                ...(localStorage.getItem('authHeader') ? { Authorization: localStorage.getItem('authHeader') } : undefined)
            }
        }),
    tagTypes: ['Auth', 'Employee'],
    endpoints: builder => ({

    })
});

export const { } = apiSlice;
