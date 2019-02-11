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
import CourseItem from '../components/CourseItem';
import config from '../config';

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
const SkillItem = styled.li`
  
`;

const AboutPage = ({ location, data }) => {
  const { aboutText } = data.site.siteMetadata
  const image = data.file.childImageSharp.fluid
  const works = data.Experience.edges;
  const courses = data.Courses.edges;

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
          <Row>
            <Col>
              <AboutTitle>Education</AboutTitle>
              <Lead>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis repudiandae ducimus odio sit quibusdam numquam consequatur nam tempore, optio a nesciunt, cupiditate, tenetur aut reprehenderit ex, impedit earum quo pariatur.</Lead>
            </Col>
          </Row>
          <Row>
            <Col>
              <AboutTitle>Courses</AboutTitle>
            </Col>
          </Row>
          <Row>
            {
              courses.map((course,index) => <CourseItem key={index} {...course} />)
            }
          </Row>
          <Row>
            <Col>
              <AboutTitle>Skills</AboutTitle>
              <AboutListWrapper>
              {
                config.skills.map((skill, index) => <SkillItem key={index}>{skill}</SkillItem>)
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
  query ExperienceQuery {
    site {
      siteMetadata {
        aboutText
      }
    }

    Experience: allMarkdownRemark(
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

    Courses: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/courses/" } }) {
      edges {
        node {
          frontmatter {
            teacher
            name
            place
            type
            date
          }
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
