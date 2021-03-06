import React from 'react'
import Article from '../Article'
/** @jsx jsx */
import { jsx } from "@emotion/core"
import AddToCalendar from '../AddToCalendar'
import patio from '../../images/GVC-Patio-1-528x352.jpg'
// import Map from '../../components/Map'

class Event extends Article {
  renderContent() {
    return (
      <React.Fragment>
        <span className="image main">
          <img src={patio} alt="" />
        </span>
        <div css={{display: "flex", justifyContent: "space-between"}}>
          <div>
            <p>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://goo.gl/maps/i36bJX5jFSCpMFpn7"
              >
                Wisteria Hall
                <br />
                2300 Arboretum Dr E<br />
                Seattle, WA 98112
              </a>
            </p>
          </div>
          <div>
            <p css={{marginBottom: "10px"}}>
              Saturday, September 7, 2019<br/>
              5:30 – 10pm PDT
            </p>
            <AddToCalendar />
          </div>
        </div>
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
          .
        </p>
        <h3>Parking</h3>
        <p>Navigating to Wisteria Hall will take you to the nearby lot, which has a sign for the Donald G. Graham Visitor Center.</p>
        <h3>Attire</h3>
        <p>
          Lauren and Casey will be wearing a dress and tuxedo respectively. You
          may wear whatever makes you feel comfortable (clothes are preferred).
        </p>
        <h3>Unplugged Ceremony</h3>
        <p>Our amazing photographer, Alex, will be capturing all of the
          wonderful moments — with this in mind, we ask that phones and cameras
          be turned off during the ceremony.</p>
        <h3>Food &amp; Drink</h3>
        <p>
          Dinner will be provided by a local food truck after the ceremony. We
          will be serving a variety of mule cocktails made with Rachel’s Ginger Beer —
          one of our local favorites. A selection of beer, wine, and spirits
          will also be available.
        </p>
        <h3>Merriment</h3>
        <p>
          After dinner, we hope you will join us on the dance floor!
        </p>
        {/* <Map /> */}
      </React.Fragment>
    )
  }
}
Event.title = 'Event'

export default Event
