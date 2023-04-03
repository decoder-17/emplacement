import React, { useEffect, useState } from "react";
import "../assets/css/jobs.css";

export default function Jobs() {

  const [jobs, setJobs] = useState([]);
  const url = "https://backend-decoder-17.cloud.okteto.net/api/v1/site/cuvette/internships?page=1";

  const fetchJobData = () => {
    try {
      fetch(url).then(response => {
        return response.json()
      }).then(data => {
        setJobs(data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchJobData()
  }, [])


  console.log(jobs)
  return (
    <div className="jobs">
      <div className="navigation">
        <div className=" buttons">
          <button className="job-btn recent">Recents</button>
          <button className="job-btn search">Search</button>
        </div>
        <div >
          <input type="text" className="search-btn search" placeholder="Search here..." autoFocus />
        </div>
      </div>
      <div className="job-list">
        {/* {jobs.length > 0 && (
          <ul className="card">
            {jobs.map(job => (
              <li key={job.id} className="job-title">{job.internshipMode}</li>
            ))}
          </ul>)} */}
      </div>
    </div >
  );
}
