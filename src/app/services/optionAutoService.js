import { apiSlice } from "../../features/api/apiSlice";

export const optionAutoService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLine1OptionAutoNgRatio: builder.query({
            query: () => ({ url: "/process/line-1/option-auto/ng-ratio" }),
            providesTags: ["process/line-1/option-auto/ng-ratio"],
            transformResponse: (response, meta, arg) =>
                response?.data?.ngRatio || 0,
        }),
        getLine1OptionAutoProcessChart: builder.query({
            query: (frequent) => ({
                url: `process/line-1/option-auto/chart?frequent=${frequent}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1OptionAutoChartLastWeek: builder.query({
            query: () => ({
                url: "process/line-1/option-auto/chart?frequent=weekly",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1OptionAutoTopNgCause: builder.query({
            query: () => ({
                url: "process/line-1/option-auto/top-ng-cause",
            }),
            transformResponse: (res) => res?.data?.[0] || {},
        }),
        getLine1OptionAutoNgCount: builder.query({
            query: (query) => ({
                url: `process/line-1/option-auto/auto-ng-causes/quantity-ng?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyNg || 0,
        }),
        getLine1OptionAutoOkCount: builder.query({
            query: (query) => ({
                url: `process/line-1/option-auto/auto-ng-causes/quantity-ok?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyOk || 0,
        }),
        getLine1OptionAutoTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/option-auto/logs",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1OptionAutoTop5NgCause: builder.query({
            query: () => ({
                url: "process/line-1/option-auto/auto-ng-causes/top5",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        line1OptionAutoUpdateManualNg: builder.mutation({
            query: (description) => ({
                url: "process/line-1/option-auto/manual-ng-cause",
                method: "POST",
                body: { description },
            }),
            invalidatesTags: ["Line 1 OptionAuto Manual Ng Cause"],
        }),
        line1OptionAutoTopManualNg: builder.query({
            query: () => ({
                url: "process/line-1/option-auto/manual-ng-causes",
            }),
            providesTags: ["Line 1 OptionAuto Manual Ng Cause"],
            transformResponse: (res) => res?.data || [],
        }),
        line1OptionAutoLogs: builder.query({
            query: (data = []) => ({
                url: `process/line-1/option-auto/auto-ng-causes?${Object.keys(
                    data
                )
                    .map((item, i) => `${item}=${data[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        line1OptionAutoSync: builder.mutation({
            query: (data) => {
                console.log("request =>", data);
                return {
                    url: `process/line-1/option-auto/sync-file?base_path=${data.base_path}`,
                };
            },
        }),
    }),
});

export const {
    useGetLine1OptionAutoNgRatioQuery,
    useGetLine1OptionAutoProcessChartQuery,
    useGetLine1OptionAutoChartLastWeekQuery,
    useGetLine1OptionAutoTopNgCauseQuery,
    useGetLine1OptionAutoNgCountQuery,
    useGetLine1OptionAutoOkCountQuery,
    useGetLine1OptionAutoTopTenLogsQuery,
    useGetLine1OptionAutoTop5NgCauseQuery,
    useLine1OptionAutoUpdateManualNgMutation,
    useLine1OptionAutoTopManualNgQuery,
    useLine1OptionAutoLogsQuery,
    useLine1OptionAutoSyncMutation,
} = optionAutoService;
