import styled from 'styled-components';

const Title = styled.h2`
  color: ${props => props.black ? props.theme.primaryColor : '#fff'};
  text-align: center;
`;

export default Title;