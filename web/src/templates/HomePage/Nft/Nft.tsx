// What are NFTs?

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import Marquee from 'react-fast-marquee'

// Theme + ui
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../../components/Section'

// SVG
import Keybox from '../../../../static/keybox.svg'
import NftBadge from '../../../../static/nft-badge.svg'

// ___________________________________________________________________

const MarqueeProps = {
  gradient: false,
  speed: 30,
}

const Nft: React.FC = () => {
  return (
    <S.Nft>
      <Section border={true} pb={0}>
        <Box sx={{ mb: [6, 7], width: ['100%', '75%', '33%'] }}>
          <Heading
            as="h3"
            className="text--lg"
            sx={{ borderBottom: theme.border, mb: 3, pb: 1 }}
          >
            What are NFTs?
          </Heading>
        </Box>
        <Flex sx={{ justifyContent: 'flex-start' }}>
          <Box px={['5%', '2%', '15%']}>
            <S.FrameBox>
              <Box className="frame">
                <Heading as="h2" className="text--lg">
                  <Text sx={{ fontWeight: 600 }}>Non-Fungible tokens</Text> are
                  digital assets stored on the blockchain where all transactions
                  are transparent and reliable providing proof of ownership.
                </Heading>
              </Box>
            </S.FrameBox>
          </Box>
        </Flex>
      </Section>

      <Flex
          className="nft-badge"
          sx={{
            justifyContent: 'center',
            mt: [1, `calc(${theme.space[4]} * -1)`],
            position: 'relative',
            overflow: 'visible',
            zIndex: 2,
          }}
        >
          <Marquee {...MarqueeProps} direction="right">
            <Box sx={{ pl: '10vw' }} className="nft-badge__wrap">
              <NftBadge />
            </Box>
          </Marquee>
        </Flex>

      <Section pt={0} overflow="hidden">
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            mt: [6, 0, `calc(${theme.space[5]} * -3)`],
          }}
        >
          <Flex sx={{ flex: 1, mr: [5, 5, 8], alignItems: 'flex-end' }}>
            <Text className="text--sm">
              A one-of-a-kind painting is non-fungible, allowing artists to
              generate a limited number of{' '}
              <Text sx={{ fontWeight: 600 }}>NFTs</Text>—like real life prints.
            </Text>
          </Flex>

          <Flex
            sx={{
              flex: 1,
              justifyContent: ['space-between', 'flex-end'],
              alignItems: 'flex-end',
            }}
          >
            <Box sx={{ maxWidth: '275px', width: '100%' }}>
              <Text className="text--xs">
                <Text sx={{ fontWeight: 600 }}>NFTs</Text> are key to simplyfing
                transactions and creating new markets everywhere.
              </Text>
            </Box>
            <Box sx={{ position: 'relative', top: 5 }}>
              <Keybox />
            </Box>
          </Flex>
        </Flex>
      </Section>
    </S.Nft>
  )
}

export default Nft
