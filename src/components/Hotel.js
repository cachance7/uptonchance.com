import React from 'react'
import PropTypes from 'prop-types'

const Hotel = props => (
  <div className="hotel">
    <div>{props.name}</div>
    <div>{props.address}</div>
    <div>{props.phone}</div>
    <div>
      <a rel="noref nofollow" href={props.link}>
        Link
      </a>
    </div>
  </div>
)

Hotel.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.object,
  img: PropTypes.string,
  link: PropTypes.string,
}

export default Hotel
