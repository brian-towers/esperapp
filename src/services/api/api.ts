import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@constants/config';
import { getApiHeaders } from '@helpers/getApiHeaders';

// API Service is created with react-query lib
export const useApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.dev.url.API_URL,
    prepareHeaders: (headers) => getApiHeaders(headers)
  }),
  endpoints: (build) => ({
    getUser: build.mutation({
      query: (body) => ({
        url: config.dev.url.API_URL,
        method: 'POST',
        body: body
      })
      // onStart, onSuccess, onError are useful for optimistic updates
      // onStart({ id, ...patch }, mutationApi) {},
      // onSuccess(
      //   { id },
      //   { dispatch, getState, extra, requestId, context },
      //   result
      // ) {}, // result is the server response, the 2nd parameter is the destructured `mutationApi`
      // onError({ id }, { dispatch, getState, extra, requestId, context }) {},
      // invalidates: ["Post"],
    })
  })
});

export const { useGetUserMutation } = useApi;
