import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, StaticQuery } from 'gatsby';
import React, { Fragment } from 'react';
import Foot from './Foot';
import Menu from './Menu';
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
		render={(data) => (
			<Fragment>
				<CEO />
				<Menu />
				{children}
				<Foot />
			</Fragment>
		)}
	/>
);

export default Layout;
