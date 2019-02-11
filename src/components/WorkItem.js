import React, { useState } from 'react';
import styled from 'styled-components'
import { Lead } from './Layout/Framework.js'
import BtnExternal from './BtnExternal'

const AboutListItem = styled.li`
  margin: 0.3em 0;
`

const AboutText = styled(Lead)`
  display: inline-block;

  span {
    font-weight: bold;
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
  height: ${props => props.isOpen ? 'auto' : '0'};
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
        <button onClick={() => setOpen(!isOpen)}>Click me!</button>
      </AboutText>
      <ContentWrapper isOpen={isOpen}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </ContentWrapper>
    </AboutListItem>
  )
};

export default WorkItem;