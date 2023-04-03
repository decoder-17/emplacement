import React from "react";
import "../assets/css/jobs.css";

export default function Jobs() {
  return (
    <div className="jobs">
      <div className="navigation">
        <div className=" buttons">
          <button className="job-btn recent">Recents</button>
          <button className="job-btn search">Search</button>
        </div>
        <div >
          <input type="text" className="search-btn search" placeholder="Search here..." autoFocus />
        </div>
      </div>
    </div>
  );
}
