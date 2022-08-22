import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import { Content } from '../components/Content'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'
import { Sidebar } from '../components/Sidebar'

export const Base = styled.div`
  max-width: 100%;
`

const Home: NextPage = () => {
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <Head>
        <title>MKS - Lucas Alves</title>
      </Head>
      <Base>
         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <Menu setSidebar={setSidebar} />
        <Content />
        <Footer />
      </Base>
    </>
  )
}

export default Home
