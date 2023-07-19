// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import Typist from 'react-typist'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from 'theme-ui'

// Components
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import Modal from '../Modal'

// ___________________________________________________________________

const cursorProps = {
  show: false,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
}

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)
  return (
    <>
      <S.Header px={theme.gutter.axis}>
        <Flex className="header-inner">
          <Link to="/" className="logo" aria-label="dotNFT, back to home">
            <S.Logo onClick={() => setNavOpen(false)}>
              <Text className="wordmark" aria-label="dotNFT">
                <Text as="span" color="primary" sx={{ fontSize: 4 }}>
                  .
                </Text>
                nft
              </Text>

              <Typist cursor={cursorProps}>
                <Text className="superscript" aria-label="dotNFT">
                  For <Text sx={{ fontWeight: 600 }}>NFT</Text> domains
                </Text>
              </Typist>
            </S.Logo>
          </Link>

          <S.Menu>
            <Navigation />

            <S.Toggle onClick={toggleMenu} aria-label="toggle menu">
              <HamburgerMenu
                isOpen={!isNavOpen ? false : true}
                menuClicked={toggleMenu}
                width={36}
                height={12}
                strokeWidth={2}
                rotate={0}
                color={theme.colors.black}
                borderRadius={0}
                animationDuration={0.333}
              />
            </S.Toggle>
          </S.Menu>
        </Flex>
      </S.Header>

      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>
    </>
  )
}

export default Header
