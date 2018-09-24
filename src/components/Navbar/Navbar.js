import React, { Component } from 'react';
import NavbarToggler from './NavbarToggler';
import NavbarPanel from './NavbarPanel';

class Navbar extends Component {
  state = {
    isOpen: false,
    links: [
      { name: 'Home'  },
      { name: 'About' },
      { name: 'Work'  }
    ]
  };

  handleToggler = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen, links } = this.state;

    return (
      <nav>
        <NavbarToggler handleToggler={this.handleToggler} isOpen={isOpen} />
        <NavbarPanel handleToggler={this.handleToggler} isOpen={isOpen} links={links} />
      </nav>
    )
  }
};

export default Navbar;