import React from 'react'
import PropTypes from 'prop-types'
// import Pages from '../pages'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo rings">
                    <span className="icon heart fa-heart"></span>
            {/* <span className="icon ring fa-circle-o"></span> */}
            {/* <span className="icon ring fa-circle-o"></span> */}
        </div>
        <div className="content">
            <div className="inner wrapper">
                <div className="names">
                    <span className="name groom"><h1>Casey</h1></span>
                    <span className="icon heart fa-plus"></span>
                    <span className="name bride"><h1>Lauren</h1></span>
                </div>
                <p>A match made in Seattle</p>
                <p className="title-date">Saturday September&nbsp;7,&nbsp;2019</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#story" onClick={() => {props.onOpenArticle('story')}}>Story</a></li>
                <li><a href="#event" onClick={() => {props.onOpenArticle('event')}}>Event</a></li>
                <li><a href="#dates" onClick={() => {props.onOpenArticle('dates')}}>Dates</a></li>
                <li><a href="#stay" onClick={() => {props.onOpenArticle('stay')}}>Stay</a></li>
                <li><a href="#gifts" onClick={() => {props.onOpenArticle('gifts')}}>Gifts</a></li>
                <li><a href="#rsvp" onClick={() => {props.onOpenArticle('rsvp')}}>RSVP</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
