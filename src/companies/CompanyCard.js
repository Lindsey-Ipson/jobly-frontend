import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import './CompanyCard.css';

// Todo: remove default values
function CompanyCard ({ name, handle, description }) {
  return (
    <Link className="CompanyCard card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p class="card-text">{ description }</p>
      </div>
    </Link>
  )
}

export default CompanyCard;