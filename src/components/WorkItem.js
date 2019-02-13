import React, { useState } from 'react';
import styled from 'styled-components'
import { Lead } from './Layout/Framework.js'
import BtnExternal from './BtnExternal'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import posed from 'react-pose';

const AboutListItem = styled.li`
  margin: 0.3em 0;
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    text-align: center;
  }
`

const AboutText = styled(Lead)`
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    text-align: center;
  }
`

const BtnWork = styled(BtnExternal)`
  font-weight: 900;
  span {
    &:before {
        transform: scale(1,0.1) translateZ(0);
    }
  }
`;

const ButtonCollapse = styled.button`
  margin: 0 0.5em;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    display: none;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.3em;
  background-color: ${props => props.theme.redColor};
  border-radius: 50%;

  svg {
    color: #fff;
  }
`;

const Period = styled.span`
  margin: 0 0.5em;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
`;

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});

const WorkItem = ({period, place, role, url, description}) => {
  const initialState = false;
  const [isOpen, setOpen] = useState(initialState);

  return (
    <AboutListItem>
      <AboutText>
        <span>{role}</span>
        <Period>{`( ${period.from} - ${period.to} )`}</Period>
        <BtnWork href={url}>{ place }</BtnWork>
        <ButtonCollapse onClick={() => setOpen(!isOpen)}>
          {
            isOpen ? (
              <IconWrapper>
                <MdKeyboardArrowUp />
              </IconWrapper>
            ) : (
              <IconWrapper>
                <MdKeyboardArrowDown />
              </IconWrapper>
            )
          }
        </ButtonCollapse>
      </AboutText>
      <ContentWrapper>
        <Content pose={isOpen ? 'open' : 'closed'}>
          { description }
        </Content>  
      </ContentWrapper>
    </AboutListItem>
  )
};

export default WorkItem;