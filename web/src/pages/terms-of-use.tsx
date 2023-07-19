// Terms Of Use page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import TermsOfUse from '../templates/TermsOfUse'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const PrivacyPolicyPage = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/terms-of-use`} title={`Terms of Use | ${site.titleShort}`} />
      <TermsOfUse />
    </>
  )
}

export default PrivacyPolicyPage
