import styled from 'styled-components';

const SocialElement = styled.li`
  display: inline-block;
  margin: 0 .6em;
  text-align: center;
  transition: all 200ms ease;

  &:hover {
    transform: translateY(-3px);
  }

  a {
    padding: 0.5em;
    color: ${props => props.theme.primaryColor};

    &:hover {
      text-decoration: none;
    }
  }

  h6 {
    text-transform: capitalize;
  }

  i {
    font-size: 1.5em;
    color: ${props => props.theme.primaryColor}
  }
`;

export default SocialElement;

