import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import "../assets/css/jobs.css";
import RecentJobs from "../components/elements/RecentJobs";
import SearchJobs from "../components/elements/SearchJobs";

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

  const fetchJobDataOnSearch = async (e) => {
    try {
      const role = e.target.value;
      await fetch(`https://backend-decoder-17.cloud.okteto.net/api/v1/site/naukri/search?role_id=${role}`)
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
    fetchJobDataOnSearch();
  }, []);

  console.log(jobs);

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
      {search && <SearchJobs />}
    </div>
  );
}
