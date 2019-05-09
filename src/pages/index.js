import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import defaultConfig from '../components/particles-config';
import '../styles/index.scss';
import loadParticles from '../components/particles';

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        social {
          name
          link
        }
      }
    }
  }
`;

class IndexPage extends React.Component {
  state = {
    invertedHeader: false,
  };

  handleScroll = () => {
    this.setState({
      invertedHeader: window.pageYOffset + 62 >= window.innerHeight,
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    loadParticles('particles-js', defaultConfig);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Layout invertedHeader={this.state.invertedHeader}>
        <div className="home-splash text-centered">
          <div className="absolute-centered splash-info">
            <h1 className="splash-title">
              <span className="accent-text">l</span>iam
              <span className="accent-text">d</span>alg
            </h1>
            <h4 className="splash-subtitle">Something goes here.</h4>
          </div>
          <div id="particles-js" className="particles" />
          <div
            onClick={() =>
              document
                .querySelector('#firstContainer')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="arrow-down absolute-centeredX clickable"
          />
        </div>
        <div id="firstContainer" className="container">
          <h1 className="title">Hey There.</h1>
          <p>Development in progress with Gatsby.</p>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;