import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { navigate } from 'gatsby'

import { Story, Stay, Event, Registry } from '../components/articles'

import path from 'path'


let articles = [
  {key: 'story', item: Story},
  {key: 'event', item: Event},
  {key: 'stay', item: Stay},
  {key: 'registry', item: Registry},
  //{key: 'rsvp', item: Rsvp},
]

let sessionKey = "visited"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    let loading = ''
    let fromArticle = false

    try {
      loading = sessionStorage.getItem(sessionKey) ? '' : 'is-loading'
    } catch (exception) { /* do nothing */ }

    try {
      fromArticle = props.location.state.fromArticle
    } catch (exception) { /* do nothing */ }

    this.state = {
      isArticleVisible: fromArticle || false,
      timeout: fromArticle || false,
      articleTimeout: fromArticle || false,
      article: '',
      loading: loading,
      fromArticle: fromArticle
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  articleFromUrl () {
    return path.basename(location.pathname)
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
        sessionStorage.setItem(sessionKey, true)
        let article = this.articleFromUrl();
        if (article) {
          this.handleOpenArticle(article)
        } else if (this.state.fromArticle) {
          this.handleCloseArticle()
        }
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })
    this.setState({
      seenSplash: true
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)
  }

  handleCloseArticle() {
    // Super hack but who cares
    if (document.getElementById("lightboxBackdrop")) { return }

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: false,
        article: ''
      })
      navigate('/', { state: { isArticleVisible: true, fromArticle: true }})
    }, 350)

    // setTimeout(() => {
    //   navigate('/', { state: { isArticleVisible: true, fromArticle: true }})
    // }, 325)
  }

  handleClickOutside(event) {
    if (document.getElementById("lightboxBackdrop")) { return }

    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.setState({
          articleTimeout: !this.state.articleTimeout
        })
        setTimeout(() => {
          navigate('/', { state: { isArticleVisible: true, fromArticle: true }})
        }, 325)
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header articles={articles} onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              articles={articles}
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  location: PropTypes.string
}

export default IndexPage
