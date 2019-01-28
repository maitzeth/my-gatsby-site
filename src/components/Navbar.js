import { Link } from 'gatsby'
import React from 'react'
import { Spring } from 'react-spring';
import styled from 'styled-components'
import Logo from './Logo';
import Btn from './Btn';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 1rem 1.5rem;
  position: fixed;
  z-index: 10;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 0%;
    width: 100%;
    transition: all 200ms ease-in-out;
    background-color: ${props => props.theme.whiteColor};
    z-index: -1;

    @media (max-width: ${props => props.theme.breakpoints.xs}) {
      height: 100%;
    }
  }

  &:hover {
    &:after {
      height: 100%;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    padding: 1rem 0.5rem;
  }
`;

const LogoWrapper = styled(Link)`
  display: flex;
  font-weight: 900;
  align-items: center;

  span {
    text-transform: uppercase;
    margin-left: 0.75rem;

    @media (max-width: ${props => props.theme.breakpoints.xs}) {
      display: none;
    }
  }
`;

const HeaderItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header = ({ siteTitle }) => (
  <Spring from={{ transform: 'translateY(-100%)' }} to={{ transform: 'translateY(0px)' }}>
    { props => (
        <NavbarWrapper style={props}>
          <LogoWrapper to="/">
            <Logo />
            <span>{ siteTitle }</span>
          </LogoWrapper>
          <HeaderItems>
            <Btn to="/" navbar>
              Home
            </Btn>
            <Btn to="/about" navbar>
              About
            </Btn>
            <Btn to="/work" navbar>
              Work
            </Btn>
          </HeaderItems>
        </NavbarWrapper>
      )
    }
  </Spring>
  
)

export default Header
