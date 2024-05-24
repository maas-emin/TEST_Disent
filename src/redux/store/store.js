import { configureStore } from '@reduxjs/toolkit'
import countries from '../slice/countriesSlice'
import country from '../slice/countrySlice'

export const store = configureStore({
  reducer: {
    countries,
    country,
  },
})
