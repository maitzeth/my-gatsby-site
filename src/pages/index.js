import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import BlogSection from '../components/BlogSection';
import HeaderImage from '../assets/img/header.jpg';
import aboutImg from '../assets/img/about.jpg';
import { graphql } from 'gatsby';


class Index extends Component {
  state = {
    social: [],
    works: [],
    posts: []
  }

  componentDidMount() {
    const { social } = this.props.data.socialJson;
    const works = this.props.data.allWordpressWpPortfolio.edges;
    const { edges } = this.props.data.allMediumPost;

    this.setState({ 
      social,
      works,
      posts: edges
    });
  }

  render() {
    const { social, works, posts } = this.state;
    const { about, title, subtitle } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <Header title={title} subtitle={subtitle} headerImage={HeaderImage} />
        <AboutSection title="About me" text={about} aboutImg={aboutImg} social={social} />
        <WorkSection title="My Work" data={works} />
        <BlogSection title="Últimos artículos publicados" data={posts} />
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

    allMediumPost(sort: {fields: [createdAt], order: DESC}, limit: 2) {
      edges {
        node {
          id
          title
          slug
          medium_id
          createdAt(formatString: "MMMM DD, YYYY")
          previewContent {
            subtitle
          }
          author {
            imageId
            name
            username
          }
        }
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
                fixed (width: 300, height: 300) {
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