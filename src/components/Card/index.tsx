import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { Button, CartDiv, Description, Product, TitlePrice } from './styles'
import { createProduct, editProduct } from '../../store/products'
import { IApiProducts, IProductStore } from '../../types'
import { IRootState } from '../../store'

export function Card({ image, title, description, price, id }: IApiProducts) {
  const dispatch = useDispatch()
  const { products } = useSelector((auth: IRootState) => auth.products)

  function filterProducts(val: IProductStore) {
    return val.id === id
  }

  function addToCart() {
    console.log(id)
    const productsFilter = products.filter(filterProducts)

    if (productsFilter.length > 0) {
      dispatch(
        editProduct({
          id,
          name: title,
          description,
          price,
          quantity: productsFilter[0].quantity + 1,
          photo: image
        })
      )
    } else {
      dispatch(
        createProduct({
          id,
          name: title,
          description,
          price,
          quantity: 1,
          photo: image
        })
      )
    }
  }

  return (
    <CartDiv>
      <Product>
        <img src={image || ''} />
        <TitlePrice>
          <h4>{title}</h4>
          <div>
            <p>R${parseInt(price)}</p>
          </div>
        </TitlePrice>
        <Description title={description}>
          {description.length > 55
            ? `${description.slice(0, 55)}...`
            : description}
        </Description>
      </Product>
      <Button onClick={() => addToCart()}>
        <Image src="/bag.svg" width={12} height={13.5} />
        <p>Comprar</p>
      </Button>
    </CartDiv>
  )
}
