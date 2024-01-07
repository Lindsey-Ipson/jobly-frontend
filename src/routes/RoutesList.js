import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetails from "../companies/CompanyDetails";
import JobList from "../jobs/JobList";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import EditProfileForm from "../forms/EditProfileForm";


// TODO: delete later
import CompanyCard from "../companies/CompanyCard";
import JobCard from "../jobs/JobCard";


function RoutesList() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="companies" element={<CompanyList />} />

      {/* TODO: delete later */}
      <Route path="/companycard" element = {<CompanyCard />} />
      <Route path="/jobcard" element = {<JobCard />} />

      <Route path="/companies/:handle" element={<CompanyDetails />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/profile" element={<EditProfileForm />} />
      </ Routes>
  );
}

export default RoutesList;

// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Homepage from "../homepage/Homepage";
// import CompanyList from "../companies/CompanyList";
// import CompanyDetails from "../companies/CompanyDetails";
// import JobList from "../jobs/JobList";
// import LoginForm from "../forms/LoginForm";
// import SignupForm from "../forms/SignupForm";
// import EditProfileForm from "../forms/EditProfileForm";
// import NavBar from "../navigation/NavBar";

// // TODO: delete later
// import CompanyCard from "../companies/CompanyCard";
// import JobCard from "../jobs/JobCard";


// function App() {

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="companies" element={<CompanyList />} />

//           {/* TODO: delete later */}
//           <Route path="/companycard" element = {<CompanyCard />} />
//           <Route path="/jobcard" element = {<JobCard />} />

//           <Route path="/companies/:handle" element={<CompanyDetails />} />
//           <Route path="/jobs" element={<JobList />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/signup" element={<SignupForm />} />
//           <Route path="/profile" element={<EditProfileForm />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;