// usePolicies hook

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const usePolicies = () => {
  const data = useStaticQuery<PolicyShape>(graphql`
    query SiteSettingsQuery {
      policies: allSanityPolicies {
        edges {
          node {
            policies {
              name
              pdf {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.policies.edges[0].node
}

export default usePolicies
