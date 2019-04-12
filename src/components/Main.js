import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
// import pic03 from '../images/pic03.jpg'

import { Story, Stay, Event, Rsvp } from '../pages/articles'

class Main extends React.Component {
  render() {
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <Story
          onCloseArticle={() => this.props.onCloseArticle()}
          articleTimeout={this.props.articleTimeout}
          active={this.props.article === 'story'}
        />
        <Stay
          onCloseArticle={() => this.props.onCloseArticle()}
          articleTimeout={this.props.articleTimeout}
          active={this.props.article === 'stay'}
        />
        <Event
          onCloseArticle={() => this.props.onCloseArticle()}
          articleTimeout={this.props.articleTimeout}
          active={this.props.article === 'event'}
        />
        <Rsvp
          onCloseArticle={() => this.props.onCloseArticle()}
          articleTimeout={this.props.articleTimeout}
          active={this.props.article === 'rsvp'}
        />
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
