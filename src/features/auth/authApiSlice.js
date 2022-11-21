import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAuthenticatedUser: builder.query({
            query: () => 'me',
            providesTags: ['Auth']
        }),
        login: builder.mutation({
            query: body => ({
                url: `login`,
                method: 'POST',
                body
            }),
            async onQueryStarted(form, { dispatch, queryFulfilled }) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(
                        authApiSlice.util.updateQueryData('getAuthenticatedUser', undefined, draft => {
                            Object.assign(draft, data);
                        })
                    );
                } catch (e) {

                }
            }
        }),
        logout: builder.mutation({
            query: body => ({
                url: `logout`,
                method: 'DELETE'
            }),
            async onQueryStarted(form, { dispatch, queryFulfilled }) {
                console.log("Logout...", form);
                dispatch(
                    authApiSlice.util.updateQueryData('getAuthenticatedUser', undefined, draft => {
                        Object.assign(draft, {
                            message: 'Unauthenticated!',
                            data: null,
                            token: null,
                        });
                    })
                );
            }
        })
    })
});

export const { useGetAuthenticatedUserQuery, useLoginMutation, useLogoutMutation } = authApiSlice;
