import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { user as userAPI } from "../../api"
import { recomList } from "../../api/api/fakeData"

const initialState: any = {
  value: undefined,
  status: "pending",
}

export const getRecomAsync = createAsyncThunk("recom/get", async () => {
  const res = await userAPI.getRecom()
  return res
})

export const recomSlice = createSlice({
  name: "recom",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecomAsync.pending, (state) => {
        state.status = "pending"
      })
      .addCase(getRecomAsync.fulfilled, (state, action) => {
        state.value = action.payload
        state.status = "idle"
      })
      .addCase(getRecomAsync.rejected, (state) => {
        state.status = "rejected"
      })
  },
})

export const selectRecom = (state: RootState) => state.recom.value
export const selectRecomStatus = (state: RootState) => state.recom.status

export default recomSlice.reducer
