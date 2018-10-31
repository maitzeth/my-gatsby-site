import React, { Component, Fragment } from 'react'
import { Navbar, Nav, NavItem, Container } from 'reactstrap'
import { Link } from 'gatsby'
import css from '../assets/css/menu.module.scss'
import NavbarToggler from './NavbarToggler';

class Menu extends Component {
  state = {
    isActive: false,
  }

  handleToggler = () => {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive
    })
  }

  render() {
    const { isActive } = this.state

    return (
      <Fragment>
        <Navbar
          expand="sm"
          fixed="top"
          className={isActive  ? css.menuActive : css.menuDefault}
        >
          <Container>
            <Nav className="mx-auto text-center" navbar>
              <NavItem>
                <Link to="/" className={css.menuLink}>
                  <span>Home</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className={css.menuLink}>
                  <span>About</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/projects"
                  className={css.menuLink}
                >
                  <span>Projects</span>
                </Link>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
        <NavbarToggler isActive={isActive} handleToggler={this.handleToggler} />
      </Fragment>
    )
  }
}

export default Menu
