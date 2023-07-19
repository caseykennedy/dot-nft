// Search View

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import Marquee from 'react-fast-marquee'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import SearchIp from '../../components/SearchIp'

import RadialCircle from '../../../static/radial-circle.svg'
import CloudA from '../../../static/cloud-a.svg'
import CloudB from '../../../static/cloud-b.svg'

// ___________________________________________________________________

const MarqueeProps = {
  gradient: false,
  speed: 10,
}

const Search: React.FC = () => {
  return (
    <S.Search>
      <Section pb={0} overflow="visible">
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: ['space-between'],
          }}
        >
          <Heading mb={[3, 0]} className="text--lg">
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

        <Box mt={6}>
          <Marquee {...MarqueeProps} direction="right" speed={16}>
            <Box sx={{ pl: '50vw' }}>
              <CloudA />
            </Box>
          </Marquee>
        </Box>

        <Flex
          sx={{
            alignItems: 'center',
            minHeight: '25vh',
            position: 'relative',
            zIndex: 9,
          }}
        >
          <SearchIp />
        </Flex>

        <Box sx={{ mb: [0, `calc(${theme.space[4]} * -2)`] }}>
          <Marquee {...MarqueeProps} direction="right">
            <CloudB />
          </Marquee>
        </Box>

        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: ['space-between'],
          }}
        >
          <Flex sx={{ flex: 1, alignItems: 'flex-end', mb: [0, 7] }}>
            <Link to={`/policies`} className="text--link">
              View our policies {'>'}
            </Link>
          </Flex>
          <Flex sx={{ flex: 1, alignItems: 'flex-end' }}>
            <RadialCircle />
          </Flex>
        </Flex>
      </Section>
    </S.Search>
  )
}

export default Search
