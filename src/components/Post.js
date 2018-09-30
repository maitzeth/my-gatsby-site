import React from 'react';
import { Col, Card, CardBody,
  CardTitle, CardText, CardHeader } from 'reactstrap';
import css from '../assets/css/blogsection.module.css';

const Post = ({ author, title, createdAt, previewContent, slug, medium_id }) => {
	const { imageId, name, username } = author;
	const { subtitle } = previewContent;

	return (
		<Col sm="6">
			<Card className={css.BlogItem}>
				<CardHeader className={css.CardHeading}>
					<img src={`https://cdn-images-1.medium.com/fit/c/60/60/${imageId}`} alt="Thumbnail" className={`mr-2 ${css.UserImage}`} />
					<p className={`${css.MetaData} m-0`}>
						{ name }
						<small className="text-muted">{ createdAt }</small>
					</p>
				</CardHeader>
				<a href={`https://medium.com/@${username}/${slug}-${medium_id}`} target="_blank" rel="noreferrer noopener">
				  <CardBody>
				    <CardTitle>{ title }</CardTitle>
				    <CardText className="lead" style={{ fontSize: "1rem" }}> 
	            { subtitle }
	          </CardText>
				  </CardBody>
			  </a>
			</Card>
		</Col>
	)
};

export default Post;