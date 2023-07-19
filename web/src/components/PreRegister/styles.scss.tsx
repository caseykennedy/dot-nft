// PreRegister Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const PreRegister = styled(Box)`
  background: ${theme.colors.gray};

  .decorator {
    display: flex;
    align-items: flex-end;
  }
`
