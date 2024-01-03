import React, { useState, useEffect } from 'react';
import JoblyApi from '../common/api';
import LoadingSpinner from '../common/LoadingSpinner';
import CompanyCard from './CompanyCard';
import SearchForm from '../forms/SearchForm';

/** Shows list of companies
 *
 * State: companies
 *
 * On mount, retrieves companies from API
 *
 * When search form submitted, retrieves companies filtered by that name
 */

const CompanyList = () => {
	console.debug('CompanyList');

	const [companies, setCompanies] = useState([]);

	useEffect(() => {
		async function getAllCompaniesOnMount() {
			const res = await JoblyApi.getCompanies();
			setCompanies(res);
		}
		getAllCompaniesOnMount();
	}, []);

	async function searchCompanies(name) {
		let companies = await JoblyApi.getCompanies(name);
		setCompanies(companies);
	}

	if (!companies) return <LoadingSpinner />;

	return (
		<div className="CompanyList">
			<h1>Explore Companies</h1>
			<SearchForm searchItems={searchCompanies}/>

			{companies.map((comp) => (
				<CompanyCard
					key={comp.handle}
					handle={comp.handle}
					name={comp.name}
					description={comp.description}
					logoUrl={comp.logoUrl}
				/>
			))}
		</div>
	);
};

export default CompanyList;