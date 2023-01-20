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
            query: () => ({
                url: "process/line-1/shipmode/chart?frequent=weekly",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1ShipmodeTopNgCause: builder.query({
            query: () => ({
                url: "process/line-1/shipmode/top-ng-cause",
            }),
            transformResponse: (res) => res?.data?.[0] || {},
        }),
        getLine1ShipmodeNgCount: builder.query({
            query: (query) => ({
                url: `process/line-1/shipmode/auto-ng-causes/quantity-ng?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyNg || 0,
        }),
        getLine1ShipmodeOkCount: builder.query({
            query: (query) => ({
                url: `process/line-1/shipmode/auto-ng-causes/quantity-ok?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyOk || 0,
        }),
        getLine1ShipmodeInstartCount: builder.query({
            query: (query) => ({
                url: `process/line-1/shipmode/auto-ng-causes/quantity-in-start?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) =>
                res?.data || {
                    qtyOk: 0,
                    qtyNg: 0,
                },
        }),
        getLine1ShipmodeInstopCount: builder.query({
            query: (query) => ({
                url: `process/line-1/shipmode/auto-ng-causes/quantity-in-stop?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) =>
                res?.data || {
                    qtyOk: 0,
                    qtyNg: 0,
                },
        }),
        getLine1ShipmodeTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/shipmode/logs",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1ShipmodeTop5NgCause: builder.query({
            query: () => ({
                url: "process/line-1/shipmode/auto-ng-causes/top5",
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
            transformResponse: (res) => res?.data || [],
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
    useGetLine1ShipmodeNgCountQuery,
    useGetLine1ShipmodeOkCountQuery,
    useGetLine1ShipmodeTopTenLogsQuery,
    useGetLine1ShipmodeTop5NgCauseQuery,
    useLine1ShipmodeUpdateManualNgMutation,
    useLine1ShipmodeTopManualNgQuery,
    useLine1ShipmodeLogsQuery,
    useLine1ShipmodeSyncMutation,
    useGetLine1ShipmodeInstartCountQuery,
    useGetLine1ShipmodeInstopCountQuery,
} = shipmodeService;
