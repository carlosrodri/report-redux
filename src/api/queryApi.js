import { microserviceApi } from 'services/microserviceApi'

const context = ''

export const queryApi = microserviceApi.injectEndpoints({
    endpoints: (builder) => ({
        getMinSubject: builder.query({
            query: () => ({
                url: `${context}/top-subject-min`,
                transformResponse: (response) => response.Subjects,
            }),
        }),
        topSubject: builder.query({
            query: () => ({
                url: `${context}/top-subject`,
            }),
            transformResponse: (response) => { return response.Subjects }
        }),
        topStudent: builder.query({
            query: () => ({
                url: `${context}/top-student`,
            }),
            transformResponse: (response) => { return response.Subjects }
        }),
        topAcademicProgramAssitance: builder.query({
            query: () => ({
                url: `${context}/top-academic-program-assitance`,
            }),
            transformResponse: (response) => { return response.Subjects }
        }),
        studentsByAcademicProgramMax: builder.query({
            query: () => ({
                url: `${context}/students-by-academic-program-max`,
            }),
            transformResponse: (response) => { return response.Subjects }
        })
    })
})

export const { useStudentsByAcademicProgramMaxQuery, useTopSubjectQuery, useGetMinSubjectQuery, useTopStudentQuery, useTopAcademicProgramAssitanceQuery } = queryApi