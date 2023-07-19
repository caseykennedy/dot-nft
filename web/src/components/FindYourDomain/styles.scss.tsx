// Nft Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import { Gradient } from '../../styles/transitions'

// ___________________________________________________________________

export const FindYourDomain = styled(Box)`
  background: rgb(3, 51, 101);
  background: linear-gradient(
    90deg,
    rgba(3, 51, 101, 1) 0%,
    rgba(4, 41, 80, 1) 38%,
    rgba(1, 17, 33, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${Gradient} 20s ease infinite;
`
