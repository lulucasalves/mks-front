import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${colors.gray};
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 34px;

  p {
    color: ${colors.black1};
    font-size: 0.75rem;
  }
`
