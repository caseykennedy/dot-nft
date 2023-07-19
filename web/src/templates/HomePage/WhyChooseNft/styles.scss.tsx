// WhyChooseNft Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import { Gradient } from '../../../styles/transitions'

// ___________________________________________________________________

export const WhyChooseNft = styled(Box)`
  /* box-shadow: inset -20px 0 80px 20px #000000; */

  background: rgb(3, 51, 101);
  background: linear-gradient(
    90deg,
    rgba(3, 51, 101, 1) 0%,
    rgba(4, 41, 80, 1) 38%,
    rgba(1, 17, 33, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${Gradient} 20s ease infinite;

  .card-figure {
    display: flex;
    justify-content: flex-end;
    margin-top: ${theme.space[6]};

    svg {
      max-height: 100px;

      @media ${theme.mq.tablet} {
        max-height: 120px;
      }
    }
  }

  .swiper-container {
    @media ${theme.mq.desktop} {
      overflow: visible;
    }

    .swiper-slide-active {
      /* border-color: ${theme.colors.white}; */
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 99;

    button {
      border: none;
      border-radius: 999px;
      cursor: pointer;
      font-size: ${theme.fontSizes[3]};
      padding: ${theme.space[1]};
      height: 44px;
      width: 44px;
    }
  }
`
