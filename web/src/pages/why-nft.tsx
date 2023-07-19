// Why .nft page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import WhyNft from '../templates/WhyNft'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const WhyNftPage = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/why-nft`} title={`Why .nft | ${site.titleShort}`} />
      <WhyNft />
    </>
  )
}

export default WhyNftPage
