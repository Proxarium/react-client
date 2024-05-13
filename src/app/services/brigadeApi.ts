import { api } from "./api"
import { Brigade } from "../types"

export const brigadeApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllBrigade: builder.query<Brigade[], void>({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
})

export const { useGetAllBrigadeQuery, useLazyGetAllBrigadeQuery } = brigadeApi

export const {
  endpoints: { getAllBrigade },
} = brigadeApi
