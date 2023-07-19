// HomePage:

// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box } from 'theme-ui'

// Sections
import Hero from './Hero'
import Nft from './Nft'
import WhyChooseNft from './WhyChooseNft'
// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Hero />
      <Nft />
      <WhyChooseNft />
    </S.HomePage>
  )
}

export default HomePage
