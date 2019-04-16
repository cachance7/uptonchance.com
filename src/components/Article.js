import React from 'react'
import PropTypes from 'prop-types'

class Article extends React.Component {
  renderContent() {
    return <div />
  }

  render() {
    return (
      <React.Fragment>
        <article
          className={`${this.props.active ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">{this.constructor.title}</h2>
          {this.renderContent()}
          <div
            className="close"
            onClick={() => {
              this.props.onCloseArticle()
            }}
          />
        </article>
      </React.Fragment>
    )
  }
}

Article.propTypes = {
  route: PropTypes.object,
  active: PropTypes.bool,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
}

export default Article
