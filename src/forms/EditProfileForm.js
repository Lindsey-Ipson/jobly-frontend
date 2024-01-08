import React, { useState, useContext } from "react";
import ErrorAlert from "../common/ErrorAlert";
import JoblyApi from "../common/api";
import UserContext from "../common/UserContext";

function EditProfileForm({ updateUser }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: "",
  });

  const [errors, setErrors] = useState([]);

  function handleChange (evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value
    }));
    // TODO
    setErrors([]);
  };

  async function handleSubmit (evt) {
    evt.preventDefault();

    // Delete username from form data as it is not editable and not accepted by API JSON schema
    delete formData.username;

    console.log("formData", formData);

    let updatedUser;

    try {
    updatedUser = await JoblyApi.updateProfile(currentUser.username, formData);
    console.log("updatedUser", updatedUser);
    console.log("currentUser after update submit", currentUser);
    }
    catch (errs) {
      console.log("errs", errs);
      setErrors(errs);
    }

    setErrors([]);
    setCurrentUser(updatedUser);

  };

  return (
    <div className="EditProfileForm">
      <div className="container col-md-6 col-lg-4 mt-5">
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
          <div className="mb-3 text-start">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <p>{ currentUser.username }</p>
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="form-control"
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              className="form-control"
              required
            />
          </div>

          {errors.length ? (
            <ErrorAlert alertType="danger" errs={errors} />
          ) : null}
          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfileForm;