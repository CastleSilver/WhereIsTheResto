import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    userinfo: (state = initialState, action: PayloadAction<any>) => {
      const search_user =
        action.payload.mood +
        "_" +
        action.payload.cost_effective +
        "_" +
        action.payload.place +
        "_" +
        action.payload.drinking
      for (let i = 0; i < 17; i++) {
        if (Object.keys(aztiType)[i] == search_user) {
          // 유저의 azti 를 받아오는 부분
          let user = Object.values(aztiType)[i]

          for (let j = 0; j < 17; j++) {
            if (Object.keys(koreanAztiType)[i] == user) {
              let korean_azti = Object.values(koreanAztiType)[i]
              return {
                ...state,
                cost_effective: action.payload.cost_effective,
                mood: action.payload.mood,
                place: action.payload.place,
                drinking: action.payload.drinking,
                user_azti: user,
                user_azti_type: korean_azti,
              }
            }
          }
        }
      }
      return { ...state }
    },
  },
})
