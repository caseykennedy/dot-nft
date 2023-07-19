// Policies page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import Policies from '../templates/Policies'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const PoliciesPage = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/policies`} title={`Policies | ${site.titleShort}`} />
      <Policies />
    </>
  )
}

export default PoliciesPage
