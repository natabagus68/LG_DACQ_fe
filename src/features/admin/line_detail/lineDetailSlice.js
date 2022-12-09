import { apiSlice } from "../../api/apiSlice";

export const lineDetailApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLogData: builder.query({
            query: () => ({ url: `/process/line-1/asis/logs?q=&page=1&per_page=10&order[model]=asc&order[serial_number]=asc&order[judgement]=asc&order[timestamp]=asc` }),
            providesTags: ["LineLog"],
        })
    }),
});

export const {
    useGetLogDataQuery
} = lineDetailApiSlice;