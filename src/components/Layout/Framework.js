import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 100%;
  }

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.breakpoints.l}) {
    max-width: 1000px;
  }
`

export const Title = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 1rem;
`

export const Lead = styled.p`
  font-size: 1.15rem;
  font-weight: 300;
  text-align: ${props => (props.center ? 'center' : 'left')};
`

export const ProjectWrapper = styled.div`
  max-width: 1600px;
  padding: 0.5rem 1.0875rem;
  margin: 0 auto;
`

export const ProjectInner = styled.div`
  display: grid;
  grid-template-columns: ${props => props.isFront ? '1fr 1fr 1fr' : '1fr 1fr 1fr'};
  gap: 20px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  align-items: ${props => (props.align ? props.align : 'initial')};

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    flex-direction: column;
  }
`

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: ${props => (props.noGutters ? '0' : '15px')};
  padding-left: ${props => (props.noGutters ? '0' : '15px')};
  position: relative;

  flex: ${props => {
    switch(props.size) {
      case '1':
        return '0 0 8.333333%;';
      case '2':
        return '0 0 16.666667%';
      case '3':
        return '0 0 25%';
      case '4':
        return '0 0 33.333333%';
      case '5':
        return '0 0 41.666667%';
      case '6':
        return '0 0 50%';
      case '7':
        return '0 0 58.333333%';
      case '8':
        return '0 0 66.666667%';
      case '9':
        return '0 0 75%';
      case '10':
        return '0 0 83.333333%';
      case '11':
        return '0 0 91.666667%';
      case '12':
        return '0 0 100%';
      default:
        return '0 0 100%';
    }
  }};

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
`

//   flex: 0 0 50%;
//   max-width: 50%;