import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${colors.primary};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 101px;
  padding: 0 89px 0 69px;

  @media (max-width: 981px) {
    height: 48px;
    padding: 0 28px;
  }
`
