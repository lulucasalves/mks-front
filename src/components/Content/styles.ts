import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
  margin: 116px 0 172px 0;
  padding: 0 400px;
  min-height: 600px;

  @media (max-width: 1740px) {
    padding: 0 350px;
  }

  @media (max-width: 1630px) {
    padding: 0 300px;
  }

  @media (max-width: 1520px) {
    padding: 0 250px;
  }

  @media (max-width: 1440px) {
    padding: 0 247px;
  }

  @media (max-width: 981px) {
    padding: 0;
    flex-direction: column;
    margin: 18px 0 46px 0;
  }
`
