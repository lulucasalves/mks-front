import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const CartDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-top: 22px;
  position: relative;
  padding: 19px;
  background-color: ${colors.white};
  width: 379px;
  height: 95px;

  @media (max-width: 981px) {
    flex-direction: column;
    width: 250px;
    height: 220px;
  }
`

export const Delete = styled.p`
  position: absolute;
  width: 22px;
  height: 22px;
  background-color: ${colors.black1};
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: 0.875rem;
  color: ${colors.white};
  cursor: pointer;

  @media (max-width: 981px) {
    background: none;
    color: ${colors.black1};
    top: 15px;
    right: 15px;
    font-size: 30px;
  }
`

export const Product = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 57px;
  }

  p {
    margin-left: 21px;
    font-size: 13px;
    line-height: 17px;
    width: 100px;
    margin-right: 9px;
  }

  @media (max-width: 981px) {
    align-items: center;
    width: 100%;

    flex-direction: column;
    img {
      height: 95px;
    }

    p {
      font-size: 16px;
      margin-top: 15px;
      width: 100%;
    }
  }
`

export const Price = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${colors.black1};
  margin-left: 40px;

  @media (max-width: 981px) {
    color: ${colors.white};
    background-color: ${colors.black3};
    padding: 8px;
    border-radius: 5px;
  }
`

export const Quantity = styled.div`
  p {
    color: ${colors.black1};
    font-size: 0.438rem;
    margin-bottom: 2px;
  }

  div {
    display: flex;
    align-items: center;
    height: 19px;
    width: 50px;
    border-radius: 4px;
    border: 1px solid ${colors.grayBorder};
    justify-content: space-between;

    button {
      cursor: pointer;
      border: none;
      background: none;
      padding: 0 5px;
      font-size: 12px;
    }

    p {
      font-size: 8px;
      color: ${colors.black1};
      margin-top: 2px;
    }

    @media (max-width: 981px) {
      width: 97.37px;
      height: 34.5px;

      button {
        padding: 0 10px;
        font-size: 24px;
      }

      p {
        font-size: 20px;
        display: block;
      }
    }
  }

  @media (max-width: 981px) {
    p {
      display: none;
    }
  }
`

export const PriceDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 981px) {
    width: 100%;
    margin-top: 11px;
    justify-content: space-between;
  }
`
