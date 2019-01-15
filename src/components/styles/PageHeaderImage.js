import styled from 'styled-components';

const PageHeaderImage = styled.main`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;

  background-image: url(${props => props.image ? props.image : null});

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, ${props => props.theme.primaryColor} 0%, transparent 100%);
  }
  
  h1 {
    position: relative;
    color: ${props => props.theme.whitesmokeColor};
    z-index: 2;
    font-size: 4em;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    height: 250px;
  }
`;

export default PageHeaderImage;