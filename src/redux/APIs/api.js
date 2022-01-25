import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const contacts = createApi({
   reducerPath: 'contacts',
   baseQuery: fetchBaseQuery({
      baseUrl:'https://61eea722d593d20017dbb00b.mockapi.io/api/v1/',
   }),
   endpoints: builder => ({
      fetchAPI: builder.query({
         query:()=>'/contacts',
      }),
      delItem: builder.mutation({
         query: itemId => ({
            url: `/contacts/${itemId}`,
            method: 'DELETE',
         }),
      }),
   }),
})
export const { useFetchAPIQuery, useDelItemMutation } = contacts