import type {ReactNode} from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

function Layout({children}: Props) {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  )
}

const Container = styled.div`
  background-color: green;
`

export default Layout
