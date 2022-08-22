import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

export const Base = styled.div`
  max-width: 100%;
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MKS - Lucas Alves</title>
      </Head>
      <Base>Hello World</Base>
    </>
  )
}

export default Home
