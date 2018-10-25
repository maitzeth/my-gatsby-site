import React, { Component } from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';
import Layout from '../components/Layout';

const AboutPage = () => (
	<PageTransition
    defaultStyle={{
      transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      left: '100%',
      position: 'absolute',
      width: '100%',
    }}
    transitionStyles={{
      entering: { left: '0%' },
      entered: { left: '0%' },
      exiting: { left: '100%' },
    }}
    transitionTime={500}>
	  <Layout>
	  	<h1>About</h1>
	  </Layout>
	</PageTransition>
)
export default AboutPage
