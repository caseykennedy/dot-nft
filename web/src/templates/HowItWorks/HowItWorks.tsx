// How It Works View

// ___________________________________________________________________

import * as React from 'react'
import Script from 'react-inline-script'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Heading, Text, Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'
import FindYourDomain from '../../components/FindYourDomain'

import Tokenshapes from '../../../static/tokenshapes.svg'

// ___________________________________________________________________

const WhenSection: React.FC = () => {
  return (
    <Section border={true}>
      <S.When>
        <Box sx={{ flex: 1, pr: [0, 7] }}>
          <Heading
            as="h3"
            className="text--lg"
            sx={{ borderBottom: '1px solid gray', mb: 3, pb: 3 }}
          >
            When can I
            <br />
            get my <strong>.nft</strong>?
          </Heading>
          <Text as="p" mb={7}>
            <strong>
              Start the order process with our exclusive Sunrise registrar,
              EnCirca.
            </strong>{' '}
            Additional registrars around the globe will be offered during
            General Availability.
          </Text>
          <Text as="p">
            <strong>Dates and registration periods:</strong>
          </Text>
        </Box>

        <Flex className="dates-outer">
          <Flex className="dates-table">
            {timelineData.map((item, key) => (
              <Flex className="dates-table__row" key={key}>
                <Flex sx={{ flex: 1.15, flexDirection: ['column', 'row'] }}>
                  <Flex className="dates-table__cell">
                    <Box sx={{ mr: 2, width: '10px' }}>
                      <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="50" r="50" fill={item.color} />
                      </svg>
                    </Box>
                    {item.stage}
                  </Flex>
                  <Flex className="dates-table__cell  dates-table__cell--date">
                    {item.date}
                  </Flex>
                </Flex>
                <Flex className="dates-table__cell">{item.description}</Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </S.When>
    </Section>
  )
}

const ProcessSection: React.FC = () => {
  return (
    <Section bg="tertiary" border={true}>
      <Flex sx={{ flexDirection: ['column', 'row'] }}>
        <Box sx={{ flex: 1 }}>
          <Heading
            sx={{
              fontWeight: 500,
              mb: theme.gutter.axis,
            }}
            className="text--sm"
          >
            Our registration process reflects
            <br />
            these values in the roll-out:
          </Heading>
        </Box>
        <Box sx={{ flex: 1 }}></Box>
      </Flex>

      <Box>
        <Grid columns={[1, 1, 2]} gap={theme.gutter.axis}>
          {processData.map((item, key) => (
            <Flex
              sx={{
                border: theme.border,
                borderRadius: theme.borderRadius,
                p: theme.gutter.axis,
                '&:hover': {
                  bg: 'white',
                },
              }}
              key={key}
            >
              <Text pr={4} className="text--sm">
                {item.step}.
              </Text>
              <Text
                className="text--md"
                dangerouslySetInnerHTML={{ __html: item.process }}
              />
            </Flex>
          ))}
        </Grid>
      </Box>
    </Section>
  )
}

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
            How it works
          </Heading>

          <Heading as="h1" className="text--lg">
            We believe in blockchain technology created to{' '}
            <strong>benefit and protect</strong> the rights of all.
          </Heading>
        </Flex>
        <Box sx={{ flex: 1, mt: [5, 0], pl: [0, 0, 11] }}>
          <Tokenshapes />
        </Box>
      </Flex>
    </Section>
  )
}

const HowItWorks: React.FC = () => {
  return (
    <S.HowItWorks>
      <Hero />
      <ProcessSection />
      <WhenSection />
      <FindYourDomain />
    </S.HowItWorks>
  )
}

export default HowItWorks

// ___________________________________________________________________

const processData = [
  {
    step: 1,
    process:
      '<strong>Pre-Registrations:</strong> Anyone can submit an application for one or more names.  Once the Sunrise period is completed, all available domains will be registered and the owner notified.',
  },
  {
    step: 2,
    process:
      '<strong>Sunrise:</strong>  All trademark and <strong>copyright owners</strong> can protect their intellectual property by submitting their registrations. They will receive priority over all other registration periods ',
  },
  {
    step: 3,
    process:
      '<strong>If more than one application is received</strong> for a string, an auction will occur at the end of the period (see FAQ). ',
  },
  {
    step: 4,
    process:
      'All .nft domain registrations are subject to the Uniform Domain Name Dispute Resolution Policy (UDRP).',
  },
]

const timelineData = [
  {
    stage: 'Sunrise',
    color: theme.colors.green,
    date: 'July 20 — Sep. 1st',
    description:
      'Trademark owners, copyright holders and individuals can submit their names applications.',
  },
  {
    stage: 'Auction',
    color: theme.colors.yellow,
    date: 'Sep. 6th — Sep. 14th',
    description:
      'Sunrise period ends – Any duplicate registrations will be invited to an auction.  Invites will be sent to all applicants with duplicate registrations.',
  },
  {
    stage: 'Early Access',
    color: theme.colors.orange,
    date: 'Sep. 2-8th, 2021',
    description:
      'Register names for an additional fee that declines each day on a first-come first-served basis',
  },
  {
    stage: 'General Availability',
    color: theme.colors.primary,
    date: 'Sep. 9th, 2021',
    description:
      'Names are available for registrations on a first-come first-served basis.',
  },
]
