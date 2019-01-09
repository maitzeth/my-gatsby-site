import React from 'react';
import TextWrapper from './styles/TextWrapper';
import HeaderTitle from './styles/HeaderTitle';

const HeaderText = ({ title }) => (
  <TextWrapper>
    <HeaderTitle>
      Hi, i'm
      <span>
        <b>{title}</b>
      </span>
    </HeaderTitle>
  </TextWrapper>
);

export default HeaderText;
