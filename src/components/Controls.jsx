import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { getCountries } from '../redux/slice/countriesSlice'

import { CustomSelect } from './CustomSelect'

const optionsMap = {
  Africa: { value: 'Africa', label: 'Africa' },
  America: { value: 'America', label: 'America' },
  Asia: { value: 'Asia', label: 'Asia' },
  Europe: { value: 'Europe', label: 'Europe' },
  Oceania: { value: 'Oceania', label: 'Oceania' },
}
const options = Object.values(optionsMap)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Controls = () => {
  const dispatch = useDispatch()

  const handleSelect = (reg) => {
    dispatch(getCountries(reg?.value || ''))
    console.log(reg?.value)
  }

  return (
    <Wrapper>
      <CustomSelect
        options={options}
        placeholder="Фильрация по региону"
        isClearable
        isSearchable={false}
        onChange={handleSelect}
      />
    </Wrapper>
  )
}
