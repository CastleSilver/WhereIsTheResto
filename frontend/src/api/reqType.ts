// axios 보내는 과정에서의 데이터 타입
export interface reqInfoType {
  url?: string
  uri?: string
  method: string
  data?: Object | FormData
  params?: Object
  headers?: Object
}

export interface reqType {
  url: string
  method: string
  data?: object | FormData
  params?: object
  headers?: object
}

// user user user user
export interface userUpdateType {
  nickname?: string
  aztiType?: string
  profileImg?: string
}

export interface userInfoType {
  nickname: string
  email: string
  gender: string
  profileImageURL: string
  aztiType: string
  like: {}[]
  review: {}[]
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

// resto api req/res 타입
export interface restoResType {
  id: number
  restoAge: number
  thumbnail: string
  address: string
  name: string
  sectors: string // 업종
  locationX: number
  locationY: number
  phoneNumber: string
  menu1: string
  menu2: string
  // terrace: Bool,
  grade: string
  review: []
  rating: number
}
