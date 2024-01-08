import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../common/ErrorAlert";

function LoginForm ({ login }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState([]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  async function handleSubmit (evt) {
    evt.preventDefault();
    
    const loginRes = await login(formData);
    if (loginRes.loggedIn) {
    navigate("/companies");
    }
    else {
      console.log("loginRes", loginRes)
      setErrors(loginRes.errs);
    }
  }

  return (
    <div className="LoginForm">
      <div className="container col-md-6 col-lg-4 mt-5">
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
          <div className="mb-3 text-start">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              type="text"
              className="form-control"
              required
            />
          </div>
  
          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">Password:</label>
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
  
          {errors.length ? <ErrorAlert alertType="danger" errs={errors} /> : null}
          <div className="text-end">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;