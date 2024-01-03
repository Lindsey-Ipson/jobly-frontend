import React, { useState, useEffect } from "react";
import JoblyApi from "../common/api";
import LoadingSpinner from "../common/loadingSpinner";


/** Shows list of companies
 *
 * State: companies
 * 
 * On mount, retrieves companies from API
 * 
 * When search form submitted, retrieves companies filtered by that name
*/

const CompanyList = () => {
  console.debug("CompanyList");

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
    <div className="ComppanyList">
      <h1>Explore Companies</h1>
      {/* <SearchForm /> */}
      {/* <CompanyCardList companies={companies} /> */}

      {companies.map(company => (
        <div key={company.handle}>
          {company.name}
        </div>
      ))}
    </div> 
  );
}

export default CompanyList;