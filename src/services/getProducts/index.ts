import { api } from '../api'

export function getProducts() {
  return new Promise((resolve, reject) => {
    ;(async () => {
      await api
        .get(`products?page=1&&rows=8&&sortBy=id&&orderBy=DESC`)
        .then((res: any) => {
          const data = res.data
          if (res.status === 200 || res.status === 201) {
            resolve(data.products)
          } else {
            reject(data.message)
          }
        })
        .catch((error: any) => reject(error))
    })()
  })
}
