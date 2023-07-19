// Why choose NFTs?

// ___________________________________________________________________

import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'
import Swiper from 'react-id-swiper'

// Theme + ui
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text, Button, Grid } from 'theme-ui'

// Components
import Section from '../../../components/Section'

// SVGs
import StepIntoFuture from '../../../../static/step-into-future.svg'
import Cube from '../../../../static/cube.svg'
import Heart from '../../../../static/heart.svg'
import Shield from '../../../../static/shield.svg'
import Verify from '../../../../static/verify.svg'

// ___________________________________________________________________

const CardSlider: React.FC = () => {
  return (
    <Flex sx={{ flexDirection: ['row'], width: '100%' }}>
      <Grid columns={[1, 2]} gap={4} sx={{ width: '100%' }}>
        {data.map((card, key) => (
          <Flex
            key={key}
            sx={{
              flex: 1,
              bg: 'rgb(1, 14, 28, 0.5)',
              // border: theme.border,
              borderColor: theme.colors.gray,
              borderRadius: theme.borderRadius,
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: [4, 4, 5],
            }}
          >
            <Flex sx={{ flex: 1 }}>
              {/* <Box pr={4}>
                <Text as="p">{card.order})</Text>
              </Box> */}
              <Text sx={{ fontSize: [3, 2, 3], pr: [5, 0, 4], pl: [1, 0, 0] }}>{card.title}</Text>
            </Flex>
            <Flex className="card-figure">{card.figure}</Flex>
          </Flex>
        ))}
      </Grid>
    </Flex>
  )
}

const WhyChooseNft: React.FC = () => {
  return (
    <S.WhyChooseNft>
      <Section bg="transparent" color="white" overflow="hidden">
        <Flex sx={{ flexDirection: ['column'] }}>
          <Flex
            sx={{
              alignItems: ['flex-start'],
              flexDirection: ['column', 'row'],
              mb: 6,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Heading
                as="h3"
                className="text--lg"
                sx={{ borderBottom: '1px solid white', mb: 2, pb: 1 }}
              >
                Why choose a<br />
                <strong>.nft</strong> domain?
              </Heading>
              <Text as="p" className="text--sm">
                For those who demand leading protection mechanisms—from
                registered trademark holders to sole individuals—we care.
              </Text>
              <Box my={6}>
                <Button variant="secondary">
                  <Link to={`/why-nft`}>Tell me more {'>'}</Link>
                </Button>
              </Box>
            </Box>
            <Flex
              sx={{
                flex: [1, 2, 2],
                flexDirection: ['column'],
                pl: [0, 6, 8],
                width: '100%',
              }}
            >
              <Text as="p" mb={4}>
                Use your domain to:
              </Text>
              <CardSlider />
            </Flex>
          </Flex>
        </Flex>
      </Section>

      <Section bg="transparent" color="white" pt={0}>
        <Flex
          sx={{
            flexDirection: ['column', 'row-reverse'],
            alignItems: ['flex-start', 'center', 'center'],
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Heading
              as="h3"
              className="text--lg"
              sx={{ borderBottom: '1px solid white', mb: 2, pb: 1 }}
            >
              Live in the
              <br />
              <strong>.nft</strong> realm.
            </Heading>
            <Text as="p" mb={4} className="text--sm">
              The .nft TLD is a blockchain decentralized domain and the perfect
              name for identifying and sharing all things NFT.
            </Text>
            <Text as="p" className="text--sm">
              Create real-world value today and <Link to="/search">pre-register</Link>{' '}
              your name.
            </Text>
            <Box mt={6}>
              <Button variant="secondary">
                <Link to={`/how-it-works`}>How does it work?</Link>
              </Button>
            </Box>
          </Box>
          <Flex
            sx={{
              flex: 1,
              justifyContent: 'flex-end',
              pt: [6, 0],
              pr: [0, 6, 10],
              pl: [5, 0, 0],
              mx: 'auto',
              width: '100%',
            }}
          >
            <StepIntoFuture />
          </Flex>
        </Flex>
      </Section>
    </S.WhyChooseNft>
  )
}

export default WhyChooseNft

// ___________________________________________________________________

const data = [
  {
    order: '1',
    title: 'Authenticate and protect your creations, assets and collections.',
    figure: <Shield />,
  },
  {
    order: '2',
    title: 'Securely buy, sell, and share your NFTs.',
    figure: <Heart />,
  },
  {
    order: '3',
    title: 'Employ personalized proof-of-ownership verification.',
    figure: <Verify />,
  },
  {
    order: '4',
    title: 'Use to login to and interact with decentralized apps.',
    figure: <Cube />,
  },
]
