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
        <BlogSection title="Latest News!" data={posts} />
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
        subtitle      
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

    allWordpressWpPortfolio(sort: {fields: [date], order: DESC}, limit: 4) {
      edges {
        node {
          date
          title
          id
          featured_media {
            source_url
          }
          acf {
            url
            agency
            year
          }
        }
      }
    }
  }
`;

export default Index;