import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProductsData = createAsyncThunk(
  'productsSlice/fetchSomeData',
  async (skip = 0) => {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price,description,brand,rating`
    )
    return response.data
  }
)

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: {
    data: [],
    cart: [],
    loading: false,
    error: null
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      const existingItem = state.cart.find(item => item.id === newItem.id)

      if (!existingItem) {
        state.cart.push({
          ...newItem,
          total: newItem.price, // Устанавливаем начальное значение total
          count: 1
        })
      } else {
        existingItem.total += newItem.price // Увеличиваем total на цену товара
        existingItem.count++ // Увеличиваем количество товара
      }
    },
    increment: (state, action) => {
      state.cart[action.payload].count++
      state.cart[action.payload].total =
        state.cart[action.payload].count * state.cart[action.payload].price
    },
    decrement: (state, action) => {
      state.cart[action.payload].count--
      state.cart[action.payload].total = state.cart[action.payload].total - state.cart[action.payload].price
      if (state.cart[action.payload].count === 0) {
        state.cart = state.cart.filter(
          (item, index) => index !== action.payload
        )
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProductsData.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { addToCart, increment, decrement } = productsSlice.actions
export default productsSlice.reducer
