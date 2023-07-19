// useFaqs hook

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useFaqs = () => {
  const data = useStaticQuery<FaqsShape>(graphql`
    query FaqsQuery {
      faqs: allSanityFaqs {
        edges {
          node {
            faqs {
              _rawAnswer
              question
            }
          }
        }
      }
    }
  `)

  return data.faqs.edges[0].node
}

export default useFaqs
