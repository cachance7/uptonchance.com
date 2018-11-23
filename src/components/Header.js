import React from 'react'
import PropTypes from 'prop-types'

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
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Story</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Dates</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Event</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Event</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Event</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>RSVP</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
