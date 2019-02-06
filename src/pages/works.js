import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

import { ProjectWrapper, ProjectInner } from '../components/Layout/Framework'
import ProjectItem from '../components/ProjectItem';


const WorksWrapper = styled(ProjectWrapper)`
  padding-top: 4em;
  padding-bottom: 4em;
`;

const Works = ({ data }) => {
  const projects = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <WorksWrapper>
        <ProjectInner>
          {
            projects.map((project, index) => <ProjectItem key={index} {...project} />)
          }
        </ProjectInner>
      </WorksWrapper>
    </Layout>
  )
}

export const WorksPageQuery = graphql`
  query {

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

export default Works