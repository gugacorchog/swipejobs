import React from "react"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMapMarkerAlt, faTools, faUser } from '@fortawesome/free-solid-svg-icons'
import { formatShiftDate } from '../../utils/Utils';

// Bulk information about each position

// icons for each section
const shiftIcon = <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
const locationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
const requirementIcon = <FontAwesomeIcon icon={faTools} size="lg" />
const reportIcon = <FontAwesomeIcon icon={faUser} size="lg" />


const JobInfoList =(props) => {
  // render the shift dates in a list based on the array of shifts for that position
  const renderShiftDates = () => {
    if (props.shiftDates && props.shiftDates.length > 0) {
      return props.shiftDates.map(shiftDate => {
        return (
          <li key={shiftDate.startDate}>
            {formatShiftDate(shiftDate.startDate, shiftDate.endDate)}
          </li>)
      })
    }
    return null;
  }
  // render the requirements in a list based on the array of requirements for that position
  const renderRequirements = () => {
    if (props.requirements && props.requirements.length > 0) {
      return props.requirements.map(requirement => <li key={requirement}>{requirement}</li>);
    };
    return <li>No requirements for this position.</li>
  };

  return (

    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 align-self-center">
            {shiftIcon}
          </div>
          <div className="col-8">
            <div className="row">
              <p className="infoTitles">Shift Dates</p>
            </div>
            <div className="row">
              <ul>
                {renderShiftDates()}
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 align-self-center">
            {locationIcon}
          </div>
          <div className="col-8">
            <div className="row">
              <p className="infoTitles">Location</p>
            </div>
            <div className="row">
              {props.location}
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 align-self-center">
            {requirementIcon}
          </div>
          <div className="col-8">
            <div className="row">
              <p className="infoTitles">Requirements</p>
            </div>
            <div className="row">
              <ul>
                {renderRequirements()}
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 align-self-center">
            {reportIcon}
          </div>
          <div className="col-8">
            <div className="row">
              <p className="infoTitles">Report To</p>
            </div>
            <div className="row">
              {props.reportTo.name} {props.reportTo.phone}
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default JobInfoList;