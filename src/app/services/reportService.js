import { apiSlice } from "../../features/api/apiSlice";

export const reportService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        report: builder.query({
            query: (q = {}) => ({
                url: `/report?${Object.keys(q)
                    .map((item) => `${item}=${q[item]}`)
                    .join("&")}`,
            }),
            providesTags: ["Report Service"],
        }),
    }),
});

export const {
    useReportQuery,
} = reportService;
