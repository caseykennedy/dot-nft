// PrivacyPolicy View

// ___________________________________________________________________

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'

// ___________________________________________________________________

type QueryShape = {
  privacyPolicy: {
    nodes: {
      _rawContent: string
    }[]
  }
}

const PrivacyPolicy: React.FC = () => {
  const data = useStaticQuery<QueryShape>(query)
  const pageContext = data.privacyPolicy.nodes[0]
  return (
    <S.PrivacyPolicy>
      <Section>
        <Flex className="inner">
          <Box className="page-title">
            <Heading as="h1" mb={3} className="text--sm">
              Privacy Policy
            </Heading>
          </Box>

          <Box sx={{ flex: [1, 2] }}>
            <BlockContent blocks={pageContext._rawContent || []} />
          </Box>
        </Flex>
      </Section>
    </S.PrivacyPolicy>
  )
}

export default PrivacyPolicy

// ___________________________________________________________________

const query = graphql`
  query PrivacyPolicyQuery {
    privacyPolicy: allSanityPrivacyPolicy {
      nodes {
        _rawContent
      }
    }
  }
`
