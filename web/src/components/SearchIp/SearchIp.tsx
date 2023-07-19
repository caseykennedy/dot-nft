// SearchIp

// ___________________________________________________________________

import React, { useEffect, useRef } from 'react'
import Script from 'react-inline-script'
import { Box } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const isBrowser = typeof window !== 'undefined'

const SearchIp = () => {
  const searchIpRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    const theUrl =
      'https://esb.encircapartners.com/api/encirca/60748fe315b6d24cbeead338/widgets/checkDomain'
    script.src = `${theUrl}${
      theUrl.indexOf('?') >= 0 ? '&' : '?'
    }ref=${encodeURIComponent(window.location.href)}`
    script.async = true

    setTimeout(() => {
      searchIpRef.current && searchIpRef.current.appendChild(script)
    }, 1)

    return () => {
      searchIpRef.current && searchIpRef.current.removeChild(script)
    }
  }, [])

  return (
    <>
      <Script type="text/javascript" id="enc-checkDomain-embed" />
      <Box ref={searchIpRef} />
    </>
  )
}

export default SearchIp
