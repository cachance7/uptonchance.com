import React from 'react'
/** @jsx jsx */
import { jsx } from "@emotion/core"

// import '../assets/css/theme6.css'

const AddToCalendar = () => (
  <div title="Add to Calendar" className="addeventatc"
    css={{
      padding: "13px 10px 9px 41px !important",
      fontSize: "13px !important"
    }}>
      Add to Calendar
      <span className="arrow atc_node notranslate">&nbsp;</span>
      <span className="start">09/07/2019 05:30 PM</span>
      <span className="end">09/07/2019 10:00 PM</span>
      <span className="timezone">America/Los_Angeles</span>
      <span className="title">Lauren &amp; Casey’s Wedding</span>
      <span className="description">Lauren &amp; Casey’s Wedding</span>
      <span className="location">Wisteria Hall</span>
  </div>
)

export default AddToCalendar
