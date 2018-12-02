import React, { Component, Fragment } from 'react'
import css from '../assets/css/header.module.scss'
import WindowSizeListener from 'react-window-size-listener'
import dragImage from '../assets/images/dragicon.png'

class GoTo extends Component {
	state = {
		windowWidth: 0,
	}

	componentDidMount() {
		this.setState({ windowWidth: window.innerWidth })
	}

	render() {
		const { windowWidth } = this.state

		return (
			<Fragment>
				<WindowSizeListener
					onResize={windowSize =>
						this.setState({ windowWidth: windowSize.windowWidth })
					}
				/>
				<div className={css.goToWrapper}>
					{windowWidth > 567 ? (
						<div className={css.goTo}>
							<span className={css.iconScrollArrow} />
						</div>
					) : (
						<img
							src={dragImage}
							alt="Drag Vertical Icon"
							className={css.dragIcon}
						/>
					)}
				</div>
			</Fragment>
		)
	}
}

export default GoTo
