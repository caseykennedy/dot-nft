// Policies Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Policies = styled(Box)`
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

  .policy-list {
    li {
      border-top: ${theme.border};
      list-style: none;

      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${theme.space[4]} 0;

        color: ${theme.colors.text};
        font-size: ${theme.fontSizes[3]};
        text-decoration: none;

        span {
          padding-left: ${theme.space[4]};
          position: relative;
          /* transition: ${theme.transition.all}; */
        }

        &:hover {
          color: ${theme.colors.primary};

          span {
            padding-right: ${theme.space[2]};

            svg {
              fill: ${theme.colors.primary};
            }
          }
        }
      }
    }
  }
`
