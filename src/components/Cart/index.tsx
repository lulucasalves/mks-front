import { useSelector } from 'react-redux'
import { CartDiv } from './styles'
import { IClick, IProductStore } from '../../types'
import { IRootState } from '../../store'
import { MouseEventHandler } from 'react'

export function Cart({
  onClick
}: {
  onClick: MouseEventHandler<HTMLDivElement>
}) {
  const { products } = useSelector((auth: IRootState) => auth.products)

  function countProducts() {
    let quantity = 0

    products.map((val: IProductStore) => {
      quantity += val.quantity
    })

    return quantity - 1
  }

  return (
    <CartDiv onClick={onClick}>
      <img src="/cart.svg" />
      <p>{countProducts()}</p>
    </CartDiv>
  )
}
