// PrivacyPolicy Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const TermsOfUse = styled(Box)`
  .inner {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;

    @media ${theme.mq.tablet} {
      flex-direction: row;
    }
  }

  .page-title {
    flex: 1;
    height: fit-content;
    margin-bottom: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      position: sticky;
      top: calc(${theme.headerHeight} + ${theme.space[7]});
    }
  }
`
