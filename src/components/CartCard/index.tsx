import { useDispatch } from 'react-redux'
import { editProduct, excludeProduct } from '../../store/products'
import { CartDiv, Delete, Price, PriceDiv, Product, Quantity } from './styles'

export function CartCard({
  image,
  title,
  price,
  id,
  quantity,
  description
}: any) {
  const dispatch = useDispatch()

  function addItem() {
    if (quantity < 99) {
      dispatch(
        editProduct({
          id,
          name: title,
          description,
          price,
          quantity: quantity + 1,
          photo: image
        })
      )
    }
  }

  function removeItem() {
    if (quantity < 2) {
      dispatch(excludeProduct(id))
    } else {
      dispatch(
        editProduct({
          id,
          name: title,
          description,
          price,
          quantity: quantity - 1,
          photo: image
        })
      )
    }
  }

  return (
    <CartDiv>
      <Delete onClick={() => dispatch(excludeProduct(id))}>X</Delete>
      <Product>
        <img src={image} />
        <p>{title}</p>
      </Product>
      <PriceDiv>
        <div>
          <Quantity>
            <p>Qtd:</p>
            <div>
              <button onClick={() => removeItem()}>-</button>
              <p>{quantity}</p>
              <button onClick={() => addItem()}>+</button>
            </div>
          </Quantity>
        </div>
        <Price>R${parseInt(price) * quantity}</Price>
      </PriceDiv>
    </CartDiv>
  )
}
