import React, { useState } from 'react'

export default function JobDetails(Details) {

  const [popup, setpopup] = useState(true)
  if (!popup) { return null }
  const job = Details.Details
  return (
    <div className='modal-bg'>
      <div className='close'><button className='closebtn' onClick={() => {
        setpopup(false)
      }}
      >X</button></div>
      <div className="modal-details">
        <div className="modal-header"></div>
      </div>
    </div>
  )
}
