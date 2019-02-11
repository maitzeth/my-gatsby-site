import React, { useState } from 'react';
import styled from 'styled-components'
import { Lead } from './Layout/Framework.js'
import BtnExternal from './BtnExternal'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const AboutListItem = styled.li`
  margin: 0.3em 0;
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

const ContentWrapper = styled.div`
  overflow: hidden;
  transition: all 200ms ease;
  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    height: ${props => props.isOpen ? 'auto' : '0'};
  }
`;

const ButtonCollapse = styled.button`
  margin: 0;
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
  padding: 0.5em;
`;

const WorkItem = ({node}) => {
  const { role, date, url, job } = node.frontmatter
  const { html } = node;
  const initialState = false;
  const [isOpen, setOpen] = useState(initialState);

  return (
    <AboutListItem>
      <AboutText>
        <span>{role}</span> - ({date}) -{' '}
        <BtnWork href={url}>{job}</BtnWork>
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
      <ContentWrapper isOpen={isOpen}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </ContentWrapper>
    </AboutListItem>
  )
};

export default WorkItem;