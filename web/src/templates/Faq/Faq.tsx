// Faq View

// ___________________________________________________________________

import * as React from 'react'
import { lighten } from 'polished'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import Accordion from '../../components/Accordion'
import BlockContent from '../../components/BlockContent'

// Data
import useFaqs from '../../hooks/useFaqs'

// ___________________________________________________________________

const Faq: React.FC = () => {
  const data = useFaqs()
  return (
    <S.Faq>
      <Section>
        <Flex className="inner">
          <Box className="page-title">
            <Heading as="h1" mb={3} className="text--sm">
              Frequently
              <br />
              Asked Questions
            </Heading>
          </Box>

          <Box sx={{ flex: [1, 2] }}>
            {data.faqs.map((faq, key) => (
              <Accordion
                {...accordionProps}
                title={`${faq.question}`}
                key={key}
              >
                <Box px={theme.gutter.axis} pb={theme.gutter.axis}>
                  <Text sx={{ fontSize: [2, 3] }}>
                    <BlockContent blocks={faq._rawAnswer || []} />
                  </Text>
                </Box>
              </Accordion>
            ))}
          </Box>
        </Flex>
      </Section>
    </S.Faq>
  )
}

export default Faq

// ___________________________________________________________________

const accordionProps = {
  bg: lighten(0.1, theme.colors.tertiary),
  color: theme.colors.text,
  fontSize: [3, 4],
}
