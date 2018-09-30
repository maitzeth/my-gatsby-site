import React from 'react';
import css from '../assets/css/blogsection.module.css';
import { Container, Row, Col } from 'reactstrap';
import Post from '../components/Post';


const BlogSection = ({ title, data }) => {
	return (
		<Container className={css.BlogWrapper}>
			<Row>
				<Col>
					<h2 className={css.BlogTitle}>{title.toUpperCase()}</h2>
				</Col>
			</Row>
			<Row className="mt-5">
				{
          data.map(({node}) => <Post key={node.id} {...node} />)
        }
			</Row>
		</Container>	
	)
};

export default BlogSection;