import {ReactNode} from 'react'
import styled from 'styled-components'
import NavBar from './nav-bar'

interface Props {
  pathname: string
  children: ReactNode
}

function Layout({children, pathname}: Props) {
  return (
    <>
      <Wrapper pathname={pathname}>
        <Main>
          <NavBar />
          {children}
        </Main>
        <Sidebar id='sidenav-open'>
          <a
            id='sidenav-close'
            href='#'
            title='close menu'
            aria-label='close menu'
          />
          <Nav>
            <span>X</span>
            <List>
              <ListItem>
                <span>00</span>
                <span>Home</span>
              </ListItem>
              <ListItem>
                <span>01</span>
                <span>Destination</span>
              </ListItem>
              <ListItem>
                <span>02</span>
                <span>Crew</span>
              </ListItem>
              <ListItem>
                <span>03</span>
                <span>Technology</span>
              </ListItem>
            </List>
          </Nav>
        </Sidebar>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div<{pathname: string}>`
  height: 100%;
  color: hsl(var(--clr-white));
  background-image: url(/home/background-${props =>
    props.pathname === '/' ? 'home' : props.pathname.slice(1)}-mobile.jpg);

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
const Sidebar = styled.aside`
  display: grid;
  grid-template-columns: [escape] 1fr [nav] 2fr;
  position: relative;
`

const Nav = styled.nav`
  background-color: hsl(var(--clr-dark));
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const ListItem = styled.li`
  text-transform: uppercase;
  list-style: none;
  font-family: var(--ff-sans-cond);

  & > span + span {
    margin-left: 14px;
  }
`

export default Layout
