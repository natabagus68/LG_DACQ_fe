import { apiSlice } from "../../features/api/apiSlice";

export const dtvInspectionService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLine1DTVInspectionNgRatio: builder.query({
            query: () => ({ url: "/process/line-1/dtv-inspection/ng-ratio" }),
            providesTags: ["process/line-1/dtv-inspection/ng-ratio"],
            transformResponse: (response, meta, arg) =>
                response?.data?.ngRatio || 0,
        }),
        getLine1DTVInspectionProcessChart: builder.query({
            query: (frequent) => ({
                url: `process/line-1/dtv-inspection/chart?frequent=${frequent}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1DTVInspectionChartLastWeek: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection/chart?frequent=weekly",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1DTVInspectionTopNgCause: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection/top-ng-cause",
            }),
            transformResponse: (res) => res?.data?.[0] || {},
        }),
        getLine1DTVInspectionNgCount: builder.query({
            query: (query) => ({
                url: `process/line-1/dtv-inspection/auto-ng-causes/quantity-ng?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyNg || 0,
        }),
        getLine1DTVInspectionOkCount: builder.query({
            query: (query) => ({
                url: `process/line-1/dtv-inspection/auto-ng-causes/quantity-ok?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyOk || 0,
        }),
        getLine1DTVInspectionTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection/logs",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1Top5NgCause: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection/auto-ng-causes/top5",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1DTVInspectionUpdateManualNg: builder.mutation({
            query: (description) => ({
                url: "process/line-1/dtv-inspection/manual-ng-cause",
                method: "POST",
                body: { description },
            }),
            invalidatesTags: ["Line 1 DTVInspection Manual Ng Cause"],
        }),
        getLine1DTVInspectionTopManualNg: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection/manual-ng-causes",
            }),
            providesTags: ["Line 1 DTVInspection Manual Ng Cause"],
            transformResponse: (res) => res?.data || [],
        }),
        getLine1DTVInspectionLogs: builder.query({
            query: (data = []) => ({
                url: `process/line-1/dtv-inspection/auto-ng-causes?${Object.keys(data)
                    .map((item, i) => `${item}=${data[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
    }),
});

export const {
    useGetLine1DTVInspectionNgRatioQuery,
    useGetLine1DTVInspectionProcessChartQuery,
    useGetLine1DTVInspectionChartLastWeekQuery,
    useGetLine1DTVInspectionTopNgCauseQuery,
    useGetLine1DTVInspectionNgCountQuery,
    useGetLine1DTVInspectionOkCountQuery,
    useGetLine1DTVInspectionTopTenLogsQuery,
    useGetLine1Top5NgCauseQuery,
    useGetLine1DTVInspectionUpdateManualNgMutation,
    useGetLine1DTVInspectionTopManualNgQuery,
    useGetLine1DTVInspectionLogsQuery,
} = dtvInspectionService;
