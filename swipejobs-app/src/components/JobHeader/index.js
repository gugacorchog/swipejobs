import React from "react";
import "../JobHeader/style.css"

function JobHeader(props) {
  return (
    <div className="job-header">
      <h5 className="card-title">{props.jobTitle}</h5>
      <p className="card-text">{props.company}</p>
    </div>
  )
}

export default JobHeader;