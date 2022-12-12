import { apiSlice } from "../../features/api/apiSlice";

export const asisService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLine1NgRatio: builder.query({
            query: () => ({ url: "/process/line-1/asis/ng-ratio" }),
            providesTags: ["process/line-1/asis/ng-ratio"],
            transformResponse: (response, meta, arg) => response?.data?.ngRatio
        }),
    }),
});

export const {
    useGetLine1NgRatioQuery,
} = asisService;