import React from 'react';
import css from '../assets/css/workSection.module.css';

class WorkImage extends React.Component {
	render() {

		const { title, id, activeWork, image, url } = this.props;
		let isActive = false;

		if ( id === activeWork ) {
			isActive = true;
		}


		if (!image) {
			return (
				<img src="https://picsum.photos/800/600/?random" alt={title} className={isActive ? css.WorkImgActive : css.WorkImg} />
			)
		}

		return (
			<a href={url} target="_blank" rel="noreferrer noopener">
				<img src={ image } alt={title} className={isActive ? css.WorkImgActive : css.WorkImg} />
			</a>
		)
	}
};

export default WorkImage;