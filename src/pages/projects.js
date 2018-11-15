import React, { Fragment } from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import css from '../assets/css/page.module.scss'
import image from '../assets/images/headingbg.jpg'
import { Container, Row } from 'reactstrap'
import Project from '../components/Project'

const ProjectsPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark

	return (
		<Fragment>
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
							{edges.map(({ node }, index) => (
								<Project
									key={`project-${index}`}
									id={index}
									{...node}
									separation="my-3"
								/>
							))}
						</Row>
					</Container>
				</main>
			</Layout>
		</Fragment>
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