import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import css from '../assets/css/page.module.scss'
import image from '../assets/images/headingbg.jpg'
import { Container, Row } from 'reactstrap'
import Project from '../components/Project'

const ProjectsPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark

	return (
		<PageTransition>
			<Layout>
				<main className={css.pageWrapper}>
					<header
						className={css.pageHeaderImage}
						style={{ backgroundImage: `url(${image})` }}
					>
						<h3 className="display-4">Projects</h3>
					</header>
					<Container className="py-4">
						<Row className="mt-5">
							{edges.map(({ node }) => (
								<Project
									key={node.frontmatter.client}
									{...node}
									separation="my-3"
								/>
							))}
						</Row>
					</Container>
				</main>
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