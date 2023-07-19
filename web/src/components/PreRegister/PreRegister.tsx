// Pre Register

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import Marquee from 'react-fast-marquee'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../Section'
import SearchIp from '../SearchIp'

import RadialCircle from '../../../static/radial-circle.svg'

// ___________________________________________________________________

const MarqueeProps = {
  gradient: false,
  speed: 30,
}

const PreRegister: React.FC = () => {
  return (
    <S.PreRegister>
      <Section border={true} pb={0}>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: ['space-between'],
          }}
        >
          <Heading className="text--lg">
            Pre-register your
            <br />
            <strong>.nft</strong> domain:
          </Heading>
          <Text as="p">
            <strong>.nft</strong> is a blockchain, P2P, Fully
            <br />
            Decentralized Top-Level Domain
          </Text>
        </Flex>

        <Flex
          sx={{
            mt: 8,
            flexDirection: ['column', 'row'],
            justifyContent: ['space-between'],
          }}
        >
          <Flex
            sx={{ flex: 1, alignItems: 'flex-end', mb: theme.gutter.vertical }}
          >
            Have a question?
          </Flex>
          <Flex sx={{ flex: 1 }} className="decorator">
            <RadialCircle />
          </Flex>
        </Flex>
      </Section>
    </S.PreRegister>
  )
}

export default PreRegister
