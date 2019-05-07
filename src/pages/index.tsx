import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import ParticlesJS from '../components/particles';
import DefaultConfig from '../components/particles-config';
import '../styles/index.scss';

interface IndexProps {}

class IndexPage extends React.Component<IndexProps, {}> {
  public render() {
    return (
      <Layout>
        <div className="home-splash text-centered">
          <div className="absolute-centered splash-info">
            <h1 className="splash-title">
              <span className="accent-text">l</span>iam
              <span className="accent-text">d</span>alg
            </h1>
            <h4 className="splash-subtitle">Something goes here.</h4>
          </div>
          <ParticlesJS config={DefaultConfig} />
        </div>
        <div className="container">
          <h1 className="title">Hello World!</h1>
          <p>Development in progress with Gatsby + SASS + TypeScript.</p>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
