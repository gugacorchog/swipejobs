import React, { useState, useEffect } from "react";
import { JobService } from '../../services/JobService';
import JobImage from "../JobImage/index";
import JobHeader from "../JobHeader/index";
import JobMainInfo from "../JobMainInfo/index";
import JobInfoList from "../JobInfoList/index";
import JobButton from "../JobButton/index";

// Job card displayed specific per each position
function JobCard(props) {
    // call backs to accept and reject URLs using JobServices.js
    const [acceptList, setAcceptList] = useState([]);
    const [rejectList, setRejectList] = useState([]);

    useEffect(async () => {
        const acceptList = await JobService.getAcceptList(props.jobId)
        if (acceptList) {
            setAcceptList(acceptList);
        }
        const rejectList = await JobService.getRejectList();
        if (rejectList) {
            setRejectList(rejectList);
        }
    }, []);
    // messages to be displayed when JobButon is clicked
    const acceptMessage = (acceptList.message ? acceptList.message : "Thanks, position accepted successfully.");
    const rejectMessage = "Thanks, position rejected successfully.";

    return (
        <div className="card jobCard" >
            <JobImage
                jobImage={props.jobImage}
                jobTitle={props.jobTitle}
            />
            <JobHeader
                jobTitle={props.jobTitle}
                company={props.company}
            />
            <JobMainInfo
                distance={props.distance}
                hourlyRateInDollar={props.hourlyRateInDollar}
            />
            <JobInfoList
                shiftDates={props.shiftDates}
                location={props.location}
                reportTo={props.reportTo}
                requirements={props.requirements}
            />
            <div className="card-body d-flex justify-content-around">
                <JobButton theme="light" message={rejectMessage} name={"No Thanks"} />
                <JobButton theme="dark" message={acceptMessage} name={"I'II Take it"} />
            </div>
        </div>
    );
}

export default JobCard;