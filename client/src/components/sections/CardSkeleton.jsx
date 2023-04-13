import React from "react";
import Skeleton from "react-loading-skeleton";

export default function CardSkeleton() {
  return (
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
          <button className="flex text-black py-2 mx-2 w-32 rounded-full  text-center justify-center more">
            View
          </button>
          <a
            className="flex py-2 mx-2 w-32 rounded-full  text-center justify-center apply"
            target="_blank"
          >
            Apply
          </a>
        </div>
      </div>
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
          <button className="flex text-black py-2 mx-2 w-32 rounded-full  text-center justify-center more">
            View
          </button>
          <a
            className="flex py-2 mx-2 w-32 rounded-full  text-center justify-center apply"
            target="_blank"
          >
            Apply
          </a>
        </div>
      </div>
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
          <button className="flex text-black  py-2 mx-2 w-32 rounded-full  text-center justify-center more">
            View
          </button>
          <a
            className="flex py-2 mx-2 w-32 rounded-full  text-center justify-center apply"
            target="_blank"
          >
            Apply
          </a>
        </div>
      </div>
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
          <button className="flex text-black  py-2 mx-2 w-32 rounded-full  text-center justify-center more">
            View
          </button>
          <a
            className="flex py-2 mx-2 w-32 rounded-full  text-center justify-center apply"
            target="_blank"
          >
            Apply
          </a>
        </div>
      </div>
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
          <button className="flex text-black  py-2 mx-2 w-32 rounded-full  text-center justify-center more">
            View
          </button>
          <a
            className="flex py-2 mx-2 w-32 rounded-full  text-center justify-center apply"
            target="_blank"
          >
            Apply
          </a>
        </div>
      </div>
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
          <button className="flex text-black  py-2 mx-2 w-32 rounded-full  text-center justify-center more">
            View
          </button>
          <a
            className="flex py-2 mx-2 w-32 rounded-full  text-center justify-center apply"
            target="_blank"
          >
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}
