import React from 'react';
import css from '../assets/css/header.module.scss';

const GoTo = () => (
  <div className={css.goToWrapper}>
    <div className={css.goTo}>
      <span className={css.iconScrollArrow} />
    </div>
  </div>
);

export default GoTo;
