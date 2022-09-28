// axios 보내는 과정에서의 데이터 타입
export interface reqInfoType {
  url?: string
  uri?: string
  method: string
  data?: Object
  params?: Object
  header?: any
}

export interface reqType {
  url: string
  method: string
  data?: Object
  params?: Object
  header?: any
}

// user api 요청 request 타입
export interface userUpdateType {
  nickname?: string
  aztiType?: string
  profileImg?: string
}

// review api 요청 request 타입
export interface reviewCreateType {
  restoId: number
  content: string
  rating: number
}

export interface reviewUpdateType {
  restoId: number
  content?: string
  rating?: number
}
