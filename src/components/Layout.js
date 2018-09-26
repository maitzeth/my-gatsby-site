import React from 'react';
import Meta from './Meta';
import Menu from './Navbar/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.css';
import { StaticQuery, graphql } from "gatsby"

const Layout = ({ children, data }) => (
	<StaticQuery
    query={graphql`
      query HeadingQueries {
        wordpressWpApiMenusMenusItems {
          items {
            url
            title
            object_id
          }
        }
        
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <main>
		    <Meta title={data.site.siteMetadata.title} />
		    <Menu {...data.wordpressWpApiMenusMenusItems} />
		    { children }
		  </main>
    )}
  />
);

export default Layout;