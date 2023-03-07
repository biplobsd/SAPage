import { DevRole } from './types'

export interface DevPlateProps {
  url: string
  imgUrl: string
  name: string
  role: DevRole
  key?: React.Key
}

export interface SAPageProps {
  mainImg: MainIMG
  app: App
  devCompany: DevCompany
  devs: DevPlateProps[]
  reportUrl: string
}

export interface MainIMG {
  logoUrl: string
  alt: string
}

export interface App {
  name: string
  url: string
  year?: number
}

export interface DevCompany {
  name: string
  url: string
  year: number
}
