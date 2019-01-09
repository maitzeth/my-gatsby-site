import React from 'react'
import HeaderText from './HeaderText'
import GoTo from './GoTo'
import HeaderWrapper from './styles/HeaderWrapper';

const Header = ({ title }) => (
  <HeaderWrapper>
    <HeaderText title={title} />
    <GoTo />
  </HeaderWrapper>
)

export default Header
