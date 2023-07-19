// Privacy Policy page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import PrivacyPolicy from '../templates/PrivacyPolicy'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const PrivacyPolicyPage = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/privacy-policy`} title={`Privacy Policy | ${site.titleShort}`} />
      <PrivacyPolicy />
    </>
  )
}

export default PrivacyPolicyPage
