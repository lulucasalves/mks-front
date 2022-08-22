import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const CartDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  margin-bottom: 31px;
`

export const Product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: default;
  justify-content: center;
  border-radius: 8px 8px 0 0;
  height: 253px;
  width: 230px;
  padding: 14px;

  img {
    margin-bottom: 17px;
    height: 138px;
  }

  @media (max-width: 981px) {
    height: 291px;
    width: 250px;

    img {
      height: 158.82px;
    }
  }
`

export const TitlePrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h4 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  div {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.black3};
    padding: 7px;
    max-height: 26px;
    margin-bottom: 16px;

    p {
      color: ${colors.white};
      font-size: 15px;
      font-weight: 700;
    }
  }
`

export const Description = styled.p`
  font-size: 10px;
  font-weight: 300;
`

export const Button = styled.div`
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  height: 32px;
  width: 100%;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }

  p {
    color: ${colors.white};
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 600;
    margin-left: 14px;
  }
`
