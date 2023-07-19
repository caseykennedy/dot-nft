// CheckoutIp

// ___________________________________________________________________

import React, { useEffect, useRef } from 'react'
import Script from 'react-inline-script'
import { Box } from 'theme-ui'

// ___________________________________________________________________

const CheckoutIp = () => {
  const checkoutIpRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    const theUrl =
      'https://esb.encircapartners.com/api/encirca/60748fe315b6d24cbeead338/widgets/checkout'
    script.src = `${theUrl}${
      theUrl.indexOf('?') >= 0 ? '&' : '?'
    }ref=${encodeURIComponent(window.location.href)}`
    script.async = true

    setTimeout(() => {
      checkoutIpRef.current && checkoutIpRef.current.appendChild(script)
    }, 1)

    return () => {
      checkoutIpRef.current && checkoutIpRef.current.removeChild(script)
    }
  }, [])

  return (
    <>
      <Script type="text/javascript" id="enc-checkout-embed" />
      <Box mb={6} ref={checkoutIpRef} />
    </>
  )
}

export default CheckoutIp
