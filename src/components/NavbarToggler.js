import React from 'react';
import styled from 'styled-components';

const NavbarTogglerBtn = styled.button`
  display: none;

  @media only screen and (max-width: 575.98px) {
    display: block;
    position: absolute;
    width: 40px;
    height: 20px;
    cursor: pointer;
    z-index: 4;
    background-color: transparent;
    border: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:focus {
    @media only screen and (max-width: 575.98px) {
      outline: none;
    }
  }
`;

const NavbarTogglerItem = styled.div`
  display: none;

  @media only screen and (max-width: 575.98px) {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.whitesmokeColor};
    position: absolute;
    transition: all 150ms ease;
  }

  &:nth-child(1) {
    @media only screen and (max-width: 575.98px) {
      transform: ${props => !props.isActive ? 'translateY(-50%)' : 'translateY(10px) rotate(45deg)'};
      top: 0;
      margin-left: -4px;
    }
  }

  &:nth-child(2) {
    @media only screen and (max-width: 575.98px) {
      top: 50%;
      transform: translateY(-50%);
      opacity: ${props => !props.isActive ? '1' : '0'};
    }
  }

  &:nth-child(3) {
    @media only screen and (max-width: 575.98px) {
      top: 100%;
      margin-left: -4px;
      transform: ${props => !props.isActive ? 'translateY(-50%)' : 'translateY(-10px) rotate(-45deg)'};
    }
  }
`;

const NavbarToggler = ({ handleToggler, isActive }) => (
  <NavbarTogglerBtn onClick={handleToggler}>
    <NavbarTogglerItem isActive={isActive} />
    <NavbarTogglerItem isActive={isActive} />
    <NavbarTogglerItem isActive={isActive} />
  </NavbarTogglerBtn>
);

export default NavbarToggler;
