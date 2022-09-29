import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "./store"
import { resto as restoAPI } from "../../api/index"
import { restoResType } from "../../api/resType"

export interface RestoState {
  value: restoResType | undefined
  status: "idle" | "loading" | "failed"
}

const initialState: RestoState = {
  value: undefined,
  status: "idle",
}

export const getInfoAsync = createAsyncThunk(
  "resto/getInfo",
  async (restoId: number) => {
    const res = await restoAPI.get(restoId)
    return res
  }
)

export const restoSlice = createSlice({
  name: "resto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInfoAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getInfoAsync.fulfilled, (state, action) => {
        state.value = action.payload
        state.status = "idle"
      })
      .addCase(getInfoAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const selectResto = (state: RootState) => state.resto.value

export default restoSlice.reducer
