// HowItWorks Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const HowItWorks = styled(Box)``

export const When = styled(Flex)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media ${theme.mq.tablet} {
    flex-direction: row;
  }

  @media ${theme.mq.desktop} {
    align-items: center;
  }

  .dates {
    &-outer {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;

      background: ${theme.colors.background};
      position: relative;
      width: 100%;

      @media ${theme.mq.tablet} {
        flex: 2;
      }

      &::after {
        background: ${theme.colors.midgray};
        content: '';
        position: relative;
        height: ${theme.space[4]};
        width: 90%;
      }
    }

    &-table {
      display: flex;
      flex-direction: column;

      border: ${theme.border};
      width: 100%;

      &__row {
        display: flex;

        background: ${theme.colors.background};
        border-bottom: ${theme.border};
        width: 100%;

        &:last-child {
          border-bottom: none;
        }
      }

      &__cell {
        display: flex;
        flex: 1;
        align-items: center;
        border-left: ${theme.border};
        padding: ${theme.space[4]};

        &:first-child {
          border-left: none;
        }

        &--date {
          background: ${theme.colors.gray};
          border-top: ${theme.border};
          border-left: none;

          @media ${theme.mq.tablet} {
            border-top: none;
            border-left: ${theme.border};
          }
        }
      }
    }
  }
`
