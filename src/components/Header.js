import React from 'react'
import PropTypes from 'prop-types'
// import Pages from '../pages'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo rings">
      <span className="icon heart fa-heart" />
    </div>
    <div className="content">
      <div className="inner wrapper">
        <div className="names">
          <span className="name groom">
            <h1>Casey</h1>
          </span>
          <span className="icon heart fa-plus" />
          <span className="name bride">
            <h1>Lauren</h1>
          </span>
        </div>
        <p>A match made in Seattle</p>
        <p className="title-date">Saturday September&nbsp;7,&nbsp;2019</p>
      </div>
    </div>
    <nav>
      <ul>
        {props.articles.map(({ key, item: Article }, index) => {
          return (
            <li key={index}>
              <a
                href={`#${key}`}
                onClick={() => {
                  props.onOpenArticle(key)
                }}
              >
                {Article.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  articles: PropTypes.array,
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
