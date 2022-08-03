import { apiSlice } from "../../features/api/apiSlice";

export const asisService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLine1AsisNgRatio: builder.query({
            query: () => ({ url: "/process/line-1/asis/ng-ratio" }),
            providesTags: ["process/line-1/asis/ng-ratio"],
            transformResponse: (response, meta, arg) =>
                response?.data?.ngRatio || 0,
        }),
        getLine1AsisProcessChart: builder.query({
            query: (frequent) => ({
                url: `process/line-1/asis/chart?frequent=${frequent}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1AsisChartLastWeek: builder.query({
            query: () => ({
                url: "process/line-1/asis/chart?frequent=weekly",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1AsisTopNgCause: builder.query({
            query: () => ({
                url: "process/line-1/asis/top-ng-cause",
            }),
            transformResponse: (res) => res?.data?.[0] || {},
        }),
        getLine1AsisCounter: builder.query({
            query: (query) => ({
                url: `process/line-1/asis/auto-ng-causes/quantity?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || {},
        }),
        getLine1AsisTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/asis/logs",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1Top5NgCause: builder.query({
            query: (params) => ({
                url: `process/line-1/asis/auto-ng-causes/top5?${Object.keys(
                    params
                )
                    .map((item) => `${item}=${params[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1AsisUpdateManualNg: builder.mutation({
            query: (description) => ({
                url: "process/line-1/asis/manual-ng-cause",
                method: "POST",
                body: { description },
            }),
            invalidatesTags: ["Line 1 Asis Manual Ng Cause"],
        }),
        getLine1AsisTopManualNg: builder.query({
            query: () => ({
                url: "process/line-1/asis/manual-ng-causes",
            }),
            providesTags: ["Line 1 Asis Manual Ng Cause"],
            transformResponse: (res) => res?.data || [],
        }),
        getLine1AsisLogs: builder.query({
            query: (data = []) => ({
                url: `process/line-1/asis/auto-ng-causes?${Object.keys(data)
                    .map((item, i) => `${item}=${data[item]}`)
                    .join("&")}`,
            }),
            providesTags: ["Line 1 Asis Logs"],
            transformResponse: (res) => res?.data || { total: 0, data: [] },
        }),
        line1AsisUpdateJudgement: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `process/line-1/asis/${id}/update-judgement`,
                method: "put",
                body: data,
            }),
            invalidatesTags: ["Line 1 Asis Logs"],
        }),
        line1AsisDestroy: builder.mutation({
            query: (id) => ({
                url: `process/line-1/asis/auto-ng-cause/${id}`,
                method: "delete",
            }),
            invalidatesTags: ["Line 1 Asis Logs"],
        }),
    }),
});

export const {
    useGetLine1AsisNgRatioQuery,
    useGetLine1AsisProcessChartQuery,
    useGetLine1AsisChartLastWeekQuery,
    useGetLine1AsisTopNgCauseQuery,
    useGetLine1AsisCounterQuery,
    useGetLine1AsisTopTenLogsQuery,
    useGetLine1Top5NgCauseQuery,
    useGetLine1AsisUpdateManualNgMutation,
    useGetLine1AsisTopManualNgQuery,
    useGetLine1AsisLogsQuery,
    useLine1AsisUpdateJudgementMutation,
    useLine1AsisDestroyMutation,
} = asisService;
