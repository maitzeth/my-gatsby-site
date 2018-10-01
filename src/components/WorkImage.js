import React from 'react';
import css from '../assets/css/workSection.module.css';

class WorkImage extends React.Component {
	render() {
		const { source_url } = this.props;

		const { title, id, activeWork } = this.props;
		let isActive = false;

		if ( id === activeWork ) {
			isActive = true;
		}


		if (!source_url) {
			return (
				<h1>No Image...</h1>
			)
		}

		return (
			<img src={ source_url } alt={title} className={isActive ? css.WorkImgActive : css.WorkImg} />
		)
	}
};

export default WorkImage;