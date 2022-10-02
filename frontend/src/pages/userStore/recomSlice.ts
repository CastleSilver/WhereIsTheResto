import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { user as userAPI } from "../../api"
import { recomList } from "../../api/api/fakeData"

const initialState: any = {
  value: [...recomList],
}

export const getRecom = createAsyncThunk("recom/get", async () => {
  const res = await userAPI.getRecom()
  return res
})

export const recomSlice = createSlice({
  name: "recom",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecom.fulfilled, (state, action) => {
      state.value = action.payload
    })
  },
})

export const selectRecom = (state: RootState) => state.recom.value

export default recomSlice.reducer
