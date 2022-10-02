import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "./store"
import { user as userAPI } from "../../api/index"
import { userUpdateType, userInfoType } from "../../api/reqType"

export interface UserState {
  value: userInfoType | undefined
}

const initialState: UserState = {
  value: undefined,
}

export const getUserAsync = createAsyncThunk(
  "user/get",
  async (userId: number) => {
    const res = await userAPI.info(userId)
    return res
  }
)

export const updateUserAsync = createAsyncThunk(
  "user/patch",
  async (data: userUpdateType) => {
    const res = await userAPI.update(data)
    return res
  }
)

export const deleteUserAsync = createAsyncThunk("user/delete", async () => {
  const res = await userAPI.delete()
  return res
})

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.value = action.payload
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.value = action.payload
      })
  },
})

export const selectUserInfo = (state: RootState) => state.userInfo.value

export default userInfoSlice.reducer
