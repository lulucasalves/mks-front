import { Cart } from '../Cart'
import { Logo } from '../Logo'
import { Container } from './styles'

export function Menu({ setSidebar }: any) {
  return (
    <Container>
      <Logo />
      <Cart onClick={() => setSidebar(true)} />
    </Container>
  )
}
