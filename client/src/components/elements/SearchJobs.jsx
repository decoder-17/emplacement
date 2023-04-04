import React, { useEffect, useState } from 'react'

export default function SearchJobs() {
  const [jobs, setJobs] = useState([]);
  const url =
    "https://backend-decoder-17.cloud.okteto.net/api/v1/site/cuvette/internships?";

  const fetchJobDataOnLoad = async (e) => {
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
                <p className="companylocation info">
                  Office Location :
                  {job.refUser.refCompanyProfile.refLocation.state}
                </p>
                <p className="timeperiod info">Time period : {job.duration} Months</p>
                <p className="stipend info"> {job.stipendRange}</p>
              </div>
              <div className="btnlist">
                <button className="secondary-btn more">View</button>
                <button className="secondary-btn apply">Apply</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
