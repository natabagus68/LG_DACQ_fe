import { apiSlice } from "../../features/api/apiSlice";

export const dtvInspectionService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getline1DtvInspectionNgRatio: builder.query({
            query: () => ({ url: "/process/line-1/dtv-inspection/ng-ratio" }),
            providesTags: ["process/line-1/dtv-inspection/ng-ratio"],
            transformResponse: (response, meta, arg) =>
                response?.data?.ngRatio || 0,
        }),
        getline1DtvInspectionProcessChart: builder.query({
            query: (frequent) => ({
                url: `process/line-1/dtv-inspection/chart?frequent=${frequent}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getline1DtvInspectionChartLastWeek: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection/chart?frequent=weekly",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getline1DtvInspectionTopNgCause: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection/top-ng-cause",
            }),
            transformResponse: (res) => res?.data?.[0] || {},
        }),
        getline1DtvInspectionNgCount: builder.query({
            query: (query) => ({
                url: `process/line-1/dtv-inspection/auto-ng-causes/quantity-ng?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyNg || 0,
        }),
        getline1DtvInspectionOkCount: builder.query({
            query: (query) => ({
                url: `process/line-1/dtv-inspection/auto-ng-causes/quantity-ok?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data?.qtyOk || 0,
        }),
        getline1DtvInspectionTopTenLogs: builder.query({
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
        getline1DtvInspectionUpdateManualNg: builder.mutation({
            query: (description) => ({
                url: "process/line-1/dtv-inspection/manual-ng-cause",
                method: "POST",
                body: { description },
            }),
            invalidatesTags: ["Line 1 DtvInspection Manual Ng Cause"],
        }),
        line1DtvInspectionTopManualNg: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection/manual-ng-causes",
            }),
            providesTags: ["Line 1 DtvInspection Manual Ng Cause"],
            transformResponse: (res) => res?.data || [],
        }),
        getline1DtvInspectionLogs: builder.query({
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
    useGetline1DtvInspectionNgRatioQuery,
    useGetline1DtvInspectionProcessChartQuery,
    useGetline1DtvInspectionChartLastWeekQuery,
    useGetline1DtvInspectionTopNgCauseQuery,
    useGetline1DtvInspectionNgCountQuery,
    useGetline1DtvInspectionOkCountQuery,
    useGetline1DtvInspectionTopTenLogsQuery,
    useGetLine1Top5NgCauseQuery,
    useGetline1DtvInspectionUpdateManualNgMutation,
    useLine1DtvInspectionTopManualNgQuery,
    useGetline1DtvInspectionLogsQuery,
} = dtvInspectionService;
