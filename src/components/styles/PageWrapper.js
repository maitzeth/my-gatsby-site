import styled from 'styled-components';

const PageWrapper = styled.main`
  background-color: ${props => props.white ? props.theme.whitesmokeColor : props.theme.primaryColor};
`;

export default PageWrapper;