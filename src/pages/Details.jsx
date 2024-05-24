import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { Button } from '../components/Button'
import { Info } from '../components/Info'
import { getCountry } from '../redux/slice/countrySlice'

export const Details = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { name } = useParams()
  const { country, status } = useSelector((state) => state.country)
  const { borderCountries } = useSelector((state) => state.countries)

  useEffect(() => {
    dispatch(getCountry(name))
  }, [name])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'rejected' && <h2>Ошибка загрузки данных</h2>}
      {status === 'pending' && <h2>Идет закгрузка... 'Подождите'</h2>}
      {status === 'fulfiled' && (
        <Info
          push={navigate}
          country={country}
          borderCountries={borderCountries}
        />
      )}
    </div>
  )
}
