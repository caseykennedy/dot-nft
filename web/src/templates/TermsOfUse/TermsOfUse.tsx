// TermsOfUse View

// ___________________________________________________________________

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading } from 'theme-ui'

// Components
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'

// ___________________________________________________________________

type QueryShape = {
  termsOfUse: {
    nodes: {
      _rawContent: string
    }[]
  }
}

const TermsOfUse: React.FC = () => {
  const data = useStaticQuery<QueryShape>(query)
  const pageContext = data.termsOfUse.nodes[0]
  return (
    <S.TermsOfUse>
      <Section>
        <Flex className="inner">
          <Box className="page-title">
            <Heading as="h1" mb={3} className="text--sm">
              Terms of Use
            </Heading>
          </Box>

          <Box sx={{ flex: [1, 2] }}>
            <BlockContent blocks={pageContext._rawContent || []} />
          </Box>
        </Flex>
      </Section>
    </S.TermsOfUse>
  )
}

export default TermsOfUse

// ___________________________________________________________________

const query = graphql`
  query TermsOfUseQuery {
    termsOfUse: allSanityTermsOfUse {
      nodes {
        _rawContent
      }
    }
  }
`
