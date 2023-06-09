import React, { useEffect, useState, useContext } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../assets/css/jobs.css";
import CardSkeleton from "../sections/CardSkeleton";
import JobDetails from "./JobDetails";
import companylogo from "../../assets/images/company.svg";
import { ThemeContext } from "../../App";

export default function RecentJobs() {
  const { theme } = useContext(ThemeContext);
  const [jobs, setJobs] = useState([]);
  const [errors, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [detailsVisible, setdetailsVisible] = useState(false);
  const [jobId, setjobId] = useState("");

  const url =
    "https://backend-decoder-17.cloud.okteto.net/api/v1/site/cuvette/internships?";

  const fetchJobDataOnLoad = async () => {
    setIsLoading(true);
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
    const interval = setTimeout(() => {
      fetchJobDataOnLoad();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const passJobId = () => {
    setdetailsVisible(true);
  };
  return (
    <div className={theme ? "dark" : ""}>
      <div className="hero bg-[#F6F6F9] dark:bg-[#181A1E]">
        <div className="job-list">
          <SkeletonTheme highlightColor="#c0bdc1">
            {isLoading ? (
              // <CardSkeleton />
              <>
                <div
                  aria-hidden={true}
                  className="h-20 w-20 mt-48 animate-spin rounded-full border-[8px] border-purple-600 border-r-white"
                ></div>
              </>
            ) : (
              jobs.data && (
                <div className="card ">
                  {jobs.data.map((job) => (
                    <div
                      key={job._id}
                      className="job-info bg-[#F6F6F9] dark:bg-[#202528]"
                    >
                      <div className="card-heading">
                        <img
                          src={
                            job.refUser.refCompanyProfile.logoUrl || companylogo
                          }
                          className="logo companylogo  rounded-full"
                          alt="Company Logo"
                        />
                        <div className="header">
                          <p className="companyname">
                            {job.refUser.refCompanyProfile.companyName}
                          </p>
                          <p className="job-desc">
                            {job.refInternshipTitle.name}
                          </p>
                          {/* <p>posted at</p> */}
                        </div>
                      </div>
                      <div className="companydetails">
                        {job.refUser.refCompanyProfile.refLocation?.state && (
                          <p className="companylocation info">
                            Location :{" "}
                            {job.refUser.refCompanyProfile.refLocation.state}
                          </p>
                        )}
                        <p className="info">Mode : {`${job.internshipMode}`}</p>
                        <p className="timeperiod info">
                          Time period : {job.duration} Months
                        </p>
                        <p className="stipend info">
                          Stipend : Rs. {job.stipendRange[0]} - Rs.{" "}
                          {job.stipendRange[1]}{" "}
                        </p>
                      </div>
                      <div className="btnlist flex flex-row px-3 py-3 my-3 self-center ">
                        <a
                          className="flex text-black py-2 mx-2 w-32 rounded-full  text-center justify-center more"
                          onClick={() => {
                            setdetailsVisible(true);
                            setjobId(job._id);
                          }}
                        >
                          View
                        </a>
                        <a
                          className="flex py-2 mx-2 w-32 rounded-full text-center justify-center apply"
                          href={`https://cuvette.tech/app/student/internship/${job._id}`}
                          target="_blank"
                        >
                          Apply
                        </a>
                      </div>
                      {/* {console.log(job)} */}
                    </div>
                  ))}
                </div>
              )
            )}
          </SkeletonTheme>
          {detailsVisible && (
            <JobDetails
              Details={jobs}
              Id={jobId}
              detailsVisible={detailsVisible}
              toggle={setdetailsVisible}
            />
          )}
        </div>
      </div>
    </div>
  );
}
