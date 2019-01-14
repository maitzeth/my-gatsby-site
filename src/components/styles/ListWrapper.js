import styled from 'styled-components';

const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  margin-top: 2em;

  li {
    display: inline-block;
    padding: 0.5em;
    transition: all 200ms ease;

    &:hover {
      transform: translateY(-3px);
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.primaryColor};

      &:hover {
        text-decoration: none;
      }

      i {
        font-size: 1.5em;
      }
    }
  }
`;

export default ListWrapper;