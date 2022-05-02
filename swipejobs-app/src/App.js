import './App.css';
import React, { useState, useEffect } from 'react';
import Wrapper from "./components/Wrapper/index";
import Header from "./components/Header/index.js";
import JobCarousel from "./components/JobCarousel";
import { JobService } from './services/JobService';

function App() {
  // API call backs to workerProfile and jobList URLs using JobServices.js
  const [workerProfile, setWorkerProfile] = useState([]);
  const [jobList, setJobList] = useState([]);

  useEffect(async () => {
    const workerProfile = await JobService.getWorkerProfile()
    if (workerProfile) {
      setWorkerProfile(workerProfile);
    }
    const jobs = await JobService.getJobList();
    if (jobs) {
      setJobList(jobs);
    }
  }, []);

  return (
    <Wrapper>
      <Header workerProfile={workerProfile} />
      <JobCarousel jobs={jobList} />
    </Wrapper>
  );
}


export default App;
