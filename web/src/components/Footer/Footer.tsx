// Footer:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text } from 'theme-ui'
import HandshakeBadge from '../HandshakeBadge'

// ___________________________________________________________________

const getYear = () => new Date().getFullYear()
const mailTo = 'mailto:info@dotnft.com'

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Flex px={theme.gutter.axis} className="footer__inner">
        <Flex className="utilities">
          <Flex className="callouts">
            <Box sx={{ flex: 1 }}>
              <Text>Resellers</Text>
              <br />
              <a
                href={`${mailTo}?subject=dotNFT Resellers`}
                className="text--link"
              >
                Be a registrar {'>'}
              </a>
            </Box>

            <Box sx={{ flex: 1, mt: [4, 0], pl: [0, 5] }}>
              <Text>Partners</Text>
              <br />
              <a
                href={`${mailTo}?subject=dotNFT Partners`}
                className="text--link"
              >
                Reach out {'>'}
              </a>
            </Box>
          </Flex>

          <Flex className="handshake">
            <HandshakeBadge fill="white" />
          </Flex>
        </Flex>

        <Flex className="legal">
          <Text>&copy;{getYear()} .nft</Text>
          <Flex>
            <Text mr={3}>
              <Link to={`/privacy-policy`}>Privacy</Link>
            </Text>
            <Link to={`/terms-of-use`}>Terms</Link>
          </Flex>
        </Flex>
      </Flex>
    </S.Footer>
  )
}

export default Footer
