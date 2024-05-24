import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  allCountries: [],
  status: [],
  borderCountries: [],
}

export const getCountries = createAsyncThunk(
  'Countries/get',
  async (region) => {
    if (!region) {
      const { data } = await axios.get(`https://restcountries.com/v3.1/all`)
      return data
    }
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    )
    return data
  }
)

export const countries = createSlice({
  name: 'charactersReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state) => {
      state.status = 'pending'
      state.allCountries = []
    })
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.status = 'fulfiled'
      state.allCountries = action.payload
      state.borderCountries = action.payload.map((item) => item.name.common)
    })
    builder.addCase(getCountries.rejected, (state) => {
      state.status = 'rejected'
      state.allCountries = []
    })
  },
})

export const {} = countries.actions

export default countries.reducer
