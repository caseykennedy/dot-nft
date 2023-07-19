// Hero

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../../components/Section'
import SearchIp from '../../../components/SearchIp'
import HandshakeBadge from '../../../components/HandshakeBadge'

import Beeple from '../../../../static/browser-eg.svg'

// ___________________________________________________________________

const Hero: React.FC = () => {
  return (
    <S.Hero py={theme.gutter.vertical}>
      <Flex px={theme.gutter.axis} className="hero__inner">
        <Flex className="hero__row">
          <Box sx={{ flex: 1, pr: [0, 4, 6], width: '100%' }}>
            <Heading as="h1" className="text--xl">
              Claim your
              <br />
              <Text sx={{ fontWeight: 600 }}>.nft</Text> domain
              <br />
              today.
            </Heading>

            <Box sx={{ minHeight: '100px', my: 6 }}>
              <SearchIp />
            </Box>
          </Box>

          <Flex sx={{ flex: 1, justifyContent: 'flex-end', width: '100%' }}>
            <Box sx={{ ml: 0, width: '100%', maxWidth: '550px' }}>
              <Beeple />
            </Box>
          </Flex>
        </Flex>

        <Flex className="hero__row">
          <Box sx={{ flex: 1, width: '100%' }}>
            <Text as="p">
              Now accepting first-priority
              <br />
              &amp; general applications.
            </Text>
            <Box mt={4}>
              <Link to={`/faq`} className="text--link">
                Are you eligible?
              </Link>
            </Box>
          </Box>

          <Flex className="handshake">
            <HandshakeBadge />
          </Flex>
        </Flex>
      </Flex>
    </S.Hero>
  )
}

export default Hero
