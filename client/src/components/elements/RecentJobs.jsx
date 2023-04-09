import React, { useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../assets/css/jobs.css";
import CardSkeleton from "../sections/CardSkeleton";
import JobDetails from "./JobDetails"

export default function RecentJobs() {
  const [jobs, setJobs] = useState([]);
  const [errors, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [detailsVisible, setdetailsVisible] = useState(false)
  const [jobId, setjobId] = useState("")

  const url =
    "https://backend-decoder-17.cloud.okteto.net/api/v1/site/cuvette/internships?";

  const fetchJobDataOnLoad = async () => {
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
    fetchJobDataOnLoad();
  }, []);


  const passJobId = () => {
    setdetailsVisible(true)
  }
  return (
    <div className="job-list">

      <SkeletonTheme highlightColor="#c0bdc1">
        {
          isLoading ? (<CardSkeleton />) : jobs.data && (
            <div className="card">
              {
                jobs.data.map((job) => (
                  <div key={job._id} className="job-info">
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
                    <div className="btnlist flex flex-row px-3 py-3 my-3 self-center ">
                      <button className="flex py-2 mx-2 w-32 rounded-full  text-center justify-center more" onClick={() => {
                        setdetailsVisible(true);
                        setjobId(job._id);
                      }}>View</button>
                      <a
                        className="flex py-2 mx-2 w-40 rounded-full text-center justify-center apply"
                        href={`https://cuvette.tech/app/student/internship/${job._id}`}
                        target="_blank">
                        Apply
                      </a>
                    </div>
                    {/* {console.log(job)} */}


                  </div>

                ))}
            </div>
          )}
      </SkeletonTheme>
      {detailsVisible && <JobDetails Details={jobs} Id={jobId} detailsVisible={detailsVisible} toggle={setdetailsVisible} />}
    </div>
  );
}
