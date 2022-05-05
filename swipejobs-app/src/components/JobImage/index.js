import React from "react";

const JobImage =(props) => {
    return (
        <img
            src={props.jobImage}
            className="card-img-top"
            alt={props.JobTitle}>
        </img>
    )
}

export default JobImage;