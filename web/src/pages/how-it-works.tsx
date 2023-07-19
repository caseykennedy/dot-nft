// How It Works page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import HowItWorks from '../templates/HowItWorks'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const HowItWorksPage = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/how-it-works`} title={`How It Works | ${site.titleShort}`} />
      <HowItWorks />
    </>
  )
}

export default HowItWorksPage
