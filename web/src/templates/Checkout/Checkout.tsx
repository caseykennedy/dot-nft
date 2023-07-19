// Checkout View

// ___________________________________________________________________

import * as React from 'react'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading } from 'theme-ui'

// Components
import Section from '../../components/Section'
import CheckoutIp from '../../components/CheckoutIp'

// ___________________________________________________________________

const Checkout: React.FC = () => {
  return (
    <S.Checkout>
      <Section pb={0} overflow="visible">
        <Flex
          sx={{
            alignItems: 'center',
            position: 'relative',
            zIndex: 9,
          }}
        >
          <CheckoutIp />
        </Flex>
      </Section>
    </S.Checkout>
  )
}

export default Checkout
