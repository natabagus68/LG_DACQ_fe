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
        getLine1HipotCount: builder.query({
            query: (query) => ({
                url: `process/line-1/hipot/auto-ng-causes/quantity?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || {ok : 0, ng : 0},
        }),
        getLine1HipotTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/hipot/logs",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1HipotTop5NgCause: builder.query({
            query: (query) => ({
                url: `process/line-1/hipot/auto-ng-causes/top5?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
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
            transformResponse: (res) => res?.data || { total: 0, data: [] },
            providesTags: ["Line 1 Hipot Logs"],
        }),
        line1HipotSync: builder.mutation({
            query: (data) => {
                console.log("request =>", data);
                return {
                    url: `process/line-1/hipot/sync-file?base_path=${data.base_path}`,
                };
            },
        }),
        line1HipotDestroy: builder.mutation({
            query: (id) => ({
                url: `process/line-1/hipot/auto-ng-cause/${id}`,
                method: "delete",
            }),
            invalidatesTags: ["Line 1 Hipot Logs"],
        }),
    }),
});

export const {
    useGetLine1HipotNgRatioQuery,
    useGetLine1HipotProcessChartQuery,
    useGetLine1HipotChartLastWeekQuery,
    useGetLine1HipotTopNgCauseQuery,
    useGetLine1HipotCountQuery,
    useGetLine1HipotTopTenLogsQuery,
    useGetLine1HipotTop5NgCauseQuery,
    useLine1HipotUpdateManualNgMutation,
    useLine1HipotTopManualNgQuery,
    useLine1HipotLogsQuery,
    useLine1HipotSyncMutation,
    useLine1HipotDestroyMutation,
} = hipotService;
