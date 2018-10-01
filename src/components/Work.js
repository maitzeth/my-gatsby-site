import React from 'react';
import css from '../assets/css/workSection.module.css';

class Work extends React.Component {
	handleClick = () => {
		const { id } = this.props;
		this.props.handleActive(id);
	};

	render() {
		const { title, id, activeWork, agency, year } = this.props;
		let isActive = false;

		if ( id === activeWork ) {
			isActive = true;
		}

		return (
			<article className={ !isActive ? css.TitleWrapper : css.TitleWrapperActive} onClick={this.handleClick}>
				<div className={`${css.MetaData} ${!isActive ? css.Title : css.TitleActive}`}>
					<h3 className={`m-0`}>{ title }</h3>
					<div className={`lead m-0 ${css.SubMeta}`}>
						Agency: <br/>
						<small>{ agency }</small>
					</div>
					<div className={`lead m-0 ${css.SubMeta}`}>
						Year: <br/>
						<small>{ year }</small>
					</div>
				</div>
			</article>
		)
	}
}

export default Work;