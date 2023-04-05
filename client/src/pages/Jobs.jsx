import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import "../assets/css/jobs.css";
import RecentJobs from "../components/elements/RecentJobs";

export default function Jobs() {

  const [recent, setrecent] = useState(true)
  const [search, setsearch] = useState(false)
  const showRecent = () => {
    setrecent(true)
    setsearch(false)
  }
  const showSearch = () => {
    setrecent(false)
    setsearch(true)
  }

  const [jobs, setJobs] = useState([]);
  const [errors, setError] = useState([]);

  const fetchJobDataOnSearch = async (e) => {
    setError([]);
    try {
      const role = e.target.value;
      await fetch(`https://backend-decoder-17.cloud.okteto.net/api/v1/site/naukri/search?role_id=${role}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong.");
          }
        })
        .then((data) => {
          setJobs(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchJobDataOnSearch();
    }, 2000);
  }, []);

  return (
    <div className="jobs">
      <div className="navigation">
        <div className=" buttons">
          <button className="job-btn recent" onClick={showRecent}>Recents</button>
          <button className="job-btn search" onClick={showSearch}>Search</button>
        </div>
        {search && <div className="searchArea">
          <input
            type="text"
            className="search-btn search"
            placeholder="Search here..."
            onChange={fetchJobDataOnSearch}
          />
        </div>}
      </div>
      {recent && <RecentJobs />}
      {search && <div className="job-list">
        {jobs.jobDetails && (
          <div className="card">
            {jobs.jobDetails.map((job) => (
              <div key={job.id} className="job-info">
                <div className="card-heading">
                  <img
                    src={""}
                    className="logo companylogo"
                    alt="Company Logo"
                  />
                  <div className="header">
                    <p className="companyname">
                      {job.companyName}
                    </p>
                    <p className="job-desc">{job.title}</p>
                  </div>
                </div>
                <div className="companydetails">
                  <p className="companylocation info">
                    Office Location :

                  </p>
                  <p className="timeperiod info">Time period :  Months</p>
                  <p className="stipend info"> </p>
                </div>
                <div className="btnlist">
                  <button className="secondary-btn more">View</button>
                  <a href={`https://www.naukri.com${job.jdURL}`} className="secondary-btn apply" target="_blank">Apply</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>}
    </div>
  );
}
