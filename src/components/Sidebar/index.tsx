import { Cards, Container, Content, FinalValue, Finish, Top } from './styles'
import OnOutsiceClick from 'react-outclick'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartCard } from '../CartCard'
import { IProductStore, ISideBar } from '../../types'
import { IRootState } from '../../store'

export function Sidebar({ sidebar, setSidebar }: ISideBar) {
  // Modo de criar delay para não abrir e fechar menu ao msm tempo

  const [state, setState] = useState(false)
  useEffect(() => setState(sidebar || false), [sidebar])

  const { products } = useSelector((auth: IRootState) => auth.products)

  function totalValue() {
    let final = 0

    products.map((val: IProductStore) => {
      final += val.quantity * parseInt(val.price)
    })

    return final
  }

  return (
    <>
      {state && (
        <OnOutsiceClick onOutsideClick={() => setSidebar(false)}>
          <Container>
            <Content>
              <Top>
                <h2>
                  Carrinho
                  <br /> de Compras
                </h2>

                <p onClick={() => setSidebar(false)}>X</p>
              </Top>
              <Cards>
                {products.slice(1, 9).map((val: IProductStore) => {
                  return (
                    <CartCard
                      key={val.id}
                      description={val.description}
                      image={val.photo}
                      title={val.name}
                      price={val.price}
                      id={val.id}
                      quantity={val.quantity}
                    />
                  )
                })}
              </Cards>
              <FinalValue>
                <p>Total:</p>
                <p>{`R$${totalValue()}`}</p>
              </FinalValue>
            </Content>
            <Finish>
              <p>Finalizar Compra</p>
            </Finish>
          </Container>
        </OnOutsiceClick>
      )}
    </>
  )
}
