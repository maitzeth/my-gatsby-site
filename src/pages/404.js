import React from 'react';
import css from '../assets/css/404.module.scss';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <section className={css.errorWrapper}>
      <div className={css.errorMessages}>
        <h1 className="display-4">Sorry, this page doesn't exists.</h1>
        <div className="text-center my-3">
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
