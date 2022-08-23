import { IProductStore, IStore } from '../types'
import { createSlice } from '@reduxjs/toolkit'



const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        id: 0,
        name: 'Educação Fisica',
        description: 'aguardando',
        price: '0',
        quantity: 1,
        photo: ''
      }
    ]
  },
  reducers: {
    createProduct: (state, action) => {
      state.products.push(action.payload)
    },
    editProduct: (state: IStore, action) => {
      let nullArray = [] as Array<IProductStore>
      const payl = action.payload

      state.products.map((val: IProductStore) => {
        if (val.id === payl.id) {
          val = payl
        }
        nullArray.push(val)
        return null
      })

      state.products = nullArray
    },
    excludeProduct: (state: IStore, action) => {
      let nullArray = [] as Array<IProductStore>
      const payl = action.payload

      state.products.map((val: IProductStore) => {
        if (val.id !== payl) {
          nullArray.push(val)
        }

        return null
      })

      state.products = nullArray
    }
  }
})

export const { createProduct, excludeProduct, editProduct } =
  productSlice.actions
export const productReducer = productSlice.reducer
