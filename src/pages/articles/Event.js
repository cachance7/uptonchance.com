import React from 'react'
import Article from '../../components/Article'
import patio from '../../images/GVC-Patio-1-528x352.jpg'
import Map from '../../components/Map'

class Event extends Article {
  renderContent() {
    return (
      <div>
        <h2 className="major">Event</h2>
        <span className="image main">
          <img src={patio} alt="" />
        </span>
        <p>
          Our wedding will take place outside on the terrace of{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://botanicgardens.uw.edu/washington-park-arboretum/visit/venue-rental/"
          >
            Wisteria Hall
          </a>{' '}
          — the event space for the{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://botanicgardens.uw.edu/washington-park-arboretum/"
          >
            University of Washington Arboretum
          </a>
          .{' '}
        </p>
        <Map />
      </div>
    )
  }
}

export default Event
