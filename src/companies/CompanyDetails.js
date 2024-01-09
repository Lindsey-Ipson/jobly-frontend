import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../common/api';
import JobCardList from '../jobs/JobCardList';
import LoadingSpinner from '../common/LoadingSpinner';
import './CompanyDetails.css';

function CompanyDetails () {

  const { handle } = useParams();

  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompanyAndJobs() {
      let company = await JoblyApi.getCompany(handle);
      setCompany(company);
    }
    getCompanyAndJobs();
  }
  , [handle]);

  if (!company) return <LoadingSpinner />;

  const { name, description, jobs } = company;

	return (
		<div className="CompanyDetails">
			<h1>{ name }</h1>
			<p className="CompanyDetails-description">{ description }</p>
      <JobCardList jobs={ jobs } />
		</div>
	);
}

export default CompanyDetails;