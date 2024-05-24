import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCountries } from './redux/slice/countriesSlice'

import { Header } from './components/Header'
import { Main } from './components/Main'

import { HomePage } from './pages/HomePage'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'

import './App.css'
import { List } from './components/List'
import { Card } from './components/Card'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  }, [])

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  )
}

export default App
