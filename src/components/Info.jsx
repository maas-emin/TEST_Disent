import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
  border-bottom: 1px solid #999;
`

export const Info = ({ country, push }) => {
  const {
    name,
    flags,
    capital,
    population,
    region,
    subregion,
    currencies = [],
    languages = [],
    borders = [],
  } = country[0]

  const { borderCountries } = useSelector((state) => state.countries)

  const randomRange = Math.floor(Math.random() * borderCountries.length)
  const randomCountries = borderCountries.slice(randomRange, randomRange + 10)

  return (
    <Wrapper>
      <InfoImage src={flags.svg} alt={name.common} />
      <div>
        <InfoTitle>{name.common}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Население:</b> {population}
            </ListItem>
            <ListItem>
              <b>Регион:</b> {region}
            </ListItem>
            <ListItem>
              <b>Подрегион:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Капитал:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Валюта</b>{' '}
              {Object.values(currencies).map((item) => (
                <span key={item.code}>{item.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Домен верхнего уровня</b>{' '}
              {Object.values(languages).map((item) => (
                <span key={item.name}>{item}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Соседние страный:'Можно перейти'</b>
          {!borders.length ? (
            <span>Нет соседних стран</span>
          ) : (
            <TagGroup>
              {randomCountries.map((item) => (
                <Tag key={item} onClick={() => push(`/country/${item}`)}>
                  {item}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  )
}
