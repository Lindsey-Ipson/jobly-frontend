import React from "react";
import { Card, CardTitle, CardText, Button } from 'reactstrap';
import './CompanyCard.css';

// Todo: remove default values
function CompanyCard ({ name = "Test Name", handle, description = "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here."}) {
  return (
    <div className="CompanyCard card">
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <p class="card-text">{ description }</p>
      </div>
    </div>
  )
}

export default CompanyCard;