import { graphql } from 'gatsby';
import React, { Component, Fragment } from 'react';
import AboutSection from '../components/AboutSection';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

class IndexPage extends Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { social } = this.props.data.socialJson;
    const projectEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Fragment>
        <Layout>
          <Header title={title} />
          <AboutSection social={social} />
          <Projects projectEdges={projectEdges} />
        </Layout>
      </Fragment>
    );
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
                fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
