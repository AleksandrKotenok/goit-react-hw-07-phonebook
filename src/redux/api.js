import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contacts = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61eea722d593d20017dbb00b.mockapi.io/api/v1/',
  }),
  tagTypes: ['API'],
  endpoints: builder => ({
    fetchAPI: builder.query({
      query: filterValue => `/contacts?filter=${filterValue}`,
      providesTags: ['API'],
    }),
    deleteContact: builder.mutation({
      query: itemId => ({
        url: `/contacts/${itemId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['API'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['API'],
    }),
  }),
});
export const {
  useFetchAPIQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contacts;
