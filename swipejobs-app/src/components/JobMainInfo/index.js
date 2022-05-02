import React from "react";
import "./style.css"

function JobMainInfo(props) {
  return (
    <div className=" main-info">
      <div className="row">
        <div className="col-auto mr-auto"><p className="mainInfo">Distance</p></div>
        <div className="col-auto"><p className= "mainInfo">Hourly Rate</p></div>
        <div className="w-100"></div>
        <div className="col-auto mr-auto"><p className="card-text info">{props.distance} miles</p></div>
  <div className="col-auto"><p className="card-text info">${props.hourlyRateInDollar}</p></div>
      </div>
      
      
    </div>
  )
}

export default JobMainInfo;