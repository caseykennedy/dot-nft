// Faq page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import Faq from '../templates/Faq'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const FaqPage = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/faq`} title={`Faq | ${site.titleShort}`} />
      <Faq />
    </>
  )
}

export default FaqPage
