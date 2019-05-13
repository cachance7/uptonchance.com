import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

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
          <Link className="close" to="/" state={{ isArticleVisible: true, fromArticle: true }}/>
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
