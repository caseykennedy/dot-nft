// WhyNft

// ___________________________________________________________________

import * as React from 'react'
import Tabs from 'react-responsive-tabs'
import 'react-responsive-tabs/styles.css'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import FindYourDomain from '../../components/FindYourDomain'

// SVGs
import WhyNftGlobe from '../../../static/why-nft.svg'
import MyAssets from '../../../static/power.svg'
import CheckGlobe from '../../../static/check-globe.svg'
import ProductNft from '../../../static/product-dot-nft.svg'
import MyAssetsNft from '../../../static/myassets-dot-nft.svg'
import PriorityAccess from '../../../static/priority-access.svg'
import SecureIdentity from '../../../static/secure-identity.svg'

// ___________________________________________________________________

const Hero: React.FC = () => {
  return (
    <Section>
      <Flex sx={{ flexDirection: ['column', 'row'] }}>
        <Flex
          sx={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 'auto',
          }}
        >
          <Heading mb={4} className="text--sm">
            Why .nft?
          </Heading>

          <Heading as="h1" className="text--lg">
            Expand your reach, connect, create and streamline your world.
          </Heading>
        </Flex>
        <Flex sx={{ flex: 1, justifyContent: 'flex-end' }}>
          <Box
            sx={{
              mt: [6, 0],
              pl: [0, 6, 9],
              width: '100%',
            }}
          >
            <WhyNftGlobe />
          </Box>
        </Flex>
      </Flex>
    </Section>
  )
}

const SecuritySection: React.FC = () => {
  function getTabs() {
    return tabsData.map((tab, index) => ({
      title: tab.name,
      getContent: () => tab.biography,
      /* Optional parameters */
      key: index,
      tabClassName: 'tab',
      panelClassName: 'panel',
    }))
  }
  const tabProps = {
    transformWidth: 500,
    transform: true,
    showInkBar: false,
    tabsWrapperClass: 'tabs-wrapper',
  }
  return (
    <Section bg="secondary" border={true}>
      <Flex className="section__row">
        <Box sx={{ flex: 1, width: '100%' }}>
          <Text as="p" className="text--sm">
            <strong>
              Harness the power of a decentralized domain name with .nft
            </strong>{' '}
            to identify and protect your NFT’s— for creators, collectors, and
            brands alike.
          </Text>
          <Box mt={theme.gutter.vertical}>
            <Tabs items={getTabs()} {...tabProps} />
          </Box>
        </Box>

        <Flex className="section__sticky">
          <Box className="figure">
            <MyAssets />
          </Box>
          <Box mt={[0, 4]} className="figure">
            <MyAssetsNft />
          </Box>
        </Flex>
      </Flex>

      <Box />
    </Section>
  )
}

const BrandSection: React.FC = () => {
  return (
    <Section bg="tertiary" border={true}>
      <Flex className="section__row">
        <Box sx={{ flex: 1 }}>
          <Heading
            as="h3"
            className="text--lg"
            sx={{ borderBottom: '1px solid gray', mb: 3, pb: 3 }}
          >
            Build a brand
            <br />
            with your <strong>.nft</strong>
          </Heading>

          <Text as="p" mb={theme.gutter.vertical} className="text--sm">
            <strong>
              Whether you’re an existing brand or an emerging venture, embrace
              the benefits of blockchain
            </strong>{' '}
            to create new and innovative products, experiences and activations.
            Make your mark on the new generation of the internet.
          </Text>

          <Text as="p" mb={4}>
            <strong>
              .nft TLD names reflect innovative new technologies and
              opportunities to expand your brand + products while engaging new
              audiences.
            </strong>
          </Text>
          <Text as="p">
            Offer special benefits to customers, expand engagement products,
            create limited editions or methods of verifying authenticity of your
            products.
          </Text>
        </Box>

        <Flex className="section__sticky">
          <Box className="figure">
            <CheckGlobe />
          </Box>
          <Box mt={[0, 4]} className="figure">
            <ProductNft />
          </Box>
        </Flex>
      </Flex>

      <Box />
    </Section>
  )
}

const IdentitySection: React.FC = () => {
  return (
    <Section bg="gray" border={true}>
      <Flex className="section__row">
        <Box sx={{ flex: 1 }}>
          <Heading
            as="h3"
            className="text--lg"
            sx={{ borderBottom: '1px solid gray', mb: 3, pb: 3 }}
          >
            Secure
            <br />
            your identity.
          </Heading>

          <Text as="p" mb={theme.gutter.vertical} className="text--sm">
            Easily identify your NFT content and work on the internet— expand your reach with
            .nft
          </Text>

          <Text as="p">
            Together with industry-leading registrar and blockchain experts,
            we’re creating a safe space for brands to secure their trademarks,
            for creators to connect with their audiences, and businesses to
            expand their goods and services. Welcome.
          </Text>
        </Box>

        <Flex className="section__sticky">
          <Box className="figure">
            <SecureIdentity />
          </Box>
          <Box mt={[0, 4]} className="figure">
            <PriorityAccess />
          </Box>
        </Flex>
      </Flex>

      <Box />
    </Section>
  )
}

const WhyNft: React.FC = () => {
  return (
    <S.WhyNft>
      <Hero />
      <SecuritySection />
      <BrandSection />
      <IdentitySection />
      <FindYourDomain />
    </S.WhyNft>
  )
}

export default WhyNft

// ___________________________________________________________________

const tabsData = [
  {
    name: 'Web 3.0',
    biography: (
      <>
        <Text as="p" mb={4} className="text--sm">
          Supports revolutionary new ways to conduct transactions using
          Handshake, the decentralized, permissionless blockchain naming
          protocol.
        </Text>
        <Text as="p" className="text--sm">
          Just like conventional names, you can redirect, create a decentralized
          profile or deploy a website with your name.
        </Text>
      </>
    ),
  },
  {
    name: 'Identity',
    biography: (
      <Text as="p" className="text--sm">
        Powerful, concise names that extend people’s online identity, their
        digital assets, and so much more…
      </Text>
    ),
  },
  {
    name: 'Validity',
    biography: (
      <Text as="p" className="text--sm">
        Delivers confidence to customers that you are a NFT creator or
        enthusiast.
      </Text>
    ),
  },
  {
    name: 'Security',
    biography: (
      <>
        <Text as="p" mb={4} className="text--sm">
          Built-in assurance and trust.
        </Text>
        <Text as="p" className="text--sm">
          A .nft domain brings protection from nefarious criminal activities to
          those who need it most.
        </Text>
      </>
    ),
  },
]
