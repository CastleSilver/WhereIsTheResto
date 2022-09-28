import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

// interface
export interface UserState {
    userId : string,
    userToken : string,
}

export interface AztiState {
    userId : string,
    cost_effective : string,
    mood : string,
    place : string,
    drinking : string,
    user_azti : string,
    user_azti_type : string
}

export interface AztiTypeState {
    moist_cost_effective_insider_soju : string,
    dry_cost_effective_insider_soju : string,
    moist_none_cost_effective_insider_soju : string,
    dry_none_cost_effective_insider_soju : string,
    moist_cost_effective_hipster_soju : string,
    dry_cost_effective_hipster_soju : string,
    moist_none_cost_effective_hipster_soju : string,
    dry_none_cost_effective_hipster_soju : string,
    moist_cost_effective_hipster_coke : string,
    dry_cost_effective_hipster_coke : string,
    moist_none_cost_effective_hipster_coke : string,
    dry_none_cost_effective_hipster_coke : string,
    moist_cost_effective_insider_coke : string,
    dry_cost_effective_insider_coke : string,
    moist_none_cost_effective_insider_coke : string,
    dry_none_cost_effective_insider_coke : string
}

// state

const userState : UserState = {
    userId : '',
    userToken : '',
}


const initialState : AztiState = {
    userId : '',
    cost_effective : '',
    mood : '',
    place : '',
    drinking : '',
    user_azti : '',
    user_azti_type : ''
}

// AZTI = > 16개 타입
const aztiType : AztiTypeState = {
    moist_cost_effective_insider_soju : 'mcis',
    dry_cost_effective_insider_soju : 'dcis',
    moist_none_cost_effective_insider_soju : 'mnis',
    dry_none_cost_effective_insider_soju :'dnis',
    moist_cost_effective_hipster_soju : 'mchs',
    dry_cost_effective_hipster_soju : 'dchs',
    moist_none_cost_effective_hipster_soju : 'mnhs',
    dry_none_cost_effective_hipster_soju : 'dnhs',
    moist_cost_effective_hipster_coke : 'mchc',
    dry_cost_effective_hipster_coke : 'dchc',
    moist_none_cost_effective_hipster_coke : 'mnhc',
    dry_none_cost_effective_hipster_coke : 'dnhc',
    moist_cost_effective_insider_coke : 'mcic',
    dry_cost_effective_insider_coke : 'dcic',
    moist_none_cost_effective_insider_coke : 'mnic',
    dry_none_cost_effective_insider_coke : 'dnic'
}


const koreanAztiType = {
    mcis : '감성 알뜰 인싸 주당',
    dcis : '현실 알뜰 인싸 주당',
    mnis : '감성 호탕 인싸 주당',
    dnis : '현실 호탕 인싸 주당',
    mchs : '감성 알뜰 힙스터 주당',
    dchs : '현실 알뜰 힙스터 주당',
    mnhs : '감성 호탕 힙스터 주당',
    dnhs : '현실 호탕 힙스터 주당',
    mchc : '감성 알뜰 힙스터 술린이',
    dchc : '현실 알뜰 힙스터 술린이',
    mnhc : '감성 호탕 힙스터 술린이',
    dnhc : '현실 호탕 힙스터 술린이',
    mcic : '감성 알뜰 인싸 술린이',
    dcic : '현실 알뜰 인싸 술린이',
    mnic : '감성 호탕 인싸 술린이',
    dnic : '현실 호탕 인싸 술린이'
}
export const userStateSlice = createSlice({
    name : 'userStateSlice',
    initialState : userState,
    reducers : {
        userLogin : (state = userState , action:PayloadAction<any>) => {
            console.log('here')
            return {...state}
        }
    }
})


export const userSlice = createSlice({
    name : 'userSlice',
    initialState, 
    reducers: {
        userLogin : ( state , action:PayloadAction<any>) => {
            return {...state,
                userId : action.payload.userId
            }
        },
        userinfo: (state=initialState , action:PayloadAction<any>) => {
            const search_user = action.payload.mood+'_'+ action.payload.cost_effective+'_'+action.payload.place+'_'+action.payload.drinking
            for ( let i = 0 ; i < 17 ; i ++) {
                if ( Object.keys(aztiType)[i] == search_user){
                    // 유저의 azti 를 받아오는 부분
                    let user = Object.values(aztiType)[i]

                    for ( let j = 0 ; j < 17; j ++){
                        if (Object.keys(koreanAztiType)[i] == user) {
                            let korean_azti = Object.values(koreanAztiType)[i]
                            return {...state,
                                cost_effective : action.payload.cost_effective,
                                mood : action.payload.mood,
                                place : action.payload.place,
                                drinking : action.payload.drinking,
                                user_azti : user,
                                user_azti_type : korean_azti
                            }
                        }
                    }
                }
            }
            return {...state}
        }
    }
})

export const { userinfo , userLogin } = userSlice.actions
// export const { userLogin }  = userStateSlice.actions

export default userSlice.reducer