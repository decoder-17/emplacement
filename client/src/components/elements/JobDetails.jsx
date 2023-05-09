import React, { useState, useEffect } from "react";
import "../../assets/css/jobdetails.css";
export default function JobDetails({ Details, Id, detailsVisible, toggle }) {
  const jobs = Details;
  console.log(jobs);
  const [displayData, setdisplayData] = useState("");
  useEffect(() => {
    setdisplayData(Id);
  }, []);
  const toggleModal = () => {
    detailsVisible && toggle(false);
  };

  return (
    (jobs.data && (
      <div className="modal bg-opacity-100 bg-[#FFFFFF] dark:bg-[#202528] ">
        {jobs.data
          .filter((job) => {
            return displayData === "" ? job : job._id.includes(displayData);
          })
          .map((job) => (
            <div className="modal-bg" key={job._id}>
              <div className="close">
                <button className="closebtn" onClick={toggleModal}>
                  X
                </button>
              </div>
              <h1 className="modal-header text-3xl text-center text text-black dark:text-white">
                Job Details
              </h1>
              <div className="modal-content mt-4">
                <div className="modal-details space-y-4 text-xl justify-center self-center">
                  <div className="job-role font-bold flex gap-4 text-black dark:text-white">
                    Job Role:
                    <div className="val font-thin text-black dark:text-white">
                      {job.refInternshipTitle.name}
                    </div>
                  </div>
                  <div className="company font-bold flex gap-4 text-black dark:text-white">
                    Company:{" "}
                    <div className="val text-black font-thin dark:text-white">
                      {job.refUser.refCompanyProfile.companyName}
                    </div>
                  </div>
                  {job.refUser.refCompanyProfile?.refLocation?.city && (
                    <div className="location font-bold flex gap-4 text-black dark:text-white">
                      Location:{" "}
                      <div className="val text-black font-thin dark:text-white">
                        {job.refUser.refCompanyProfile.refLocation.city}
                      </div>
                    </div>
                  )}
                  <div className="modal-skills font-bold text-black dark:text-white">
                    {
                      <ul className="skills mt-4 flex gap-4 flex-wrap">
                        {job.stipendRange && (
                          <div className="job-offer flex gap-4 items-center font-bold text-black dark:text-white">
                            Stipend:{" "}
                            <div className="val font-thin text-black dark:text-white text-lg">
                              Rs.{job.stipendRange[0]} - Rs.
                              {job.stipendRange[1]}
                            </div>
                          </div>
                        )}
                      </ul>
                    }
                  </div>
                  {job.jobOffer.length > 0 && (
                    <div className="job-offer flex gap-4 items-center font-bold text-black dark:text-white">
                      Job Offer:{" "}
                      <div className="val font-thin text-black dark:text-white text-lg">
                        {job.jobOffer[0]}LPA - {job.jobOffer[1]}LPA
                      </div>
                    </div>
                  )}
                  <div className="modal-skills font-bold text-black dark:text-white">
                    {
                      <ul className="skills mt-4 flex gap-4 flex-wrap">
                        {job.refSkills.map((skill) => (
                          <li className="val text-lg border border-black dark:border-white px-2 py-0.5 rounded-md font-thin text-black dark:text-white">
                            {skill.name}
                          </li>
                        ))}
                      </ul>
                    }
                  </div>
                </div>
              </div>
              <div className="btn-list flex flex-row px-3 py-3 my-3 self-center justify-center ">
                <a
                  className="flex py-2 mx-2 w-32 rounded-full text-center justify-center apply"
                  href={`https://cuvette.tech/app/student/internship/${job._id}`}
                  target="_blank"
                >
                  Apply
                </a>
                <a
                  className="flex text-black py-2 mx-2 w-32 rounded-full  text-center justify-center more"
                  onClick={() => {
                    toggleModal();
                  }}
                >
                  Close
                </a>
              </div>
            </div>
          ))}
      </div>
    )) ||
    (jobs.jobDetails && (
      <div className="modal bg-opacity-100 bg-[#FFFFFF] dark:bg-[#202528] ">
        {jobs.jobDetails
          .filter((job) => {
            return displayData === "" ? job : job.jobId.includes(displayData);
          })
          .map((job) => (
            <div className="modal-bg" key={job.jobId}>
              <div className="close">
                <button className="closebtn" onClick={toggleModal}>
                  X
                </button>
              </div>
              <h1 className="modal-header text-3xl text-center text text-black dark:text-white">
                Job Details
              </h1>
              <div className="modal-content mt-4">
                <div className="modal-details space-y-4 text-xl justify-center self-center">
                  <div className="job-role font-bold flex gap-4 text-black dark:text-white">
                    Job Role:
                    <div className="val font-thin text-black dark:text-white">
                      {job.title}
                    </div>
                  </div>
                  <div className="company font-bold flex gap-4 text-black dark:text-white">
                    Company:{" "}
                    <div className="val text-black font-thin dark:text-white">
                      {job.companyName}
                    </div>
                  </div>
                  {
                    <div className="location font-bold flex gap-4 text-black dark:text-white">
                      Location:{" "}
                      <div className="val text-black font-thin dark:text-white">
                        {job.placeholders[2].label}
                      </div>
                    </div>
                  }
                  <div className="modal-skills font-bold text-black dark:text-white">
                    {
                      <ul className="skills mt-4 flex gap-4 flex-wrap">
                        {
                          <div className="job-offer flex gap-4 items-center font-bold text-black dark:text-white">
                            Stipend:{" "}
                            <div className="val font-thin text-black dark:text-white text-lg">
                              {job.placeholders[1].label}
                            </div>
                          </div>
                        }
                      </ul>
                    }
                  </div>
                  <div className="modal-skills font-bold text-black dark:text-white">
                    {
                      <ul className="skills mt-4 flex gap-4 flex-wrap">
                        {
                          <li className="val text-lg border border-black dark:border-white px-2 py-0.5 rounded-md font-thin text-black dark:text-white">
                            {job.tagsAndSkills}
                          </li>
                        }
                      </ul>
                    }
                  </div>
                </div>
              </div>
              <div className="btn-list flex flex-row px-3 py-3 my-3 self-center justify-center ">
                <a
                  className="flex py-2 mx-2 w-32 rounded-full text-center justify-center apply"
                  href={`https://www.naukri.com${job.jdURL}`}
                  target="_blank"
                >
                  Apply
                </a>
                <a
                  className="flex text-black py-2 mx-2 w-32 rounded-full  text-center justify-center more"
                  onClick={() => {
                    toggleModal();
                  }}
                >
                  Close
                </a>
              </div>
            </div>
          ))}
      </div>
    ))
  );
}
