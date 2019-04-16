import React from 'react'
import Article from '../Article'
import patio from '../../images/GVC-Patio-1-528x352.jpg'
// import Map from '../../components/Map'

class Event extends Article {
  renderContent() {
    return (
      <React.Fragment>
        <span className="image main">
          <img src={patio} alt="" />
        </span>
        <p>
        Saturday September 7, 2019<br/>
        5:30 – 10pm PDT
        </p>
        <h3>Venue</h3>
        <p>
          Our wedding will take place on the terrace of{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://botanicgardens.uw.edu/washington-park-arboretum/visit/venue-rental/"
          >
            Wisteria Hall
          </a>{' '}
          — an outdoor event space at the{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://botanicgardens.uw.edu/washington-park-arboretum/"
          >
            University of Washington Arboretum
          </a>
          .{' '}
        </p>
        <h3>Attire</h3>
        <p>Lauren and Casey will be wearing a dress and tuxedo respectively. You may wear whatever makes you feel comfortable (clothes are preferred).</p>
        <h3>Food &amp; Drink</h3>
        <p>Dinner will be provided by local food trucks after the service. We will be serving a variety of mules made with Rachel’s Ginger Beer — one of our local favorites. A selection of beer, wine, and spirits will also be available.</p>
        {/* <Map /> */}
      </React.Fragment>
    )
  }
}
Event.title = 'Event'

export default Event
