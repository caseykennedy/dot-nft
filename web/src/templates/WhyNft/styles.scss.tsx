// Faq Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const WhyNft = styled(Box)`
  .section {
    &__row {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;

      @media ${theme.mq.tablet} {
        align-items: flex-start;
        flex-direction: row;
        padding-top: 0;
      }
    }

    &__sticky {
      flex: 1;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      position: sticky;
      top: calc(${theme.headerHeight} + ${theme.space[5]});

      @media ${theme.mq.tablet} {
        justify-content: flex-end;
      }

      @media ${theme.mq.desktop} {
        position: relative;
        top: 0;
      }

      svg {
        padding: 0 ${theme.space[5]};

        @media ${theme.mq.tablet} {
          padding: 0 ${theme.space[4]};
        }
      }
    }
  }

  .figure {
    padding-top: ${theme.space[5]};
    max-width: 480px;
    width: 100%;

    @media ${theme.mq.tablet} {
      padding-left: ${theme.space[7]};
      padding-top: 0;
    }
  }

  .RRT__container {
    .panel {
      background-color: ${theme.colors.gray};
      border: ${theme.border};
      padding: ${theme.space[4]};

      @media ${theme.mq.tablet} {
        padding: ${theme.space[5]};
      }
    }

    .tab {
      background-color: ${theme.colors.secondary};
      border-color: ${theme.colors.midgray};
      padding: ${theme.space[4]} ${theme.space[5]};

      &.RRT__tab--selected {
        background-color: ${theme.colors.gray};
        border-bottom: none;
      }
    }

    .RRT__inkbar-wrapper {
      .RRT__inkbar {
        background-color: ${theme.colors.primary};
      }
    }
  }
`
