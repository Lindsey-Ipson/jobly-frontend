import React from "react";
import './JobCard.css';

function JobCard ({
  // TODo change default values
  equity="0", id=7, salary=157000, title="Technical brewer", companyName="Sample Company"}) {
  return (
    <div className="JobCard card text-start">
      <div className="card-body">
        <h5 className="card-title">
          { title }
          {companyName && <h6 className="card-text companyName">{ companyName }</h6>}
        </h5>
        {salary ? <p className="card-text">Salary: { salary }</p> : <p className="card-text">Salary not listed</p>}
        {equity ? <p className="card-text">Equity: { equity }</p> : <p className="card-text">Equity not listed</p>}
      </div>
  </div>
  )
}

export default JobCard;