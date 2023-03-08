import { apiSlice } from "../../features/api/apiSlice";

export const shipmodeService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLine1ShipmodeNgRatio: builder.query({
            query: () => ({ url: "/process/line-1/shipmode/ng-ratio" }),
            providesTags: ["process/line-1/shipmode/ng-ratio"],
            transformResponse: (response, meta, arg) =>
                response?.data?.ngRatio || 0,
        }),
        getLine1ShipmodeProcessChart: builder.query({
            query: (frequent) => ({
                url: `process/line-1/shipmode/chart?frequent=${frequent}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1ShipmodeChartLastWeek: builder.query({
            query: (frequent) => ({
                url: `process/line-1/shipmode/chart?frequent=${frequent}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1ShipmodeTopNgCause: builder.query({
            query: () => ({
                url: "process/line-1/shipmode/top-ng-cause",
            }),
            transformResponse: (res) => res?.data?.[0] || {},
        }),
        getLine1ShipmodeCount: builder.query({
            query: (query) => ({
                url: `process/line-1/shipmode/auto-ng-causes/quantity?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) =>
                res?.data || {
                    instart_ok: 0,
                    instart_ng: 0,
                    instop_ok: 0,
                    instop_ng: 0,
                },
        }),
        getLine1ShipmodeTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/shipmode/logs",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1ShipmodeTop5NgCause: builder.query({
            query: (query) => ({
                url: `process/line-1/shipmode/auto-ng-causes/top5?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        line1ShipmodeUpdateManualNg: builder.mutation({
            query: (description) => ({
                url: "process/line-1/shipmode/manual-ng-cause",
                method: "POST",
                body: { description },
            }),
            invalidatesTags: ["Line 1 Shipmode Manual Ng Cause"],
        }),
        line1ShipmodeDestroy: builder.mutation({
            query: (id) => ({
                url: `process/line-1/shipmode/auto-ng-causes/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Line 1 Shipmode Auto Ng Cause"],
        }),
        line1ShipmodeTopManualNg: builder.query({
            query: () => ({
                url: "process/line-1/shipmode/manual-ng-causes",
            }),
            providesTags: ["Line 1 Shipmode Manual Ng Cause"],
            transformResponse: (res) => res?.data || [],
        }),
        line1ShipmodeLogs: builder.query({
            query: (data = []) => ({
                url: `process/line-1/shipmode/auto-ng-causes?${Object.keys(data)
                    .map((item, i) => `${item}=${data[item]}`)
                    .join("&")}`,
            }),
            providesTags: ["Line 1 Shipmode Auto Ng Cause"],
            transformResponse: (res) =>
                res?.data || {
                    total: 0,
                    data: [],
                },
        }),
        line1ShipmodeSync: builder.mutation({
            query: (data) => {
                console.log("request =>", data);
                return {
                    url: `process/line-1/shipmode/sync-file?base_path=${data.base_path}`,
                };
            },
        }),
    }),
});

export const {
    useGetLine1ShipmodeNgRatioQuery,
    useGetLine1ShipmodeProcessChartQuery,
    useGetLine1ShipmodeChartLastWeekQuery,
    useGetLine1ShipmodeTopNgCauseQuery,
    useGetLine1ShipmodeCountQuery,
    useGetLine1ShipmodeTopTenLogsQuery,
    useGetLine1ShipmodeTop5NgCauseQuery,
    useLine1ShipmodeUpdateManualNgMutation,
    useLine1ShipmodeTopManualNgQuery,
    useLine1ShipmodeLogsQuery,
    useLine1ShipmodeSyncMutation,
    useLine1ShipmodeDestroyMutation,
} = shipmodeService;
