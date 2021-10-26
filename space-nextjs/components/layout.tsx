import {ReactNode} from 'react'
import styled from 'styled-components'
import Header from './header'
import SideNav from './side-nav'

interface Props {
  pathname: string
  children: ReactNode
}

function Layout({children, pathname}: Props) {
  return (
    <>
      <Wrapper pathname={pathname}>
        <Main>
          <Header />
          {children}
        </Main>
        <SideNav />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div<{pathname: string}>`
  color: hsl(var(--clr-white));
  background-image: url(/home/background-${props =>
    props.pathname === '/' ? 'home' : props.pathname.slice(1)}-mobile.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  display: grid;
  grid: [stack] 1fr / [stack] 1fr min-content;
  min-height: 100vh;

  & > * {
    grid-area: stack;
  }
`

const Main = styled.main`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 48px;
`

//TODO:

export default Layout
