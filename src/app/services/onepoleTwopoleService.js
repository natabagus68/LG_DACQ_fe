import { apiSlice } from "../../features/api/apiSlice";

export const onepoleTwopoleService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLine1NgRatioOnepoleTwopole: builder.query({
            query: () => ({ url: "process/line-1/onepole-twopole/ng-ratio" }),
            providesTags: ["process/line-1/onepole-twopole/ng-ratio"],
            transformResponse: (response, meta, arg) => response?.data?.ngRatio,
        }),
        getLine1OnepoleTwopoleProcessChart: builder.query({
            query: (frequent) => ({
                url: `process/line-1/onepole-twopole/chart?frequent=${frequent}`,
            }),
            transformResponse: (res) => res?.data,
        }),
        getLine1OnepoleTwopoleChartLastWeek: builder.query({
            query: () => ({
                url: "process/line-1/onepole-twopole/chart?frequent=weekly",
            }),
            transformResponse: (res) => res.data,
        }),
        getLine1OnepoleTwopoleNgCount: builder.query({
            query: (query) => ({
                url: `process/line-1/onepole-twopole/auto-ng-causes/quantity-ng?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyNg,
        }),
        getLine1OnepoleTwopoleOkCount: builder.query({
            query: (query) => ({
                url: `process/line-1/onepole-twopole/auto-ng-causes/quantity-ok?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyOk,
        }),
        getLine1OnepoleTwopoleTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/onepole-twopole/logs",
            }),
            transformResponse: (res) => res?.data,
        }),
        getLine1Top5NgCause: builder.query({
            query: () => ({
                url: "process/line-1/onepole-twopole/auto-ng-causes/top5",
            }),
            transformResponse: (res) => res?.data,
        }),
        line1OnepoleTwopoleUpdateManualNg: builder.mutation({
            query: (description) => ({
                url: "process/line-1/onepole-twopole/manual-ng-cause",
                method: "POST",
                body: { description },
            }),
            invalidatesTags: ["Manual Ng Cause"],
        }),
        line1OnepoleTwopoleTopManualNg: builder.query({
            query: () => ({
                url: "process/line-1/onepole-twopole/manual-ng-causes",
            }),
            providesTags: ["Manual Ng Cause"],
            transformResponse: (res) => res?.data,
        }),
        line1OnepoleTwopoleLogs: builder.query({
            query: (data = []) => ({
                url: `process/line-1/onepole-twopole/auto-ng-causes?${Object.keys(
                    data
                )
                    .map((item, i) => `${item}=${data[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data,
        }),
    }),
});

export const {
    useGetLine1NgRatioOnepoleTwopoleQuery,
    useGetLine1OnepoleTwopoleProcessChartQuery,
    useGetLine1OnepoleTwopoleChartLastWeekQuery,
    useGetLine1OnepoleTwopoleNgCountQuery,
    useGetLine1OnepoleTwopoleOkCountQuery,
    useGetLine1OnepoleTwopoleTopTenLogsQuery,
    useGetLine1Top5NgCauseQuery,
    useLine1OnepoleTwopoleUpdateManualNgMutation,
    useLine1OnepoleTwopoleTopManualNgQuery,
    useLine1OnepoleTwopoleLogsQuery,
} = onepoleTwopoleService;
