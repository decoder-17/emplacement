import React, { useState, useEffect } from "react";
import "../../assets/css/jobdetails.css";
export default function JobDetails({ Details, Id, detailsVisible, toggle }) {
  const jobs = Details;
  const [displayData, setdisplayData] = useState("");
  useEffect(() => {
    setdisplayData(Id);
  }, []);

  const toggleModal = () => {
    detailsVisible && toggle(false);
  };

  return (
    (jobs.data && (
      <div className="modal">
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
              <h1 className="text-3xl text-center text-">Job Details</h1>
              <div className="modal-details text-xl justify-center self-center">
                <div className="job-role">
                  Job Role: {job.refInternshipTitle.name}
                </div>
                <div className="company">
                  Company: {job.refUser.refCompanyProfile.companyName}
                </div>
                <div className="location">
                  Location: {job.refUser.refCompanyProfile.refLocation.city}
                </div>
                <div className="modal-skills">
                  Skills Required:{" "}
                  {
                    <ul>
                      {job.refSkills.map((skill) => (
                        <li>{skill.name}</li>
                      ))}
                    </ul>
                  }
                </div>
                {job.jobOffer.length > 0 && (
                  <div className="job-offer">
                    Job Offer: {job.jobOffer[0]} - {job.jobOffer[1]}
                  </div>
                )}
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
      <div className="modal">
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
              <div className="modal-details">
                <div className="modal-header">{job.companyName}</div>
              </div>
            </div>
          ))}
      </div>
    ))
  );
}
