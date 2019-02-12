import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeaderSection from '../components/HeaderSection'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'

const IndexPage = ({ data, location }) => {
  const { aboutText, social } = data.site.siteMetadata
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout pathname={location.pathname}>
      <HeaderSection />
      <AboutSection aboutText={aboutText} social={social} />
      <ProjectSection projects={projects} />
    </Layout>
  )
}

export const IndexPageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        aboutText
        social {
          id
          icon
          title
          url
        }
      }
    }

    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            slug

            cover {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            code {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
