import React from 'react'
import PropTypes from 'prop-types'

class Article extends React.Component {
  renderContent() {
    return <div />
  }

  render() {
    return (
      <article
        className={`${this.props.active ? 'active' : ''} ${
          this.props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        {this.renderContent()}
        <div
          className="close"
          onClick={() => {
            this.props.onCloseArticle()
          }}
        />
      </article>
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
