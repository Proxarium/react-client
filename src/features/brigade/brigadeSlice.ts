import { createSlice } from "@reduxjs/toolkit"
import { brigadeApi } from "../../app/services/brigadeApi"
import { RootState } from "../../app/store"
import { Brigade } from "../../app/types"

interface InitialState {
  brigade: Brigade | null
  isAuthenticated: boolean
  brigades: Brigade[] | null
  current: Brigade | null
  token?: string
}

const initialState: InitialState = {
  brigade: null,
  isAuthenticated: false,
  brigades: null,
  current: null,
}

const slice = createSlice({
  name: "brigade",
  initialState,
  reducers: {
    logout: () => initialState,
    resetUser: state => {
      state.brigade = null
    },
  },
  extraReducers: builder => {
    builder
      
      .addMatcher(
        brigadeApi.endpoints.getAllBrigade.matchFulfilled,
        (state, action) => {
          state.brigades = action.payload
        },
      )
  },
})

export const { logout, resetUser } = slice.actions
export default slice.reducer

export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated

export const selectCurrent = (state: RootState) => state.user.current

export const selectBrigades = (state: RootState) => state.brigade.brigades

export const selectBrigade = (state: RootState) => state.brigade.brigade