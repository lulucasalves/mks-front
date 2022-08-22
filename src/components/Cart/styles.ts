import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const CartDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.white};
  justify-content: center;
  border-radius: 8px;
  height: 45px;
  width: 90px;

  img {
    height: 18px;
  }

  opacity: 1;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }

  p {
    font-weight: 700;
    font-size: 18px;
    color: ${colors.black1};
    margin-left: 16px;
  }

  @media (max-width: 981px) {
    height: 26px;
    width: 52px;

    img {
      height: 10.4px;
    }

    p {
      font-size: 12px;
      margin-left: 10px;
    }
  }
`
