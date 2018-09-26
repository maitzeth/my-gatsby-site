import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import HeaderImage from '../assets/img/header.jpg';
import aboutImg from '../assets/img/about.jpg';
import { graphql } from 'gatsby';

class Index extends Component {
  state = {
    social: []
  }

  componentDidMount() {
    const { social } = this.props.data.socialJson;
    this.setState({ social });
  }

  render() {
    const { social } = this.state;
    const { about, title, subtitle } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <Header title={title} subtitle={subtitle} headerImage={HeaderImage} />
        <AboutSection title="About me" text={about} aboutImg={aboutImg} social={social} />
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
  }
`;

export default Index;