import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001'
    }),
    endpoints: (builder) => ({
        getAssistanceBySubject: builder.query({
            query: () => '/assistance-by-subject',
            transformResponse: (response) => response.Subjects
        })
    })
})

export const { useGetAssistanceBySubjectQuery } = apiSlice