import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import restoReducer from "./restoSlice"

export const store = configureStore({
  reducer: {
    userazti: userReducer,
    resto: restoReducer,
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
