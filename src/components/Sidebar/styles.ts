import { colors } from '../../styles/colors'
import styled from 'styled-components'

export const Container = styled.aside`
  background-color: ${colors.primary};
  width: 486px;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  margin-right: -500px;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  animation: sidebar 0.7s forwards;

  @media (max-width: 981px) {
    width: 330px;
  }

  @keyframes sidebar {
    from {
      margin-right: -500px;
    }

    to {
      margin-right: 0;
    }
  }
`

export const Content = styled.div`
  padding: 40px;
  width: 100%;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 42px;
  width: 100%;

  @media (max-width: 981px) {
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.688rem;
    font-weight: 700;
    color: ${colors.white};
  }

  p {
    font-size: 1.5rem;
    border-radius: 100px;
    width: 38px;
    height: 38px;
    background-color: ${colors.black1};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    cursor: pointer;
  }
`

export const Cards = styled.div`
  height: 647px;
  overflow-y: scroll;

  @media (max-width: 981px) {
    height: 450px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export const FinalValue = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${colors.white};
  }
`

export const Finish = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black1};
  height: 97px;
  position: absolute;
  bottom: 0;
  cursor: pointer;

  p {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${colors.white};
  }
`
