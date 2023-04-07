import React, { useState, useEffect } from 'react'
import '../../assets/css/jobdetails.css'
export default function JobDetails({ Details, Id, detailsVisible }) {

  const jobs = Details
  const [displayData, setdisplayData] = useState('')
  useEffect(() => {
    setdisplayData(Id);
  }, [])
  return (
    jobs.data && (
      <div className="modal">
        {
          jobs.data.filter((job) => {
            return displayData === '' ? job : job._id.includes(displayData);
          }).map((job) => (
            <div className='modal-bg'>
              <div className='close'><button className='closebtn' onClick={() => { detailsVisible(false) }}>X</button></div>
              <div className="modal-details">
                <div className="modal-header">{job.refInternshipTitle.name}</div>
              </div>
            </div>
          ))
        }
      </div>
    ))
}
