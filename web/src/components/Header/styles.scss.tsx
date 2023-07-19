// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'

// ___________________________________________________________________

export const Header = styled(Box)`
  background: ${theme.colors.white};
  border-bottom: ${theme.border};
  box-shadow: ${theme.shadow};
  overflow: visible;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;

  a {
    color: ${theme.colors.black};
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow: visible;
    margin: 0 auto;
    max-width: ${theme.maxWidth};
    height: ${theme.headerHeight};
    width: 100%;
  }
`

export const Menu = styled(Flex)`
  align-items: center;
  justify-content: flex-end;

  .symbol {
    margin-left: ${theme.space[5]};
  }
`

export const Logo = styled(Flex)`
  display: flex;
  align-items: center;

  .wordmark {
    font-family: ${theme.fonts.display};
    font-size: ${theme.fontSizes[4]};
    text-decoration: none;
    position: relative;
  }

  .superscript {
    font-size: ${theme.fontSizes[1]};
    white-space: nowrap;
    position: relative;
    top: -3px;
    left: 10px;
    /* display: none;

    @media ${theme.mq.tablet} {
      display: inherit;
    } */
  }
`

export const Toggle = styled.div`
  display: flex;
  align-items: flex-end;
  box-sizing: content-box;

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  position: relative;
  z-index: 9999;

  @media (min-width: 840px) {
    display: none;
  }
`
