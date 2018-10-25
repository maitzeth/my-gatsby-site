import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { Link } from "gatsby";
import css from '../assets/css/menu.module.scss';

class Menu extends Component {
  state = {
    isBlack: false
  }

  handleScroll = (event) => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      this.setState({ isBlack: true });
    } else {
      this.setState({ isBlack: false });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { isBlack } = this.state;

    return (
      <Navbar expand="sm" fixed="top" className={isBlack ? css.menuScrolled : css.menuDefault}>
        <Container>
          <Nav className="mx-auto" navbar>
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
              <Link to="https://github.com/reactstrap/reactstrap" className={css.menuLink}>
              	<span>Work</span>
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>    
    );
  }
}

export default Menu;