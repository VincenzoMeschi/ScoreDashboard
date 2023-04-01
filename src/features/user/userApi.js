import { apiSlice } from '../api/apiSlice'
import { userUpdate } from '../auth/authSlice'

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({}),
    getUser: builder.query({}),
    addUser: builder.mutation({}),
    updateUser: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          dispatch(userUpdate(result.data))
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    updateAvatar: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/upload`,
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled
          dispatch(userUpdate(result.data))
        } catch (error) {
          console.log({ error })
        }
      },
    }),
    updatePassword: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/password/${userId}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteUser: builder.mutation({}),
  }),
})

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useUpdateAvatarMutation,
  useUpdatePasswordMutation,
  useDeleteUserMutation,
} = userApi
