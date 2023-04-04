import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import "../assets/css/jobs.css";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const url =
    "https://backend-decoder-17.cloud.okteto.net/api/v1/site/cuvette/internships?page=1";

  const fetchJobDataOnLoad = async () => {
    try {
      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setJobs(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobDataOnLoad();
  }, []);

  return (
    <div className="jobs">
      <div className="navigation">
        <div className=" buttons">
          <button className="job-btn recent">Recents</button>
          <button className="job-btn search">Search  </button>
        </div>
        <div className="searchArea">
          {/* <div className="search-icon"><MdSearch /></div> */}
          <input
            type="text"
            className="search-btn search"
            placeholder="Search here..."
            autoFocus
          ></input>

        </div>
      </div>
      <div className="job-list">
        {jobs.data && (
          <div className="card">
            {jobs.data.map((job) => (
              <div key={job.id} className="job-info">
                <div className="card-heading">
                  <img
                    src={job.refUser.refCompanyProfile.logoUrl}
                    className="logo companylogo"
                    alt="Company Logo"
                  />
                  <div className="header">
                    <p className="companyname">
                      {job.refUser.refCompanyProfile.companyName}
                    </p>
                    <p className="job-desc">{job.refInternshipTitle.name}</p>
                  </div>
                </div>
                <div className="companydetails">
                  <p className="companylocation">
                    Office Location :
                    {job.refUser.refCompanyProfile.refLocation.state}
                  </p>
                  <p className="timeperiod">Time period : {job.duration}</p>
                  <p> {job.stipendRange}</p>
                </div>
                <div className="btnlist">
                  <button className="button view">View More</button>
                  <button className="button">Apply</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
