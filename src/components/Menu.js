import { Link } from 'gatsby';
import React, { Component, Fragment } from 'react';
import { Container, Nav, Navbar, NavItem } from 'reactstrap';
import css from '../assets/css/menu.module.scss';
import NavbarToggler from './NavbarToggler';

class Menu extends Component {
	state = {
		isActive: false
	};

	handleToggler = () => {
		const { isActive } = this.state;
		this.setState({
			isActive: !isActive
		});
	};

	render() {
		const { isActive } = this.state;

		return (
			<Fragment>
				<Navbar expand="sm" fixed="top" className={isActive ? css.menuActive : css.menuDefault}>
					<Container>
						<Nav className="mx-auto text-center" navbar>
							<NavItem>
								<Link to="/" className={css.menuLink}>
									<span>Home</span>
								</Link>
							</NavItem>
							<NavItem>
								<Link to="/projects" className={css.menuLink}>
									<span>Projects</span>
								</Link>
							</NavItem>
						</Nav>
					</Container>
				</Navbar>
				<div className={css.navbarTogglerWrapper}>
					<NavbarToggler isActive={isActive} handleToggler={this.handleToggler} />
				</div>
			</Fragment>
		);
	}
}

export default Menu;
