import { microserviceApi } from 'services/microserviceApi'

const context = ''

export const queryApi = microserviceApi.injectEndpoints({
    endpoints: (builder) => ({
        getSubject: builder.query({
            query: () => ({
                url: `${context}/subject`,
                transformResponse: (response) => response.Subjects,
            }),
        }),
        topSubject: builder.query({
            query: () => ({
                url: `${context}/top-subject`,
            }),
            transformResponse: (response) => { return response.Subjects }
        })
    })
})

export const { useTopSubjectQuery } = queryApi