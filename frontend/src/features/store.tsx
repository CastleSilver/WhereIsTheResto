import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import React from "react"
import counterReview from "./review"

export const store = configureStore({
  reducer: {
    review: counterReview,
  },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default function users() {
  return <div>users</div>
}
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
