// Nft Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Nft = styled(Box)``

export const FrameBox = styled(Flex)`
  margin: 0 auto;
  position: relative;
  z-index: 1;

  .nft-badge {
    display: flex;
    justify-content: center;
    margin-top: calc(${theme.space[4]} * -1);
    position: relative;
    z-index: 2;

    &__wrap {
      svg {
        width: 50%;

        @media ${theme.mq.tablet} {
          width: 120px;
        }
      }
    }
  }

  .frame {
    background: ${theme.colors.background};
    border: ${theme.border};
    padding: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      padding: ${theme.space[5]};
    }
  }

  &::after {
    background: ${theme.colors.tertiary};
    border: ${theme.border};
    content: '';

    position: absolute;
    top: ${theme.space[4]};
    right: ${theme.space[4]};

    height: 100%;
    width: 100%;
    z-index: -1;

    /* @media ${theme.mq.tablet} {
      top: ${theme.space[5]};
      right: ${theme.space[5]};
    } */
  }
`
