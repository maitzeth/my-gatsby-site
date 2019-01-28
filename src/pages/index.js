import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import HeaderSection from '../components/HeaderSection'
import AboutSection from '../components/AboutSection'

const IndexPage = ({ data }) => {

  const { aboutText, social } = data.site.siteMetadata;

  return (
    <Layout>
      <HeaderSection />
      <AboutSection aboutText={aboutText} social={social} />
    </Layout>
  )
}

export const IndexPageQuery = graphql`
  query {
    site {
      siteMetadata {
        aboutText,
        social {
          id
          icon
          title
          url
        }
      }
    }
  }
`

export default IndexPage
