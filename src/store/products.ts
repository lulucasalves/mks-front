import { IProductStore } from '../types'
import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        id: '1',
        name: 'Educação Fisica',
        brand: 'Apple',
        description: 'aguardando',
        price: 200,
        quantity: 1
      }
    ]
  },
  reducers: {
    createProduct: (state, action) => {
      state.products.push(action.payload)
    },
    editProduct: (state: any, action) => {
      let nullArray = [] as Array<IProductStore>
      const payl = action.payload

      state.products.map((val: any) => {
        if (val.id === payl.id) {
          val = payl
        }
        nullArray.push(val)
        return null
      })

      state.products = nullArray
    },
    excludeProduct: (state: any, action) => {
      let nullArray = [] as Array<IProductStore>
      const payl = action.payload

      state.products.map((val: any) => {
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
