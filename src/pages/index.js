import React, { Component } from 'react';
import { graphql } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from '../components/Layout';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import Projects from '../components/Projects';

class IndexPage extends Component {
	render() {
    const { title, } = this.props.data.site.siteMetadata;

		return (
      <PageTransition>
  		  <Layout>
  		    <Header title={title} />
          <AboutSection />
          <Projects />
  		  </Layout>
      </PageTransition>
		)
	}
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title,
        about
      }
    }
  }
`

export default IndexPage
