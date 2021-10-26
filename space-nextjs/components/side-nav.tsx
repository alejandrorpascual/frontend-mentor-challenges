import styled from 'styled-components'

function SideNav() {
  return (
    <Sidebar id='sidenav-open'>
      <a
        id='sidenav-close'
        href='#'
        title='close menu'
        aria-label='close menu'
      />
      <Nav>
        <CloseButtonWrapper>
          <CloseButton href='#' title='close menu' aria-label='close menu'>
            <svg
              style={{display: 'block', marginLeft: 'auto'}}
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='21'
            >
              <g fill='#D0D6F9' fillRule='evenodd'>
                <path d='M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z' />
                <path d='M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z' />
              </g>
            </svg>
          </CloseButton>
        </CloseButtonWrapper>
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
  )
}
const Sidebar = styled.aside`
  display: grid;
  grid-template-columns: [escape] 1fr [nav] 2fr;
  position: relative;
  transform: translateX(-110vw);
  visibility: hidden;

  &:target {
    visibility: visible;
    transform: translateX(0);
  }
 }
`

const CloseButtonWrapper = styled.div`
  padding: 36px 28px;
`
const CloseButton = styled.a``

const Nav = styled.nav`
  backdrop-filter: blur(32px);
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
  line-height: calc(19 / 16);
  display: flex;
  gap: 14px;
`

export default SideNav
