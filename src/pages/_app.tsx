import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store'
import { Global } from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Global />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
