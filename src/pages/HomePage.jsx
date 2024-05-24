import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/Controls'

export const HomePage = () => {
  const navigate = useNavigate()
  const { allCountries, status } = useSelector((state) => state.countries)

  return (
    <>
      <Controls />
      {status === 'rejected' && <h2>Ошибка загрузки данных</h2>}
      {status === 'pending' && <h2>Идет закгрузка... 'Подождите'</h2>}
      {status === 'fulfiled' && (
        <List>
          {allCountries.map((item) => {
            const countryInfo = {
              img: item.flags.png,
              name: item.name.common,
              info: [
                {
                  title: 'Население',
                  description: item.population.toString(),
                },
                {
                  title: 'Регион',
                  description: item.region,
                },
                {
                  title: 'Капитал',
                  description: item.capital,
                },
              ],
            }

            return (
              <Card
                key={item.name.common}
                onClick={() => navigate(`/country/${item.name.common}`)}
                {...countryInfo}
              />
            )
          })}
        </List>
      )}
    </>
  )
}
