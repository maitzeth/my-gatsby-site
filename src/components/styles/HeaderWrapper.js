import styled from 'styled-components';

const HeaderWrapper = styled.a`
  background-color: ${props => props.theme.primaryColor};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export default HeaderWrapper;