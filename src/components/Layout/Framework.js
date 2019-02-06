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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 1.5rem;

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

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
`
