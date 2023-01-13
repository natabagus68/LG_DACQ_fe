import { apiSlice } from "../../features/api/apiSlice";

export const hipotService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLine1HipotNgRatio: builder.query({
            query: () => ({ url: "/process/line-1/hipot/ng-ratio" }),
            providesTags: ["process/line-1/hipot/ng-ratio"],
            transformResponse: (response, meta, arg) =>
                response?.data?.ngRatio || 0,
        }),
        getLine1HipotProcessChart: builder.query({
            query: (frequent) => ({
                url: `process/line-1/hipot/chart?frequent=${frequent}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1HipotChartLastWeek: builder.query({
            query: () => ({
                url: "process/line-1/hipot/chart?frequent=weekly",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1HipotTopNgCause: builder.query({
            query: () => ({
                url: "process/line-1/hipot/top-ng-cause",
            }),
            transformResponse: (res) => res?.data?.[0] || {},
        }),
        getLine1HipotNgCount: builder.query({
            query: (query) => ({
                url: `process/line-1/hipot/auto-ng-causes/quantity-ng?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyNg || 0,
        }),
        getLine1HipotOkCount: builder.query({
            query: (query) => ({
                url: `process/line-1/hipot/auto-ng-causes/quantity-ok?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyOk || 0,
        }),
        getLine1HipotTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/hipot/logs",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1HipotTop5NgCause: builder.query({
            query: () => ({
                url: "process/line-1/hipot/auto-ng-causes/top5",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        line1HipotUpdateManualNg: builder.mutation({
            query: (description) => ({
                url: "process/line-1/hipot/manual-ng-cause",
                method: "POST",
                body: { description },
            }),
            invalidatesTags: ["Line 1 Hipot Manual Ng Cause"],
        }),
        line1HipotTopManualNg: builder.query({
            query: () => ({
                url: "process/line-1/hipot/manual-ng-causes",
            }),
            providesTags: ["Line 1 Hipot Manual Ng Cause"],
            transformResponse: (res) => res?.data || [],
        }),
        line1HipotLogs: builder.query({
            query: (data = []) => ({
                url: `process/line-1/hipot/auto-ng-causes?${Object.keys(data)
                    .map((item, i) => `${item}=${data[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        line1HipotSync: builder.mutation({
            query: (data) => {
                console.log("request =>", data);
                return {
                    url: `process/line-1/hipot/sync-file?base_path=${data.base_path}`,
                };
            },
        }),
    }),
});

export const {
    useGetLine1HipotNgRatioQuery,
    useGetLine1HipotProcessChartQuery,
    useGetLine1HipotChartLastWeekQuery,
    useGetLine1HipotTopNgCauseQuery,
    useGetLine1HipotNgCountQuery,
    useGetLine1HipotOkCountQuery,
    useGetLine1HipotTopTenLogsQuery,
    useGetLine1HipotTop5NgCauseQuery,
    useLine1HipotUpdateManualNgMutation,
    useLine1HipotTopManualNgQuery,
    useLine1HipotLogsQuery,
    useLine1HipotSyncMutation,
} = hipotService;
