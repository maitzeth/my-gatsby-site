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

import BtnExternal from '../components/BtnExternal'

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

const AboutListItem = styled.li`
  margin: 0.3em 0;
`

const AboutText = styled(Lead)`
  span {
    font-weight: bold;
  }
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
                {works.map((work, index) => {
                  const { date, url, role, job } = work.node.frontmatter
                  const { html } = work.node

                  return (
                    <AboutListItem key={index}>
                      <AboutText>
                        <span>{role}</span> - ({date}) -{' '}
                        <BtnExternal href={url}>{job}</BtnExternal>
                      </AboutText>
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                    </AboutListItem>
                  )
                })}
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

    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/works/" } }) {
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
