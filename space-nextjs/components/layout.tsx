import type {ReactNode} from 'react'

interface Props {
  children: ReactNode
}

function Layout({children}: Props) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
