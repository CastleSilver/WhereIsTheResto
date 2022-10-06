// React 시스템 Import
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { restoResType } from "../../api/resType"

// Custom API import
import {
  resto as restoAPI,
  like as likeAPI,
  visited as visitedAPI,
} from "../../api/index"
import { restoInfo } from "../../api/api/fakeData"

export interface RestoState {
  value: restoResType | undefined
  status: "idle" | "pending" | "failed"
}

const initialState: RestoState = {
  value: restoInfo,
  status: "idle",
}

export const restoSlice = createSlice({
  name: "resto",
  initialState,
  reducers: {
    goInit: (state) => {
      state.value = undefined
    },
    // goLike: (state, action: any) => {
    //   console.log(action)
    //   if (state.value !== undefined) {
    //     state.value.liked = !action.payload
    //   }
    // },
    // goVst: (state, action: any) => {
    //   if (state.value !== undefined) {
    //     state.value.visited = !state.value.visited
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInfoAsync.pending, (state) => {
        state.status = "pending"
      })
      .addCase(getInfoAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.value = action.payload
        state.status = "idle"
      })
      .addCase(getInfoAsync.rejected, (state) => {
        state.status = "failed"
      })
      .addCase(
        likeRestoAsync.fulfilled,
        (state, action: PayloadAction<any>) => {
          if (state.value !== undefined) {
            state.value.liked = action.payload
          }
          state.status = "idle"
        }
      )
      .addCase(vstRestoAsync.fulfilled, (state, action: PayloadAction<any>) => {
        if (state.value !== undefined) {
          state.value.visited = action.payload
        }
        state.status = "idle"
      })
  },
})
export const selectResto = (state: RootState) => state.resto.value
export const selectRestoStatus = (state: RootState) => state.resto.status

export const getInfoAsync = createAsyncThunk(
  "resto/getInfo",
  async (restoId: number) => {
    restoSlice.actions.goInit()
    const res = await restoAPI.get(restoId)
    return res
  }
)

export const likeRestoAsync = createAsyncThunk(
  "resto/onLike",
  async (restoId: number, { getState }: any) => {
    const { liked } = getState().resto.value
    await likeAPI.do(restoId, liked)
    return !liked
  }
)

export const vstRestoAsync = createAsyncThunk(
  "resto/onVst",
  async (restoId: number, { getState }: any) => {
    const { visited } = getState().resto.value
    await visitedAPI.do(restoId, visited)
    return !visited
  }
)

export default restoSlice.reducer
