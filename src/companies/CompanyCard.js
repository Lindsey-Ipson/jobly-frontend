import React from "react";
import { Link } from "react-router-dom";
import './CompanyCard.css';

function CompanyCard ({ name, handle, description }) {
  return (
    <Link className="CompanyCard card text-start" to={`/companies/${handle}`}>
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p className="card-text">{ description }</p>
      </div>
    </Link>
  )
}

export default CompanyCard;