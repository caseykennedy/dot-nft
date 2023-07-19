// Hero Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Hero = styled(Box)`
  width: 100%;

  .hero {
    &__inner {
      display: flex;
      flex-direction: column;
      box-sizing: content-box;
      margin: 0 auto;
      max-width: ${theme.maxWidth};
    }

    &__row {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;

      @media ${theme.mq.tablet} {
        flex-direction: row;
      }

      .handshake {
        flex: 1;
        display: none;
        justify-content: center;
        width: 100%;

        @media ${theme.mq.tablet} {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
`
