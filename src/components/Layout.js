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
        menusJson {
          items
        }

        site {
          siteMetadata {
            title,
            subtitle
          }
        }
      }
    `}
    render={data => (
      <main>
		    <Meta title={data.site.siteMetadata.title} subtitle={data.site.siteMetadata.subtitle} />
		    <Menu {...data.menusJson} />
		    { children }
		  </main>
    )}
  />
);

export default Layout;