// Layout:

// ___________________________________________________________________

import React, { useRef } from 'react'

// Components
import Header from '../Header'
import Newsletter from '../Newsletter'
import Footer from '../Footer'

// Styles + Theme
import * as S from './styles.scss'
import 'react-responsive-modal/styles.css'
import 'swiper/swiper.min.css'

// ___________________________________________________________________

export type LayoutProps = {
  children: React.ReactNode
  location?: {
    pathname: string
  }
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // eslint-disable-next-line no-console
  console.log(
    `%c dotNFT | crafted with care | caseykennedy.hns.to `,
    `background: #78FFF2; color: #000000`
  )
  return (
    <S.Wrapper>
      <Header />
      <S.Main>{children}</S.Main>
      <Newsletter />
      <Footer />
    </S.Wrapper>
  )
}

export default Layout
