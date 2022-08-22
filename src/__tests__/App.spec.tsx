import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import Home from '../pages/index'
import { PropsWithChildren } from 'react'
import store from '../store'

function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
  return <Provider store={store}>{children}</Provider>
}

describe('Test general render components', () => {
  it('Test if home render', () => {
    render(<Home />, { wrapper: Wrapper })

    const Menu = screen.getByTestId('menu')
    const Content = screen.getByTestId('content')
    const Footer = screen.getByTestId('footer')

    expect(Menu).toBeInTheDocument()
    expect(Content).toBeInTheDocument()
    expect(Footer).toBeInTheDocument()
  })
})
