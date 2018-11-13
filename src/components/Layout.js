import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './Menu'
import Foot from './Foot'
import CEO from './SEO';

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
    render={data => (
      <Fragment>
        <CEO />
        <Menu />
        {children}
        <Foot />
      </Fragment>
    )}
  />
)

export default Layout
