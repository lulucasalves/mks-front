import { useMemo, useState } from 'react'
import { getProducts } from '../../services/getProducts'
import { Card } from '../Card'
import { Container } from './styles'

export function Content() {
  const [products, setProducts] = useState<any>([
    {
      id: '99999999',
      name: 'Educação Fisica',
      brand: 'Apple',
      description: 'aguardando',
      price: 200,
      quantity: 1,
      photo: ''
    }
  ])
  const [loading, setLoading] = useState(true)

  useMemo(() => {
    ;(async () => {
      await getProducts()
        .then((res: any) => setProducts(res.products))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    })()
  }, [])

  return (
    <Container data-testid="content">
      {loading ? (
        <p>Buscando Produtos...</p>
      ) : (
        <>
          {products.map((val: any) => {
            if (val.id === '99999999') return null

            return (
              <Card
              key={val.id}
                price={val.price}
                description={val.description}
                title={val.name}
                image={val.photo}
                id={val.id}
              />
            )
          })}
        </>
      )}
    </Container>
  )
}
