import React, { Component } from 'react';
import { graphql } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from '../components/Layout';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import Projects from '../components/Projects';

class IndexPage extends Component {
	render() {
    const { title } = this.props.data.site.siteMetadata;
    const { social } = this.props.data.socialJson;
    const projectEdges = this.props.data.allMarkdownRemark.edges;

		return (
      <PageTransition>
  		  <Layout>
  		    <Header title={title} />
          <AboutSection social={social} />
          <Projects projectEdges={projectEdges} />
  		  </Layout>
      </PageTransition>
		)
	}
}


export const query = graphql`
  query HomePageQueries {
    site {
      siteMetadata {
        title
      }
    }

    socialJson {
      social {
        url
        name
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
            client
            cover {
              childImageSharp {
                fluid(maxWidth: 850, quality: 90) {
                  src
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
