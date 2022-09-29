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
