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
            transformResponse: res => res?.data?.[0] || {}
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
        getLine1Top5NgCause: builder.query({
            query: () => ({
                url: 'process/line-1/asis/auto-ng-causes/top5'
            }),
            transformResponse: res => res?.data
        }),
        line1AsisUpdateManualNg: builder.mutation({
            query: (description) => ({
                url: 'process/line-1/asis/manual-ng-cause',
                method: 'POST',
                body: { description },
            }),
            invalidatesTags: ['Manual Ng Cause']
        }),
        line1AsisTopManualNg: builder.query({
            query: () => ({
                url: 'process/line-1/asis/manual-ng-causes'
            }),
            providesTags: ['Manual Ng Cause'],
            transformResponse: res => res?.data
        }),
        line1AsisLogs: builder.query({
            query: (data = []) => ({
                url: `process/line-1/asis/auto-ng-causes?${Object.keys(data).map((item, i) => `${item}=${data[item]}`).join('&')}`,
            }),
            transformResponse: res => res?.data
        })
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
    useGetLine1Top5NgCauseQuery,
    useLine1AsisUpdateManualNgMutation,
    useLine1AsisTopManualNgQuery,
    useLine1AsisLogsQuery,
} = asisService;