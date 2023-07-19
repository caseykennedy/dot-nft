// Policies View

// ___________________________________________________________________

import * as React from 'react'
import Script from 'react-inline-script'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import Icon from '../../components/Icons'

// Data
import usePolicies from '../../hooks/usePolicies'

// ___________________________________________________________________

const Policies: React.FC = () => {
  const allPolicies = usePolicies()
  return (
    <S.Policies>
      <Section>
        <Flex className="inner">
          <Box className="page-title">
            <Heading as="h1" mb={3} className="text--sm">
              Policies
            </Heading>
          </Box>

          <Box sx={{ flex: [1, 2] }}>
            <Box as="ul" className="policy-list">
              {allPolicies.policies.map((policy, key) => (
                <Text as="li" key={key}>
                  <a
                    href={policy.pdf.asset.url}
                    className="text--link"
                    target="_blank"
                  >
                    {policy.name}
                    <Icon name="pdf" />
                  </a>
                </Text>
              ))}
            </Box>
          </Box>
        </Flex>
      </Section>
    </S.Policies>
  )
}

export default Policies
