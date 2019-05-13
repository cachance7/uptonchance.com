import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  render() {
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {
          this.props.articles.map(({key, item:Article}, index) => {
            return (
              <Article
                key={index}
                onCloseArticle={() => this.props.onCloseArticle()}
                articleTimeout={this.props.articleTimeout}
                active={this.props.article === key}
              />
            )
          }
          )
        }
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
  articles: PropTypes.array,
}

export default Main
