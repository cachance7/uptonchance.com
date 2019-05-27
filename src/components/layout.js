import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div>
        {children}
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              meta {
                name
                content
              }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Helmet
            title={data.site.siteMetadata.title}
          >
            <html lang="en" />
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js" async defer></script>
            <script type="text/javascript" src="https://addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>

            {
              data.site.siteMetadata.meta.map(({name, content}, idx) =>
                <meta key={idx} name={name} content={content} />
              )
            }
          </Helmet>
          {content}
        </React.Fragment>
      )}
    />
  )
}

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default Layout
