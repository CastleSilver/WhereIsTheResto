import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import restoReducer from "./restoSlice"
import userInfoSlice from "./userInfoSlice"
import recomSlice from "./recomSlice"

export const store = configureStore({
  reducer: {
    userazti: userReducer,
    resto: restoReducer,
    userInfo: userInfoSlice,
    recom: recomSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
