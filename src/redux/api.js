import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const contacts = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61eea722d593d20017dbb00b.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchAPI: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    //  deleteContact: builder.mutation({
    //    query: itemId => ({
    //      url: `/contacts/${itemId}`,
    //      method: 'DELETE',
    //    }),
    //  }),
  }),
});
export const { useFetchAPIQuery, useDeleteContactMutation } = contacts;
