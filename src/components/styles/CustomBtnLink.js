import styled from 'styled-components';
import Link from 'gatsby-link';

const CustomBtnLink = styled(Link)`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  font-size: 1rem;
  line-height: 1.5;
  transition: all .15s ease-in-out;

  border-radius: 0px;
  background-color: transparent;
  border: 2px solid ${props => props.black ? props.theme.primaryColor : '#fff'};
  padding: 0.5em 3em;
  position: relative;
  overflow: hidden;

  &:hover {
    text-decoration: none;

    span {
      color: ${props => props.black ? '#fff' : props.theme.primaryColor};
    }

    &::after {
      width: 110%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: -5%;
    top: 0;
    height: 100%;
    width: 0%;
    z-index: 1;
    background-color: ${props => props.black ? props.theme.primaryColor : '#fff'};
    transition: all 200ms ease;
    -webkit-transform: skew(160deg);
    transform: skew(160deg);
  }

  span {
    position: relative;
    color: ${props => props.black ? props.theme.primaryColor : '#fff'};
    z-index: 2;
  }
`;

export default CustomBtnLink;