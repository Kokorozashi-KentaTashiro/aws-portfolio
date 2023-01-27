import React, { ReactNode, FC } from 'react'

import Header from './Header'
import Footer from './Footer'

type Props = {
    children: ReactNode;
}
  
const Layout: FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout