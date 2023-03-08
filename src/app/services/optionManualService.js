import { apiSlice } from "../../features/api/apiSlice";

export const optionManualService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLine1OptionManualNgRatio: builder.query({
            query: () => ({ url: "/process/line-1/option-manual/ng-ratio" }),
            providesTags: ["process/line-1/option-manual/ng-ratio"],
            transformResponse: (response, meta, arg) =>
                response?.data?.ngRatio || 0,
        }),
        getLine1OptionManualProcessChart: builder.query({
            query: (frequent) => ({
                url: `process/line-1/option-manual/chart?frequent=${frequent}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1OptionManualChartLastWeek: builder.query({
            query: () => ({
                url: "process/line-1/option-manual/chart?frequent=weekly",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1OptionManualTopNgCause: builder.query({
            query: () => ({
                url: "process/line-1/option-manual/top-ng-cause",
            }),
            transformResponse: (res) => res?.data?.[0] || {},
        }),
        getLine1OptionManualCount: builder.query({
            query: (query = {}) => ({
                url: `process/line-1/option-manual/auto-ng-causes/quantity?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || {},
        }),
        getLine1OptionManualTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/option-manual/logs",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1OptionManualTop5NgCause: builder.query({
            query: (params = {}) => ({
                url: `process/line-1/option-manual/auto-ng-causes/top5?${Object.keys(
                    params
                )
                    .map((item) => `${item}=${params[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        line1OptionManualUpdateManualNg: builder.mutation({
            query: (description) => ({
                url: "process/line-1/option-manual/manual-ng-cause",
                method: "POST",
                body: { description },
            }),
            invalidatesTags: ["Line 1 OptionManual Manual Ng Cause"],
        }),
        line1OptionManualTopManualNg: builder.query({
            query: () => ({
                url: "process/line-1/option-manual/manual-ng-causes",
            }),
            providesTags: ["Line 1 OptionManual Manual Ng Cause"],
            transformResponse: (res) => res?.data || [],
        }),
        line1OptionManualLogs: builder.query({
            query: (data = []) => ({
                url: `process/line-1/option-manual/auto-ng-causes?${Object.keys(
                    data
                )
                    .map((item, i) => `${item}=${data[item]}`)
                    .join("&")}`,
            }),
            invalidatesTags: ["Line 1 Option Auto Logs"],
            transformResponse: (res) => res?.data || { total: 0, data: [] },
        }),
        line1OptionManualSync: builder.mutation({
            query: (data) => {
                console.log("request =>", data);
                return {
                    url: `process/line-1/option-manual/sync-file?base_path=${data.base_path}`,
                };
            },
        }),
        line1OptionManualDestroy: builder.mutation({
            query: (id) => ({
                url: `process/line-1/option-manual/auto-ng-cause/${id}`,
                method: "delete",
            }),
            invalidatesTags: ["Line 1 Option Auto Logs"],
        }),
    }),
});

export const {
    useGetLine1OptionManualNgRatioQuery,
    useGetLine1OptionManualProcessChartQuery,
    useGetLine1OptionManualChartLastWeekQuery,
    useGetLine1OptionManualTopNgCauseQuery,
    useGetLine1OptionManualCountQuery,
    useGetLine1OptionManualTopTenLogsQuery,
    useGetLine1OptionManualTop5NgCauseQuery,
    useLine1OptionManualUpdateManualNgMutation,
    useLine1OptionManualTopManualNgQuery,
    useLine1OptionManualLogsQuery,
    useLine1OptionManualSyncMutation,
    useLine1OptionManualDestroyMutation,
} = optionManualService;
