import { apiSlice } from "../../features/api/apiSlice";

export const whiteBalanceService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLine1WhiteBalanceNgRatio: builder.query({
            query: () => ({ url: "/process/line-1/white-balance/ng-ratio" }),
            providesTags: ["process/line-1/white-balance/ng-ratio"],
            transformResponse: (response, meta, arg) =>
                response?.data?.ngRatio || 0,
        }),
        getLine1WhiteBalanceProcessChart: builder.query({
            query: (frequent) => ({
                url: `process/line-1/white-balance/chart?frequent=${frequent}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1WhiteBalanceChartLastWeek: builder.query({
            query: () => ({
                url: "process/line-1/white-balance/chart?frequent=weekly",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1WhiteBalanceTopNgCause: builder.query({
            query: () => ({
                url: "process/line-1/white-balance/top-ng-model",
            }),
            transformResponse: (res) => res?.data?.[0] || {},
        }),
        getLine1WhiteBalanceCount: builder.query({
            query: (query) => ({
                url: `process/line-1/white-balance/auto-ng-causes/quantity?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || {},
        }),
        getLine1WhiteBalanceTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/white-balance/logs",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1WhiteBalanceTop5NgCause: builder.query({
            query: (params) => ({
                url: `process/line-1/white-balance/auto-ng-causes/top5?${Object.keys(
                    params
                )
                    .map((item) => `${item}=${params[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        line1WhiteBalanceUpdateManualNg: builder.mutation({
            query: (description) => ({
                url: "process/line-1/white-balance/manual-ng-cause",
                method: "POST",
                body: { description },
            }),
            invalidatesTags: ["Line 1 WhiteBalance Manual Ng Cause"],
        }),
        line1WhiteBalanceTopManualNg: builder.query({
            query: () => ({
                url: "process/line-1/white-balance/manual-ng-causes",
            }),
            providesTags: ["Line 1 WhiteBalance Manual Ng Cause"],
            transformResponse: (res) => res?.data || [],
        }),
        line1WhiteBalanceLogs: builder.query({
            query: (data = []) => ({
                url: `process/line-1/white-balance/auto-ng-causes?${Object.keys(
                    data
                )
                    .map((item, i) => `${item}=${data[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || { total: 0, data: [] },
        }),
        line1WhiteBalanceSync: builder.mutation({
            query: (data) => {
                console.log("request =>", data);
                return {
                    url: `process/line-1/white-balance/sync-file?base_path=${data.base_path}`,
                };
            },
        }),
        line1WhiteBalanceDestroy: builder.mutation({
            query: (id) => ({
                url: `process/line-1/white-balance/auto-ng-cause/${id}`,
                method: "delete",
            }),
            invalidatesTags: ["Line 1 White Balance Logs"],
        }),
    }),
});

export const {
    useGetLine1WhiteBalanceNgRatioQuery,
    useGetLine1WhiteBalanceProcessChartQuery,
    useGetLine1WhiteBalanceChartLastWeekQuery,
    useGetLine1WhiteBalanceTopNgCauseQuery,
    useGetLine1WhiteBalanceCountQuery,
    useGetLine1WhiteBalanceTopTenLogsQuery,
    useGetLine1WhiteBalanceTop5NgCauseQuery,
    useLine1WhiteBalanceUpdateManualNgMutation,
    useLine1WhiteBalanceTopManualNgQuery,
    useLine1WhiteBalanceLogsQuery,
    useLine1WhiteBalanceSyncMutation,
    useLine1WhiteBalanceDestroyMutation
} = whiteBalanceService;
