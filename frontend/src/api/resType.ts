// resto 정보 타입

interface reviewType {
  id: number
  imageUrl: string[]
  content: string
  rating: number
  regDate: string
  nickname: string
}

export interface restoResType {
  id: number
  restoAge: number
  thumbnail: string
  address: string
  name: string
  sectors: string
  locationX: number
  locationY: number
  phoneNumber: string
  menu1: string
  menu2: string
  grade: string
  review: reviewType[]
  rating: number
}
