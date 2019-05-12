import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { Story, Stay, Event, Registry } from '../components/articles'

let articles = [
  {key: 'story', item: Story},
  {key: 'event', item: Event},
  {key: 'stay', item: Stay},
  {key: 'registry', item: Registry},
  //{key: 'rsvp', item: Rsvp},
]

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: '', //is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  articleFromUrl () {
    return window.location.pathname.substr(1)
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
        let article = this.articleFromUrl();
        if (article) {
          this.handleOpenArticle(article)
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

    // history.pushState(null, null, `/${article}`);
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
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

    history.pushState(null, null, '/');
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  // <Slider>
  //   <Slider.Item style={{display: this.state.seenSplash ? "none" : "block" }}>
  //   </Slider.Item>
  //   <Slider.Item>
  //     <Header articles={articles} onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
  //   </Slider.Item>
  // </Slider>

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

export default IndexPage
