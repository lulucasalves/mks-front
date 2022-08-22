import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const LogoDiv = styled.div`
  display: flex;
  align-items: end;
  cursor: default;
  h2 {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 30px;
    color: ${colors.white};
    margin-right: 10px;
  }

  p {
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 19px;
    color: ${colors.white};
  }
`
