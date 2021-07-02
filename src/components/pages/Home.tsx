import React, { ReactElement } from 'react';
import Zone from '../atoms/Zone';
import Content from '../atoms/Content';
import Pivot from '../organisms/Pivot';
import Hero from '../organisms/Hero';
import Footer from '../organisms/Footer';
import Page from '../templates/Page';

export default function Home(): ReactElement {
  return (
    <Page id={'/'} header={<Pivot />} hero={<Hero />} footer={<Footer />}>
      <Zone tag={'section'} id="/blog">
        <Content>
          <div style={{ height: '100vh' }}>Blog</div>
        </Content>
      </Zone>
      <Zone tag={'section'} id="/about">
        <Content>About</Content>
      </Zone>
    </Page>
  );
}
