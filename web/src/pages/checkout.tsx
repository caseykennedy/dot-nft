// Checkout page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import Checkout from '../templates/Checkout'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const CheckoutPage = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/checkout`} title={`Checkout | ${site.titleShort}`} />
      <Checkout />
    </>
  )
}

export default CheckoutPage
