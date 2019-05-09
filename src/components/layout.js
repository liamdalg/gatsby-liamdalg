import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../styles/layout.scss';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faGithub);
library.add(faLinkedin);
library.add(faTwitter);
config.autoAddCss = false;

const Layout = ({ invertedHeader, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            navLinks {
              name
              link
            }
            social {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          inverted={invertedHeader}
          siteTitle={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
        />
        <div>
          <main>{children}</main>
          <footer>
            <div className="footer-wrapper">
              <div className="media-icons-wrapper">
                {data.site.siteMetadata.social.map(({ name, link }) => (
                  <a
                    className="media-icon"
                    key={`media-icon-${name}`}
                    href={link}
                  >
                    <FontAwesomeIcon width={48} icon={['fab', name]} />
                  </a>
                ))}
              </div>
              <div className="footer-other">
                <p>liamdalg99@gmail.com</p>
                <p>
                  © 2019 Liam Dalgarno | Made with GatsbyJS and Github Pages.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </>
    )}
  />
);

export default Layout;
