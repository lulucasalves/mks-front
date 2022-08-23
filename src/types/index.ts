export interface IProductStore {
  id: number
  name: string
  brand?: string
  description: string
  price: string
  quantity: number
  photo: string
}

export interface IStore {
  products: Array<IProductStore>
}

export interface IApiProducts {
  id: number
  title: string
  description: string
  price: string
  quantity: number
  image: string
}

export interface IClick {
  onClick: (event: boolean) => void
}

export interface ISideBar {
  setSidebar: (val: boolean) => void
  sidebar?: boolean
}

