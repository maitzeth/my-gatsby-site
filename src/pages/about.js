import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'

import {
  Container,
  Row,
  Col,
  Lead,
  Title,
} from '../components/Layout/Framework'


import WorkItem from '../components/WorkItem';

const AboutWrapper = styled.main`
  padding-top: 5em;
  padding-bottom: 5em;
`

const PageTitle = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  text-transform: uppercase;
  color: ${props => props.theme.secondaryColor};
`

const AboutContent = styled(Row)`
  margin-bottom: 1em;
`

const AboutTitle = styled(Title)`
  text-align: left;
  margin-bottom: 1.5em;
`

const AboutListWrapper = styled.ul`
  padding: 0;
`


const AboutPage = ({ location, data }) => {
  const { aboutText } = data.site.siteMetadata
  const image = data.file.childImageSharp.fluid
  const works = data.allMarkdownRemark.edges

  return (
    <Layout pathname={location.pathname}>
      <AboutWrapper>
        <Container>
          <AboutContent align="center">
            <Col size="8">
              <PageTitle>About</PageTitle>
              <Lead>{aboutText}</Lead>
            </Col>
            <Col size="4">
              <Img fluid={image} />
            </Col>
          </AboutContent>
          <Row>
            <Col>
              <AboutTitle>Experience</AboutTitle>
              <AboutListWrapper>
                {
                  works.map((work, index) => <WorkItem key={index} {...work} />)
                }
              </AboutListWrapper>
            </Col>
          </Row>
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

    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: DESC },
      filter: { fileAbsolutePath: { regex: "/works/" } }
    ) {
      edges {
        node {
          frontmatter {
            role
            date
            url
            job
          }
          html
        }
      }
    }

    file(relativePath: { eq: "about-me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
