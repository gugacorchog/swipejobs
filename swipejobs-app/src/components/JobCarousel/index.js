import React from "react";
import JobCard from "../JobCard/index";
import { Carousel } from "react-bootstrap";
import "./style.css"
import { formatDistance, formatRate } from "../../utils/Utils.js";

// Main carousel populated with one job card per each position
function JobCarousel(props) {
    const { jobs } = props;

    return (
        <div>
            <div className='container-fluid carousel-container' >
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            {jobs && jobs.map(worker => (
                                <Carousel.Item key={worker.jobId}>
                                    <JobCard
                                        jobId={worker.jobId}
                                        jobImage={worker.jobTitle.imageUrl}
                                        jobTitle={worker.jobTitle.name}
                                        company={worker.company.name}
                                        distance={formatDistance(worker.milesToTravel)}
                                        hourlyRateInDollar={formatRate(worker.wagePerHourInCents)}
                                        shiftDates={worker.shifts}
                                        location={worker.company.address.formattedAddress}
                                        reportTo={worker.company.reportTo}
                                        requirements={worker.requirements}
                                        workerId={props.workerId}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCarousel;