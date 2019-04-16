import React from 'react'
/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import PropTypes from 'prop-types'

const Link = styled.a(
  {
    marginRight: "5px"
  }
)

const Hotel = props => (
  <div className="hotel" css={{
    marginBottom: "30px"
    }}
  >
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <Link rel="noopener noreferrer" target="_blank" href={props.map}>
      {props.address1}<br/>{props.address2}
    </Link>
    <div>{props.phone}</div>
    <div
      css={{
        display: 'flex'
      }}
    >
      <Link rel="noopener noreferrer" target="_blank" href={props.website}>
        Website
      </Link>
    </div>
  </div>
)

Hotel.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  phone: PropTypes.string,
  address1: PropTypes.string,
  address2: PropTypes.string,
  img: PropTypes.string,
  website: PropTypes.string,
  map: PropTypes.string
}

export default Hotel
