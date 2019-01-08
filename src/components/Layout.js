import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, StaticQuery } from 'gatsby';
import React, { Fragment } from 'react';
import Foot from './Foot';
import Menu from './Menu';
import CEO from './SEO';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#0b0b0d',
  secondaryColor: '#131315',
  whitesmokeColor: '#dfe6e9',
  grayColor: '#71797b'
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <ThemeProvider theme={theme}>
        <Fragment>
          <CEO />
          <Menu />
            {children}
          <Foot />
        </Fragment>
      </ThemeProvider>
    )}
  />
);

export default Layout;
