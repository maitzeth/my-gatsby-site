import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { Container, Row, Col, Lead } from '../components/Layout/Framework'

const AboutWrapper = styled.main`
  padding-top: 5em;
  padding-bottom: 5em;
`;

const PageTitle = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  text-transform: uppercase;
  color: ${props => props.theme.secondaryColor}
`;

const AboutContent = styled(Row)`
  margin-bottom: 1em;
`;

const AboutPage = ({location, data}) => {
  const { aboutText } = data.site.siteMetadata;
  const image = data.file.childImageSharp.fluid;
  
  return (
    <Layout pathname={location.pathname}>
      <AboutWrapper>
        <Container>
          <AboutContent align="center">
            <Col size="8">
              <PageTitle>About</PageTitle>
              <Lead>
                { aboutText }
              </Lead>
            </Col>
            <Col size="4">
              <Img fluid={image} />
            </Col>
          </AboutContent>
        </Container>
      </AboutWrapper>
    </Layout>
  )
}

export const AboutPageQuery = graphql`
  query {
    site {
      siteMetadata {
        aboutText
      }
    }


    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`;

export default AboutPage
