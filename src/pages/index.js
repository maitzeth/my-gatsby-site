import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import HeaderImage from '../assets/img/header.jpg';
import aboutImg from '../assets/img/about.jpg';

class Index extends Component {
  state = {
    social: [
      { url: 'http://twitter.com/maitzeth', name: 'twitter' },
      { url: 'http://instagram.com/maitzethdrummer', name: 'instagram' },
      { url: 'http://github.com/maitzeth', name: 'github' },
      { url: 'http://linkedin.com', name: 'linkedin' }
    ]
  }

  render() {
    const { social } = this.state;

    const aboutText =
      "I'm Andre Ivan, a Web Developer from Venezuela, currently living in Argentina. I love to share what I learn and I've been working in the Web since 3 years. I spend most of my time learning about new Technologies, Methodologies, Best Practices and Paradigms, like OOP and Functional Programming. Always working with Web Technologies like HTML, CSS and Javascript.";

    return (
      <Layout>
        <Header title="Andre Ivan" subtitle="Web Developer" headerImage={HeaderImage} />
        <AboutSection 
          title="About me" 
          text={aboutText} 
          aboutImg={aboutImg} 
          social={social}  
        />
      </Layout>
    )
  }
}

export default Index;