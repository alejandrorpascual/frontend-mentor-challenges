import type {ReactNode} from 'react'
import styled, {StyledComponent} from 'styled-components'
import NavBar from './nav-bar'

interface Props {
  children: ReactNode
  Wrapper?: StyledComponent<'div', any>
}

function Layout({children, Wrapper = StyledWrapper}: Props) {
  return (
    <>
      <Wrapper>
        <NavBar />
        {children}
      </Wrapper>
      <Sidebar></Sidebar>
    </>
  )
}

const StyledWrapper = styled.div`
  height: 100%;
  color: hsl(var(--clr-white));
  background-image: url(/home/background-home-mobile.jpg);
`

//TODO:
const Sidebar = styled.aside``

export default Layout
