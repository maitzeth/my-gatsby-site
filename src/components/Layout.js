import React, { Fragment } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from './Navbar'
import Footer from './Footer'
import config from '../config'
import SEO from './SEO'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.secondaryColor};
  }
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
  }
  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`

const Layout = ({ children, pathname, customSEO}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={config.theme}>
        <Fragment>
          {!customSEO && <SEO pathname={pathname} />}
          <GlobalStyle />
          <Navbar siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer />
        </Fragment>
      </ThemeProvider>
    )}
  />
)

export default Layout
