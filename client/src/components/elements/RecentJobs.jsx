import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../assets/css/jobs.css";

export default function RecentJobs() {
  const [jobs, setJobs] = useState([]);
  const [errors, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url =
    "https://backend-decoder-17.cloud.okteto.net/api/v1/site/cuvette/internships?";

  const fetchJobDataOnSearch = async () => {
    setError([]);
    try {
      await fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong.");
          }
        })
        .then((data) => {
          setJobs(data);
          setIsLoading(false);
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
    <div className="job-list">

      <SkeletonTheme highlightColor="#c0bdc1">
        {isLoading ? (<> <div className="card">
          <div className="job-info">
            <div className="card-heading">
              <div className="header">
                <p className="companyname">
                  <Skeleton />
                </p>
                <p className="job-desc">
                  <Skeleton />
                </p>
              </div>
            </div>
            <div className="companydetails">
              <p className="companylocation info">
                <Skeleton />
              </p>
              <p className="timeperiod info">
                <Skeleton />
              </p>
              <p className="stipend info">
                <Skeleton />
              </p>
            </div>
            <div className="btnlist">
              <button className="secondary-btn more">
                View
              </button>
              <a className="secondary-btn apply" target="_blank">
                Apply
              </a>
            </div>
          </div>
        </div>
          <div className="card">
            <div className="job-info">
              <div className="card-heading">
                <div className="header">
                  <p className="companyname">
                    <Skeleton />
                  </p>
                  <p className="job-desc">
                    <Skeleton />
                  </p>
                </div>
              </div>
              <div className="companydetails">
                <p className="companylocation info">
                  <Skeleton />
                </p>
                <p className="timeperiod info">
                  <Skeleton />
                </p>
                <p className="stipend info">
                  <Skeleton />
                </p>
              </div>
              <div className="btnlist">
                <button className="secondary-btn more">
                  View
                </button>
                <a className="secondary-btn apply" target="_blank">
                  Apply
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="job-info">
              <div className="card-heading">
                <div className="header">
                  <p className="companyname">
                    <Skeleton />
                  </p>
                  <p className="job-desc">
                    <Skeleton />
                  </p>
                </div>
              </div>
              <div className="companydetails">
                <p className="companylocation info">
                  <Skeleton />
                </p>
                <p className="timeperiod info">
                  <Skeleton />
                </p>
                <p className="stipend info">
                  <Skeleton />
                </p>
              </div>
              <div className="btnlist">
                <button className="secondary-btn more">
                  View
                </button>
                <a className="secondary-btn apply" target="_blank">
                  Apply
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="job-info">
              <div className="card-heading">
                <div className="header">
                  <p className="companyname">
                    <Skeleton />
                  </p>
                  <p className="job-desc">
                    <Skeleton />
                  </p>
                </div>
              </div>
              <div className="companydetails">
                <p className="companylocation info">
                  <Skeleton />
                </p>
                <p className="timeperiod info">
                  <Skeleton />
                </p>
                <p className="stipend info">
                  <Skeleton />
                </p>
              </div>
              <div className="btnlist">
                <button className="secondary-btn more">
                  View
                </button>
                <a className="secondary-btn apply" target="_blank">
                  Apply
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="job-info">
              <div className="card-heading">
                <div className="header">
                  <p className="companyname">
                    <Skeleton />
                  </p>
                  <p className="job-desc">
                    <Skeleton />
                  </p>
                </div>
              </div>
              <div className="companydetails">
                <p className="companylocation info">
                  <Skeleton />
                </p>
                <p className="timeperiod info">
                  <Skeleton />
                </p>
                <p className="stipend info">
                  <Skeleton />
                </p>
              </div>
              <div className="btnlist">
                <button className="secondary-btn more">
                  View
                </button>
                <a className="secondary-btn apply" target="_blank">
                  Apply
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="job-info">
              <div className="card-heading">
                <div className="header">
                  <p className="companyname">
                    <Skeleton />
                  </p>
                  <p className="job-desc">
                    <Skeleton />
                  </p>
                </div>
              </div>
              <div className="companydetails">
                <p className="companylocation info">
                  <Skeleton />
                </p>
                <p className="timeperiod info">
                  <Skeleton />
                </p>
                <p className="stipend info">
                  <Skeleton />
                </p>
              </div>
              <div className="btnlist">
                <button className="secondary-btn more">
                  View
                </button>
                <a className="secondary-btn apply" target="_blank">
                  Apply
                </a>
              </div>
            </div>
          </div>
        </>
        )
          : jobs.data && (
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
                    <p className="timeperiod info">
                      Time period : {job.duration} Months
                    </p>
                    <p className="stipend info"> {job.stipendRange}</p>
                  </div>
                  <div className="btnlist">
                    <button className="secondary-btn more">View</button>
                    <a
                      className="secondary-btn apply"
                      href={`https://cuvette.tech/app/student/internship/${job._id}`}
                      target="_blank"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
      </SkeletonTheme>
    </div>
  );
}
