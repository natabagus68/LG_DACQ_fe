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
        getLine1OptionManualNgCount: builder.query({
            query: (query) => ({
                url: `process/line-1/option-manual/manual-ng-causes/quantity-ng?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyNg || 0,
        }),
        getLine1OptionManualOkCount: builder.query({
            query: (query) => ({
                url: `process/line-1/option-manual/manual-ng-causes/quantity-ok?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyOk || 0,
        }),
        getLine1OptionManualTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/option-manual/logs",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1OptionManualTop5NgCause: builder.query({
            query: () => ({
                url: "process/line-1/option-manual/manual-ng-causes/top5",
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
                url: `process/line-1/option-manual/manual-ng-causes?${Object.keys(
                    data
                )
                    .map((item, i) => `${item}=${data[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        line1OptionManualSync: builder.mutation({
            query: (data) => {
                console.log("request =>", data);
                return {
                    url: `process/line-1/option-manual/sync-file?base_path=${data.base_path}`,
                };
            },
        }),
    }),
});

export const {
    useGetLine1OptionManualNgRatioQuery,
    useGetLine1OptionManualProcessChartQuery,
    useGetLine1OptionManualChartLastWeekQuery,
    useGetLine1OptionManualTopNgCauseQuery,
    useGetLine1OptionManualNgCountQuery,
    useGetLine1OptionManualOkCountQuery,
    useGetLine1OptionManualTopTenLogsQuery,
    useGetLine1OptionManualTop5NgCauseQuery,
    useLine1OptionManualUpdateManualNgMutation,
    useLine1OptionManualTopManualNgQuery,
    useLine1OptionManualLogsQuery,
    useLine1OptionManualSyncMutation,
} = optionManualService;
