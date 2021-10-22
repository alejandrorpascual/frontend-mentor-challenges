import styled from 'styled-components'
import Image from 'next/image'

function NavBar() {
  return (
    <Nav>
      <Img src='/shared/logo.svg' height={40} width={40} />
      <Img src='/shared/icon-hamburger.svg' height={21} width={24} />
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  padding: 24px 24px 0 24px;
  justify-content: space-between;
  align-items: center;
`

/*FIX:
 * It's width, and height being set for <Image />?
 * maybe it's better to define a wrapper and set
 * with the porper dimensions, and Image WxH to 100%
 */
const Img = styled(Image)`
  display: block;
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
`

export default NavBar
