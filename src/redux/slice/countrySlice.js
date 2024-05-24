import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  country: [],
  status: [],
}

export const getCountry = createAsyncThunk('Country/get', async (name) => {
  const result = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
  return result.data
})

export const country = createSlice({
  name: 'charactersReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountry.pending, (state) => {
      state.status = 'pending'
      state.country = []
    })
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.status = 'fulfiled'
      state.country = action.payload
    })
    builder.addCase(getCountry.rejected, (state) => {
      state.status = 'rejected'
      state.country = []
    })
  },
})

export const {} = country.actions

export default country.reducer
