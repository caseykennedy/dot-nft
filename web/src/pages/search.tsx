// Search page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import Search from '../templates/Search'

// Hooks
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const SearchPage = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/search`} title={`Search | ${site.titleShort}`} />
      <Search />
    </>
  )
}

export default SearchPage
