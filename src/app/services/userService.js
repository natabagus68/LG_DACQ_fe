import { apiSlice } from "../../features/api/apiSlice";

export const userService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (params = {}) => ({
                url: `_/users?${Object.keys(params)
                    .map((item) => `${item}=${params[item]}`)
                    .join("&")}`,
            }),
            providesTags: ["Users"],
            transformResponse: (response) =>
                response?.data || {
                    total: 0,
                    data: [],
                },
        }),
        getDetailUser: builder.query({
            query: (id) => ({
                url: `_/users/${id}`,
            }),
            transformResponse: (response) => response?.data || {},
        }),
        updateUser: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `_/users/${id}`,
                data: data,
                method: "PUT",
            }),
            invalidatesTags: ["Users"],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `_/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Users"],
        }),
        toogleActiveUser: builder.mutation({
            query: (id) => ({
                url: `_/users/${id}/toggle-active`,
                method: "PUT",
            }),
            invalidatesTags: ["Users"],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useToogleActiveUserMutation,
    useGetDetailUserQuery,
} = userService;
