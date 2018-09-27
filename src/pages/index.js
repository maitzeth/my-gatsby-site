import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import HeaderImage from '../assets/img/header.jpg';
import aboutImg from '../assets/img/about.jpg';
import { graphql } from 'gatsby';


class Index extends Component {
  state = {
    social: [],
    works: []
  }

  componentDidMount() {
    const { social } = this.props.data.socialJson;
    const works = this.props.data.allWordpressWpPortfolio.edges;
    this.setState({ 
      social,
      works 
    });
  }

  render() {
    const { social, works } = this.state;
    const { about, title, subtitle } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <Header title={title} subtitle={subtitle} headerImage={HeaderImage} />
        <AboutSection title="About me" text={about} aboutImg={aboutImg} social={social} />
        <WorkSection title="My Work" data={works} />
      </Layout>
    )
  }
}

export const query = graphql`
  query HomePageQueries {
    site {
      siteMetadata {
        title
        about      
      }
    }

    socialJson {
      social {
        url
        name
      }
    }

    allWordpressWpPortfolio {
      edges {
        node {
          title
          id
          featured_media {
            localFile {
              childImageSharp {
                resolutions (width: 300, height: 300) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Index;