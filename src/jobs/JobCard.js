import React from "react";
import UserContext from "../common/UserContext";
import './JobCard.css';

function JobCard({id, title, equity="Not listed", salary="Not listed", companyName=""}) {

  const { currentUserAppliedToJob, applyToJob } = React.useContext(UserContext);

  async function handleApplyToJob() {
    if (!currentUserAppliedToJob(id)) {
      await applyToJob(id);
    }
  }

  return (
    <div className="JobCard card text-start">
      <div className="card-body">
        <h5 className="card-title">
          {title}
          {companyName && <h6 className="card-text companyName">{companyName}</h6>}
        </h5>
        {salary ? <p className="card-text">Salary: {salary}</p> : <p className="card-text">Salary not listed</p>}
        {equity ? <p className="card-text">Equity: {equity}</p> : <p className="card-text">Equity not listed</p>}
        {!currentUserAppliedToJob(id) &&
          <button className="btn btn-primary" onClick={handleApplyToJob}>Apply</button>}
        {currentUserAppliedToJob(id) &&
          <button className="btn btn-outline-primary disabled">Applied</button>}
      </div>
    </div>
  )
}

export default JobCard;