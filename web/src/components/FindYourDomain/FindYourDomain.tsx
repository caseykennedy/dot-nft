// Find Your Domain

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../Section'
import SubscribeForm from '../SubscribeForm'

import Orb from '../../../static/orb.svg'

// ___________________________________________________________________

const MarqueeProps = {
  gradient: false,
  speed: 30,
}

const FindYourDomain: React.FC = () => {
  return (
    <S.FindYourDomain>
      <Section border={true} color="gray">
        <Flex sx={{ flexDirection: ['column', 'row'] }}>
          <Flex
            sx={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: 'auto',
            }}
          >
            <Text mb={4} className="text--sm">
              Find your domain
            </Text>
            <Heading mb={[6, 0]} className="text--lg">
              Harness the power of personalized domain names to identify and
              manage your NFT’s.
            </Heading>
          </Flex>

          <Flex
            sx={{
              flex: 1,
              alignItems: 'center',
              justifyContent: ['center', 'flex-end'],
            }}
          >
            <Link to={`/search`}>
              <Button>Pre-register Your Name</Button>
            </Link>
          </Flex>
        </Flex>
      </Section>
    </S.FindYourDomain>
  )
}

export default FindYourDomain
