import React, { useState, useEffect } from 'react';
import JobCardList from "./JobCardList";
import SearchForm from "../forms/SearchForm";
import JoblyApi from '../common/api';
import LoadingSpinner from '../common/LoadingSpinner';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

	useEffect(() => {
		async function getAllJobsOnMount() {
			const res = await JoblyApi.getJobs();
			setJobs(res);
		}
		getAllJobsOnMount();
	}, []);

	async function searchJobs(title) {
		let jobs = await JoblyApi.getJobs(title);
		setJobs(jobs);
	}

	if (!jobs) return <LoadingSpinner />;

	return (
		<div className="JobList">
			<h1>Explore Jobs</h1>
			<SearchForm searchItems={searchJobs}/>
      <JobCardList jobs={jobs} />
		</div>
	);
};

export default JobList;