import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import css from '../assets/css/github.module.scss';

const RepoStyles = {
	padding: '0.5em'
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const Repo = ({name, url}) => {
	const formattedName = name.split("-").join(" ");

	return (
		<Col sm="6" className="my-2">
			<Card className={css.RepoWrapper}>
				<CardBody className={css.RepoItem} style={RepoStyles}>
					<Row className="align-items-center">
						<Col sm="2">
							<span className="fa-stack fa-lg">
							  <i className="fa fa-circle fa-stack-2x"></i>
							  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
							</span>
						</Col>
						<Col sm="10">
							<h5 className="m-0">
								<a href={url} target="_blank" rel="nofollow noopener noreferrer">
									{capitalize(formattedName)}
								</a>
							</h5>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Col>
	)
}

const Github = ({GitRepos}) => (
	<Container className={css.GitWrapper}>
		<Row>
			<Col>
				<h2 className={`display-4 text-center`}>Pinned Repos</h2>
			</Col>
		</Row>
		<Row className="mt-4">
			<Col sm={{ size: '8', offset: 2 }}>
				<Row>
					{
						GitRepos.map(({node}) => <Repo key={node.id} {...node} />)
					}
				</Row>
			</Col>
		</Row>
	</Container>
);

export default Github;