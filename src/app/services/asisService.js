import { apiSlice } from "../../features/api/apiSlice";

export const asisService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLine1NgRatio: builder.query({
            query: () => ({ url: "/process/line-1/asis/ng-ratio" }),
            providesTags: ["process/line-1/asis/ng-ratio"],
            transformResponse: (response, meta, arg) => response?.data?.ngRatio
        }),
        getLine1AsisProcessChart: builder.query({
            query: (frequent) => ({
                url: `process/line-1/asis/chart?frequent=${frequent}`,
            }),
            transformResponse: res => res?.data
        }),
        getLine1AsisChartLastWeek: builder.query({
            query: () => ({
                url: 'process/line-1/asis/chart?frequent=weekly'
            }),
            transformResponse: res => res.data
        }),
        getLine1AsisTopNgCause: builder.query({
            query: () => ({
                url: 'process/line-1/asis/top-ng-cause',
            }),
            transformResponse: res => res?.data
        }),
        getLine1AsisNgCount: builder.query({
            query: () => ({
                url: 'process/line-1/asis/auto-ng-causes/quantity-ng'
            }),
            transformResponse: res => res?.data?.qtyNg
        }),
        getLine1AsisOkCount: builder.query({
            query: () => ({
                url: 'process/line-1/asis/auto-ng-causes/quantity-ok'
            }),
            transformResponse: res => res?.data?.qtyOk
        }),
        getLine1AsisTopTenLogs: builder.query({
            query: () => ({
                url: 'process/line-1/asis/logs'
            }),
            transformResponse: res => res?.data
        }),
    }),
});

export const {
    useGetLine1NgRatioQuery,
    useGetLine1AsisProcessChartQuery,
    useGetLine1AsisChartLastWeekQuery,
    useGetLine1AsisTopNgCauseQuery,
    useGetLine1AsisNgCountQuery,
    useGetLine1AsisOkCountQuery,
    useGetLine1AsisTopTenLogsQuery,
} = asisService;