import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { ProjectWrapper, ProjectInner } from '../components/Layout/Framework'
import ProjectItem from '../components/styles/ProjectItem'
import { graphql } from 'gatsby'

const WorksWrapper = styled(ProjectWrapper)`
  padding-top: 4em;
  padding-bottom: 4em;
`

const Works = ({ data, location }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout pathname={location.pathname}>
      <WorksWrapper>
        <ProjectInner>
          <Fade cascade>
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </Fade>
        </ProjectInner>
      </WorksWrapper>
    </Layout>
  )
}

export const WorksPageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___order] }) {
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

export default Works
