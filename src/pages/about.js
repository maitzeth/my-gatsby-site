import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Container, Row, Col, Lead, Title } from '../components/Layout/Framework'
import WorkItem from '../components/WorkItem'

const AboutWrapper = styled.main`
  padding-top: 5em;
  padding-bottom: 5em;
`

const PageTitle = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  text-transform: uppercase;
  color: ${props => props.theme.secondaryColor};

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    text-align: center;
  }
`

const AboutContent = styled(Row)`
  margin-bottom: 1em;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    text-align: center;
  }
`

const AboutTitle = styled(Title)`
  text-align: left;
  margin-bottom: 1.5em;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    text-align: center;
    margin: 2em 0;
  }
`

const AboutListWrapper = styled.ul`
  padding: 0;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    margin: 0;
    list-style: none;
  }
`

const SkillItem = styled.li`
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    text-align: center;
  }
`;

const AboutPage = ({ location, data }) => {
  const { aboutText } = data.site.siteMetadata
  const image = data.file.childImageSharp.fluid
  const experiences = data.allContentJson.edges[0].node.experience
  const skills = data.allContentJson.edges[0].node.skills

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
                  experiences.map((experience, index) => <WorkItem key={index} {...experience} />)
                }
              </AboutListWrapper>
            </Col>
          </Row>
          <Row>
            <Col>
              <AboutTitle>Skills & Tools</AboutTitle>
              <AboutListWrapper>
                {
                  skills.map((skill, index) => <SkillItem key={index}>{skill}</SkillItem>)
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
  query AboutPageQuery {
    site {
      siteMetadata {
        aboutText
      }
    }

    file(relativePath: { eq: "about-me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allContentJson {
      edges {
        node {
          experience {
            period {
              from
              to
            }
            role
            url
            place
            description
          }
          
          skills
        }
      }
    }

  }
`

export default AboutPage