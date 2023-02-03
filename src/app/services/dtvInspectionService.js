import { apiSlice } from "../../features/api/apiSlice";

export const dtvInspectionService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLine1DtvInspectionNgRatio: builder.query({
            query: () => ({ url: "/process/line-1/dtv-inspection/ng-ratio" }),
            providesTags: ["process/line-1/dtv-inspection/ng-ratio"],
            transformResponse: (response, meta, arg) =>
                response?.data?.ngRatio || 0,
        }),
        getLine1DtvInspectionProcessChart: builder.query({
            query: (frequent) => ({
                url: `process/line-1/dtv-inspection/chart?frequent=${frequent}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1DtvInspectionChartLastWeek: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection/chart?frequent=weekly",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1DtvInspectionTopNgCause: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection/top-ng-cause",
            }),
            transformResponse: (res) => res?.data?.[0] || {},
        }),
        getLine1DtvInspectionCount: builder.query({
            query: (query) => ({
                url: `process/line-1/dtv-inspection/auto-ng-causes/quantity?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || {},
        }),
        getLine1DtvInspectionTopTenLogs: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection/logs",
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1Top5NgCause: builder.query({
            query: (params) => ({
                url: `process/line-1/dtv-inspection/auto-ng-causes/top5?${Object.keys(
                    query
                )
                    .map((item) => `${item}=${query[item]}`)
                    .join("&")}`,
            }),
            transformResponse: (res) => res?.data || [],
        }),
        getLine1DtvInspectionUpdateManualNg: builder.mutation({
            query: (description) => ({
                url: "process/line-1/dtv-inspection-manual-ng",
                method: "POST",
                body: { description },
            }),
            invalidatesTags: ["Line 1 DtvInspection Manual Ng Cause"],
        }),
        line1DtvInspectionTopManualNg: builder.query({
            query: () => ({
                url: "process/line-1/dtv-inspection-manual-ng",
            }),
            providesTags: ["Line 1 DtvInspection Manual Ng Cause"],
            transformResponse: (res) => res?.data || [],
        }),
        getLine1DtvInspectionLogs: builder.query({
            query: (data = []) => ({
                url: `process/line-1/dtv-inspection/auto-ng-causes?${Object.keys(
                    data
                )
                    .map((item, i) => `${item}=${data[item]}`)
                    .join("&")}`,
            }),
            providesTags: ["Line 1 DtvInspection Logs"],
            transformResponse: (res) => res?.data || [],
        }),
        line1DtvInspectionDestroy: builder.mutation({
            query: (id) => ({
                url: `process/line-1/asis/auto-ng-cause/${id}`,
                method: "delete",
            }),
            invalidatesTags: ["Line 1 DtvInspection Logs"],
        }),
    }),
});

export const {
    useGetLine1DtvInspectionNgRatioQuery,
    useGetLine1DtvInspectionProcessChartQuery,
    useGetLine1DtvInspectionChartLastWeekQuery,
    useGetLine1DtvInspectionTopNgCauseQuery,
    useGetLine1DtvInspectionCountQuery,
    useGetLine1DtvInspectionTopTenLogsQuery,
    useGetLine1Top5NgCauseQuery,
    useGetLine1DtvInspectionUpdateManualNgMutation,
    useLine1DtvInspectionTopManualNgQuery,
    useGetLine1DtvInspectionLogsQuery,
    useLine1DtvInspectionDestroyMutation
} = dtvInspectionService;
