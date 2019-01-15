import { Link } from 'gatsby';
import React, { Component, Fragment } from 'react';
import { Container, Nav, Navbar, NavItem } from 'reactstrap';
import NavbarToggler from './NavbarToggler';
import styled from 'styled-components';

const MenuNav = styled(Navbar)`
  background-color: ${props => props.theme.primaryColor};
  padding: 1em 0;
  transition: all 200ms ease;

  @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    transform: translateX(${props => props.isactive === 'true' ? '0%' : '100%'});
    padding: 2em 0;
    height: 100vh;
    position: fixed;
    z-index: 3;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  padding: 0.5em;
  margin: 0 0.5em;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 1em;

  &:hover {
    text-decoration: none;
    color: #fff;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    font-size: 1.2em;
  }
`;

const NavbarTogglerWrapper = styled.div`
  color: #fff !important;
  padding: 0.5em;
  margin: 0 0.5em;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 1em;
  position: fixed;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 50px;
  background-color: ${props => props.theme.primaryColor};
  z-index: 10;

  &:hover {
    text-decoration: none;
    color: #fff;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    font-size: 1.2em;
  }
`;

const NavExternalLink = styled.div`
  display: none;

  @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    display: block;
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 4;
    height: 50px;
    width: 75px;
    background-color: ${props => props.theme.primaryColor};
  }
`;

class Menu extends Component {
  state = {
    menuactive: false
  };

  handleToggler = () => {
    const { menuactive } = this.state;
    this.setState({
      menuactive: !menuactive
    });
  };

  render() {
    const { menuactive } = this.state;

    return (
      <Fragment>
        <MenuNav expand="sm" fixed="top" onClick={this.handleToggler} isactive={menuactive.toString()}>
          <Container>
            <Nav className="mx-auto text-center" navbar>
              <NavItem>
                <NavLink to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavExternalLink
                  href="https://sourcerer.io/maitzeth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </NavExternalLink>
              </NavItem>
              <NavItem>
                <NavLink to="/projects">
                  Projects
                </NavLink>
              </NavItem>
            </Nav>
          </Container>
        </MenuNav>
        <NavbarTogglerWrapper>
          <NavbarToggler isActive={menuactive} handleToggler={this.handleToggler} />
        </NavbarTogglerWrapper>
      </Fragment>
    );
  }
}

export default Menu;
