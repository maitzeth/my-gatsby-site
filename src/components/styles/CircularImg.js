import styled from 'styled-components';

const CircularImg = styled.img`
  src: url(${props => props.src});
  margin: 1em auto;
  border-radius: 50%;
  display: block;
  height: auto;
  width: ${props => props.width};
`;

export default CircularImg;