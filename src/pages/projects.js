import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import css from '../assets/css/page.module.scss'

const ProjectsPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark

	console.log(edges)

	return (
		<PageTransition>
			<Layout>
				<main className={css.pageWrapper} />
			</Layout>
		</PageTransition>
	)
}

export const query = graphql`
	query ProjectsPageQueries {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						service
						client
						cover {
							childImageSharp {
								fluid(maxWidth: 850, quality: 90) {
									src
								}
							}
						}
					}
				}
			}
		}
	}
`

export default ProjectsPage