import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, StaticQuery } from 'gatsby';
import React, { Fragment } from 'react';
import Foot from './Foot';
import Menu from './Menu';
import SEO from './SEO';
import theme from '../../config/theme';
import { ThemeProvider } from 'styled-components';


const Layout = ({ children, pathname, customSEO }) => (
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
    render={() => (
      <ThemeProvider theme={theme}>
        <Fragment>
          {!customSEO && <SEO pathname={pathname} />}
          <Menu />
            {children}
          <Foot />
        </Fragment>
      </ThemeProvider>
    )}
  />
);

export default Layout;
