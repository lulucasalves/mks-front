import Image from 'next/image'
import { useSelector } from 'react-redux'
import { CartDiv } from './styles'

export function Cart({ onClick }: any) {
  const { products } = useSelector((auth: any) => auth.products)

  function countProducts() {
    let quantity = 0

    products.map((val: any) => {
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
